import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Container,
  Label,
  LinkButton,
  Input,
  Button,
  useStickyAlertContext
} from '@monorepo-ui/components'
import { Email } from '@monorepo-ui/icons'
import { Auth } from 'aws-amplify'
import { omit } from 'lodash'
import { BaseSyntheticEvent, memo, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import config from '../../../../config'
import { useValidation } from '../../../../utility/use-validation'
import { StyledReqEmailVerify } from './ReqEmailVerify.style'

export type ReqEmailVerifyProps = {
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
}

/**
 * Props Description @function RegEmailVerify @typedef props:RegEmailVerifyProps
 * @param eventTitle  - event title to be displayed **{string}**
 * @param email - email address used at registration **{ string }**
 * @param password - password used at registration for auto signin **{ string }**
 * @param modifiers - accessing style preset defined in MODIFIERS_CONFIG **{ ToDo if necessary }**
 * @param onCancelCallback - callback for canceling validation **{ (data:any)=>void }**
 * @param onRedirectAtLogin - callback for login redirect if autologin feature returns invalid credentials **{ (data:any)=>void }**
 * @param onSuccessCallback - callback for sucessful validation **{ (data:any)=>void }**
 * @returns {JSX} JSX
 */
export const ReqEmailVerify = memo((props: ReqEmailVerifyProps) => {
  const {
    eventTitle,
    email,
    password,
    onCancelCallback,
    onRedirectAtLogin,
    onSuccessCallback
  } = props
  const { addAlert } = useStickyAlertContext({ autoDispose: true })
  const [loading, setLoading] = useState(false)
  const { confirmCodeSchema, yup } = useValidation()
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
        confirmationCode: confirmCodeSchema.confirmationCode
      })
    )
  })

  const onSubmit = useCallback(
    async (data: FormType) => {
      setLoading(true)
      const response = await Auth.confirmSignUp(
        String(email),
        data.confirmationCode
      ).catch((error) => {
        addAlert({
          id: Math.random().toString(),
          isVisible: true,
          timeout: 2,
          children: error?.message,
          type: 'error'
        })

        setError('confirmationCode', {
          type: 'custom',
          message: error?.message
        })

        setLoading(false)
      })

      if (response) {
        const responseLogin = await Auth.signIn(
          String(email),
          String(password)
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
    [addAlert, email, onRedirectAtLogin, onSuccessCallback, password, setError]
  )

  const onFormSubmit = (
    e: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    handleSubmit(onSubmit)(e)
  }

  return (
    <>
      <form onSubmit={onFormSubmit} className={'form'}>
        <StyledReqEmailVerify
          {...omit(props, [
            'onCancelCallback',
            'onRedirectAtLogin',
            'onSuccessCallback',
            'email',
            'password'
          ])}
        >
          <Container modifiers={['authPageForm']}>
            <Label
              label={
                'Confirm registration' +
                String(eventTitle ? ' for ' + eventTitle : '')
              }
              modifiers={['h4']}
            />
            <Container modifiers={['row', 'holoContainer']}>
              <Email className={'envelope'} style={{ color: 'white' }} />
            </Container>
            <Container modifiers={['column', 'v20']}>
              <Label
                label={'To finish your registration, insert code sent to:'}
                modifiers={['mediumP']}
              />
              <Label
                label={email}
                modifiers={['mediumP', 'noVerticalSpacing', 'underlined']}
              />
            </Container>
            <Container modifiers={['column', 'fullWidth']}>
              <Input
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
            <Button
              modifiers={['primary', 'stretched', 'v24']}
              loading={loading}
              type={'submit'}
              text={'Verify'}
            />
            <Container modifiers={['column']}>
              <LinkButton prefixedText={'Wrong email?'} />
              <LinkButton
                text={'Change Email Address'}
                onClick={() => onCancelCallback?.(true)}
              />
            </Container>
          </Container>
        </StyledReqEmailVerify>
      </form>
      {config.env.MODE == 'development' && (
        <DevTool control={control} placement="top-right" />
      )}
    </>
  )
})
ReqEmailVerify.displayName = 'RegEmailVerify'
