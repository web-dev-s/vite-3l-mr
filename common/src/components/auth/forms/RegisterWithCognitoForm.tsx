import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Button,
  Container,
  Input,
  InputPassword,
  Label,
  useStickyAlertContext
} from '@monorepo-ui/components'
import { Amplify, Auth } from 'aws-amplify'
import {
  BaseSyntheticEvent,
  ComponentProps,
  memo,
  useCallback,
  useEffect,
  useState
} from 'react'
import { useForm } from 'react-hook-form'
import config from '../../../config'
import { useValidation } from '../../../utility/use-validation'
import { ReqEmailVerify } from '../confirmations'

Amplify.configure({
  aws_cognito_region: config.aws.region,
  aws_user_pools_id: config.aws.cognito.usersPoolId,
  aws_user_pools_web_client_id: config.aws.cognito.appClientId
})

type FormType = {
  email: string
  password: string
}

export type RegisterWithCognitoFormProps = {
  eventTitle?: string
  onRedirectAtLogin?: (receivedData: any) => void
  onValidationSuccess?: (receivedData: any) => void
  onRenderConfirmation?: () => void
} & ComponentProps<'form'>

/**
 * Props Description  @function RegisterWithCognitoForm @typedef RegisterWithCognitoFormProps:LoginForm
 * @param eventTitle  - event title to be displayed **{string}**
 * @param onRedirectAtLogin  - callback for redirect to Login **{(receivedData: any) => void}**
 * @param onValidationSuccess  - callback for token receivement ack **{(receivedData: any) => void}**
 * @param onRenderConfirmation  - callback to ack render of confirmation screen **{(receivedData: any) => void}**
 * @param ComponentProps<'form'> - rest of props of type form **{@linkcode ComponentProps<'form'> }**
 * @returns {JSX} JSX
 */
export const RegisterWithCognitoForm = memo(
  (props: RegisterWithCognitoFormProps) => {
    const {
      onValidationSuccess,
      onRenderConfirmation,
      onRedirectAtLogin,
      eventTitle
    } = props
    const { addAlert, clearLastAlert } = useStickyAlertContext({
      autoDispose: true
    })
    const [renderCase, setRenderCase] = useState<'form' | 'confirmation'>(
      'form'
    )
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const { schemas, yup } = useValidation()
    const {
      register,
      control,
      watch,
      handleSubmit,
      formState: { errors }
    } = useForm<FormType>({
      mode: 'onSubmit',
      criteriaMode: 'firstError',
      resolver: yupResolver(
        yup.object().shape({
          email: schemas.email,
          password: schemas.password
        })
      )
    })

    useEffect(() => {
      const subscription = watch((value, { type }) => {
        if (type == 'change') {
          setCredentials((c) => ({ ...c, ...value }))
        }
      })
      return () => subscription.unsubscribe()
    }, [watch])
    useEffect(() => {
      return () => clearLastAlert()
    }, [])
    const tryLoggingIn = useCallback(async () => {
      const response = await Auth.signIn(
        String(credentials?.email),
        String(credentials?.password)
      ).catch((error) => {
        addAlert({
          id: Math.random().toString(),
          timeout: 10,
          isVisible: true,
          children: error?.message,
          type: 'error'
        })

        if (error?.code === 'NotAuthorizedException') {
          onRedirectAtLogin?.({ code: error?.code, message: error?.message })
        }
        if (error?.code === 'InvalidParameterException') {
          onRedirectAtLogin?.({ code: error?.code, message: error?.message })
        }

        if (error.code === 'UserNotConfirmedException') {
          setRenderCase('confirmation')
        }

        setLoading(false)
      })

      if (response?.signInUserSession?.accessToken?.jwtToken) {
        onValidationSuccess?.({ awscognito: response })
      }

      setLoading(false)
    }, [
      addAlert,
      credentials?.email,
      credentials?.password,
      onRedirectAtLogin,
      onValidationSuccess
    ])

    const onSubmit = async (data: FormType) => {
      setLoading(true)
      const response = await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          email: data.email, // optional
          name: data.email
          // phone_number,   // optional - E.164 number convention
          // other custom attributes to be added once we update to set user profile fields
        }
      }).catch(async (error) => {
        addAlert({
          id: Math.random().toString(),
          isVisible: true,
          timeout: 2,
          children: error?.message,
          type: 'error'
        })

        if (error?.code === 'UsernameExistsException') {
          await tryLoggingIn()
        } else {
          setLoading(false)
        }
      })

      setLoading(false)

      if (response?.userConfirmed === false) {
        onRenderConfirmation?.()
        setRenderCase('confirmation')
      } else {
        onValidationSuccess?.({ awscognito: response })
      }
    }

    const onFormSubmit = (
      e: BaseSyntheticEvent<object, any, any> | undefined
    ) => {
      handleSubmit(onSubmit)(e)
    }

    return (
      <>
        {renderCase === 'form' && (
          <form onSubmit={onFormSubmit} className={'form'}>
            <Container modifiers={['authPageForm']}>
              <Label
                modifiers={['h4']}
                label={
                  'Register' + String(eventTitle ? ' to ' + eventTitle : '')
                }
              />
              <Input
                headerLabel={'Email'}
                modifiers={[
                  'stretched',
                  'primary',
                  'top16',
                  String(errors?.email?.message && 'error')
                ]}
                required
                placeholder={'Enter your email here'}
                {...register('email')}
                footerMessage={errors.email?.message}
                footerMessageType={'error'}
                type="email"
              />
              <InputPassword
                headerLabel={'Password'}
                modifiers={[
                  'stretched',
                  'primary',
                  'top16',
                  String(errors?.password?.message && 'error')
                ]}
                autoComplete={'password'}
                required
                placeholder={'Enter your password here'}
                {...register('password')}
                footerMessage={errors.password?.message}
                footerMessageType={'error'}
              />
              <Button
                modifiers={['primary', 'stretched', 'v24']}
                loading={loading}
                type={'submit'}
                text={'Register'}
              />
            </Container>
            {config.env.MODE == 'development' && (
              <DevTool control={control} placement="top-right" />
            )}
          </form>
        )}
        {renderCase === 'confirmation' && (
          <ReqEmailVerify
            eventTitle={eventTitle}
            email={credentials?.email}
            password={credentials?.password}
            onCancelCallback={() => setRenderCase('form')}
            onSuccessCallback={onValidationSuccess}
          />
        )}
      </>
    )
  }
)
RegisterWithCognitoForm.displayName = 'RegisterWithCognitoForm'
