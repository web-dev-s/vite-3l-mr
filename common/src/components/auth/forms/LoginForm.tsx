import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Container,
  Input,
  InputPassword,
  Label,
  Button,
  useStickyAlertContext
} from '@monorepo-ui/components'
import { Amplify, Auth } from 'aws-amplify'
import { BaseSyntheticEvent, ComponentProps, memo, useState } from 'react'
import { useForm } from 'react-hook-form'
import config from '../../../config'
import { useValidation } from '../../../utility/use-validation'

Amplify.configure({
  aws_cognito_region: config.aws.region,
  aws_user_pools_id: config.aws.cognito.usersPoolId,
  aws_user_pools_web_client_id: config.aws.cognito.appClientId
})

export type FormType = {
  email: string
  password: string
}

export type LoginFormProps = {
  eventTitle?: string
  onLoginSuccess?: (receivedData: any) => void
} & ComponentProps<'form'>

/**
 * Props Description  @function LoginForm @typedef props:LoginForm
 * @param eventTitle  - event title to be displayed **{string}**
 * @param onLoginSuccess  - callback to forward validation success **{(receivedData: any) => void}**
 * @param ComponentProps<'form'> - rest of props of type form **{@linkcode ComponentProps<'form'> }**
 * @returns {JSX} JSX
 */
export const LoginForm = memo((props: LoginFormProps) => {
  const { onLoginSuccess, eventTitle } = props
  const { addAlert } = useStickyAlertContext({ autoDispose: true })
  const [loading, setLoading] = useState(false)
  const { schemas, yup } = useValidation()
  const {
    register,
    control,
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

  const onSubmit = async (data: FormType) => {
    setLoading(true)
    const res = await Auth.signIn(data.email, data.password).catch((err) => {
      if (err.code === 'NotAuthorizedException') {
        addAlert({
          id: Math.random().toString(),
          isVisible: true,
          timeout: 2,
          children: err?.message,
          type: 'error'
        })
      }

      setLoading(false)
    })

    if (res?.signInUserSession?.accessToken?.jwtToken) {
      onLoginSuccess?.({ awscognito: res })
    }

    setLoading(false)
  }

  const onFormSubmit = (
    e: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    //executing
    handleSubmit(onSubmit)(e)
    //but returning void to form onSubmit
  }

  return (
    <>
      <Container
        modifiers={['authPageForm']}
        customStyled={{ minWidth: '300px' }}
      >
        <Label
          label={'Log In' + String(eventTitle ? ' to ' + eventTitle : '')}
          modifiers={['h4']}
        />
        <form onSubmit={onFormSubmit} style={{ width: '100%' }}>
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
            footerMessage={errors.email?.message}
            footerMessageType={'error'}
            type="email"
            {...register('email')}
          />
          <InputPassword
            headerLabel={'Password'}
            modifiers={[
              'stretched',
              'top16',
              String(errors?.password?.message && 'error')
            ]}
            autoComplete={'password'}
            required
            placeholder={'Enter your password here'}
            footerMessage={errors.password?.message}
            footerMessageType={'error'}
            {...register('password')}
          />
          <Button
            modifiers={['primary', 'stretched', 'v24']}
            loading={loading}
            type={'submit'}
            text={'Sign in'}
          />
        </form>
      </Container>

      {config.env?.MODE == 'development' && (
        <DevTool control={control} placement="top-right" />
      )}
    </>
  )
})

LoginForm.displayName = 'LoginForm'
