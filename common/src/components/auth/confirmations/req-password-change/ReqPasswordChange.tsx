import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Container,
  Label,
  LinkButton,
  Input,
  Button,
  InputPassword,
  useStickyAlertContext
} from '@monorepo-ui/components'
import { Email } from '@monorepo-ui/icons'
import { Auth } from 'aws-amplify'
import { omit } from 'lodash'
import { BaseSyntheticEvent, memo, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import config from '../../../../config'
import { useValidation } from '../../../../utility/use-validation'
import { StyledReqPasswordChange } from './ReqPasswordChange.style'

export type ReqPasswordChangeProps = {
  eventTitle?: string
  email?: string
  password?: string
  modifiers?: unknown[] | string
  onCancelCallback?: (data?: any) => void
  onRedirectAtLogin?: (data?: any) => void
  onSuccessCallback?: (data: { awscognito: any }) => void
}
type FormType = {
  confirmationCode: string
  password: string
  confirmPassword: string
}
/**
 * Props Description @function ReqPasswordChange @typedef props:ReqPasswordChangeProps
 * @param eventTitle  - event title to be displayed **{string}**
 * @param email - email address used at registration **{ string }**
 * @param password - password used at registration for auto signin **{ string }**
 * @param modifiers - accessing style preset defined in MODIFIERS_CONFIG **{ ToDo if necessary }**
 * @param onCancelCallback - callback for canceling validation **{ (data:any)=>void }**
 * @param onCancelCallback - callback for login redirect if autologin feature returns invalid credentials **{ (data:any)=>void }**
 * @param onSuccessCallback - callback for sucessful validation **{ (data:any)=>void }**
 * @returns {JSX} JSX
 */
export const ReqPasswordChange = memo((props: ReqPasswordChangeProps) => {
  const {
    email,
    eventTitle,
    onCancelCallback,
    onRedirectAtLogin,
    onSuccessCallback
  } = props
  const { addAlert } = useStickyAlertContext({ autoDispose: true })
  const [loading, setLoading] = useState(false)
  const { schemas, confirmCodeSchema, yup } = useValidation()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormType>({
    mode: 'onSubmit',
    criteriaMode: 'firstError',
    resolver: yupResolver(
      yup.object().shape({
        confirmationCode: confirmCodeSchema.confirmationCode,
        password: schemas.password,
        confirmPassword: schemas.confirmPassword
      })
    )
  })

  const onSubmit = useCallback(
    async (data: FormType) => {
      setLoading(true)

      if (!email) {
        onCancelCallback?.()
      }

      const response = await Auth.forgotPasswordSubmit(
        String(email),
        String(data?.confirmationCode),
        String(data.password)
      ).catch((error) => {
        if (
          ['CodeMismatchException', 'ExpiredCodeException'].indexOf(
            String(error?.code)
          ) > -1
        ) {
          setError('confirmationCode', {
            type: 'custom',
            message: error?.message
          })
        } else {
          addAlert({
            id: Math.random().toString(),
            isVisible: true,
            timeout: 10,
            children: error?.message,
            type: 'error'
          })
        }

        setLoading(false)
      })

      if (response) {
        const responseLogin = await Auth.signIn(
          String(email),
          String(data.password)
        ).catch((error) => {
          addAlert({
            id: Math.random().toString(),
            isVisible: true,
            timeout: 2,
            children: error?.message,
            type: 'error'
          })

          if (error?.code === 'NotAuthorizedException') {
            onRedirectAtLogin?.({ code: error?.code, message: error?.message })
          }
        })

        if (responseLogin?.signInUserSession?.accessToken?.jwtToken) {
          onSuccessCallback?.({ awscognito: responseLogin })
        }
      }
    },
    [
      addAlert,
      email,
      onCancelCallback,
      onRedirectAtLogin,
      onSuccessCallback,
      setError
    ]
  )

  const onFormSubmit = (
    e: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    handleSubmit(onSubmit)(e)
  }

  return (
    <>
      <form onSubmit={onFormSubmit} className={'form'}>
        <StyledReqPasswordChange
          {...omit(props, [
            'onCancelCallback',
            'onRedirectAtLogin',
            'onSuccessCallback',
            'email',
            'password'
          ])}
        >
          <Container
            modifiers={['authPageForm']}
            customStyled={{
              maxHeight: 'calc(560px + 40px)',
              padding: '10px 96px'
            }}
          >
            <Label
              label={
                'Change Password' +
                String(eventTitle ? ' for ' + eventTitle : '')
              }
              modifiers={['h4']}
            />
            <Container
              modifiers={['row', 'holoContainer']}
              customStyled={{ padding: '0 0' }}
            >
              <Email className={'envelope'} style={{ color: 'white' }} />
            </Container>
            <Container modifiers={['column']}>
              <Label
                label={'To change your password, insert code sent to:'}
                modifiers={['mediumP']}
              />
              <Label
                label={email}
                modifiers={['mediumP', 'noVerticalSpacing', 'underlined']}
              />
            </Container>
            <Container modifiers={['column', 'fullWidth']}>
              <Input
                headerLabel={'Confirmation Code'}
                modifiers={[
                  'stretched',
                  'primary',
                  'top16',
                  String(errors.confirmationCode?.message && 'error')
                ]}
                required
                placeholder={'Enter received code'}
                {...register('confirmationCode')}
                footerMessage={errors.confirmationCode?.message}
                footerMessageType={'error'}
                type="text"
              />
            </Container>
            <Container modifiers={['column', 'fullWidth']}>
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
                defaultValue={localStorage.getItem('password') ?? ''}
                {...register('password')}
                footerMessage={errors.password?.message}
                footerMessageType={'error'}
              />
            </Container>
            <Container modifiers={['column', 'fullWidth']}>
              <InputPassword
                headerLabel={'Confirm Password'}
                modifiers={[
                  'stretched',
                  'primary',
                  'top16',
                  String(errors?.password?.message && 'error')
                ]}
                autoComplete={'password'}
                required
                placeholder={'Confirm your password here'}
                defaultValue={localStorage.getItem('password') ?? ''}
                {...register('confirmPassword')}
                footerMessage={errors.confirmPassword?.message}
                footerMessageType={'error'}
              />
            </Container>
            <Button
              modifiers={['primary', 'stretched', 'v24']}
              loading={loading}
              type={'submit'}
              text={'Change Password'}
            />
            <Container modifiers={['column']}>
              <LinkButton prefixedText={'Wrong email?'} />
              <LinkButton
                text={'Change Email Address'}
                onClick={() => onCancelCallback?.(true)}
              />
            </Container>
          </Container>
        </StyledReqPasswordChange>
      </form>
      {config.env.MODE == 'development' && (
        <DevTool control={control} placement="top-right" />
      )}
    </>
  )
})
ReqPasswordChange.displayName = 'ReqPasswordChange'
