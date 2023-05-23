import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Button,
  Container,
  Input,
  Label,
  useStickyAlertContext
} from '@monorepo-ui/components'
import { Auth } from 'aws-amplify'
import {
  BaseSyntheticEvent,
  ComponentProps,
  memo,
  useEffect,
  useState
} from 'react'
import { useForm } from 'react-hook-form'
import config from '../../../config'
import { useValidation } from '../../../utility/use-validation'
import { ReqPasswordChange } from '../confirmations'

type FormType = {
  email: string
}

export type RecoverPasswordProps = {
  eventTitle?: string
  onPasswordChanged?: (receivedData: any) => void
} & ComponentProps<'form'>

/**
 * Props Description  @function RecoverPasswordForm @typedef props:RecoverPasswordProps
 * @param eventTitle  - event title to be displayed **{string}**
 * @param onPasswordChanged  - callback to forward validation success **{(receivedData: any) => void}**
 * @param ComponentProps<'form'> - rest of props of type form **{@linkcode ComponentProps<'form'> }**
 * @returns {JSX} JSX
 */

export const RecoverPasswordForm = memo((props: RecoverPasswordProps) => {
  const { eventTitle, onPasswordChanged } = props
  const { addAlert } = useStickyAlertContext({ autoDispose: true })
  const [renderCase, setRenderCase] = useState<
    'requestChange' | 'passwordChange'
  >('requestChange')
  const [credentials, setCredentials] = useState({ email: '' })

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
        email: schemas.email
      })
    )
  })

  useEffect(() => setLoading(false), [renderCase])

  useEffect(() => {
    const subscription = watch((value, { type }) => {
      if (type == 'change') {
        setCredentials((c) => ({ ...c, ...value }))
      }
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit = async (data: FormType) => {
    setLoading(true)
    const response = await Auth.forgotPassword(data.email).catch((error) => {
      addAlert({
        id: Math.random().toString(),
        isVisible: true,
        timeout: 10,
        children: error?.message,
        type: 'error'
      })
      setLoading(false)
    })

    if (response) {
      setRenderCase('passwordChange')
    }
  }

  const onFormSubmit = (
    e: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    handleSubmit(onSubmit)(e)
  }
  return (
    <>
      {renderCase === 'requestChange' && (
        <form onSubmit={onFormSubmit} className={'form'}>
          <Container modifiers={['authPageForm']}>
            <Label
              label={'recover password'}
              modifiers={['h4', 'uppercased']}
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
              footerMessage={errors.email?.message}
              footerMessageType={'error'}
              type="email"
              {...register('email')}
            />
            <Button
              modifiers={['secondary', 'stretched', 'v24']}
              loading={loading}
              type={'submit'}
              text={'Send confirmation'}
            />
          </Container>
          {config.env?.MODE == 'development' && (
            <DevTool control={control} placement="top-right" />
          )}
        </form>
      )}
      {renderCase === 'passwordChange' && (
        <ReqPasswordChange
          eventTitle={eventTitle}
          email={'daniel.paduraru@gmail.com' ?? credentials?.email}
          onCancelCallback={() => setRenderCase('requestChange')}
          onSuccessCallback={onPasswordChanged}
        />
      )}
    </>
  )
})

RecoverPasswordForm.displayName = 'RecoverPasswordForm'
