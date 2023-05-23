import { Container, AuthLayout, LinkButton } from '@monorepo-ui/components/'
import { FunctionComponent, memo, useCallback, useState } from 'react'
import { setCookie, COOKIE_COGNITO_KEY } from '../../utility/cookie-set'
import { backgroundFallback } from './background'
import {
  LoginForm,
  RecoverPasswordForm,
  RegisterWithCognitoForm
} from './forms'
import { RegisterOptions } from './register-options'

export type AuthProps = {
  eventTitle: string
  navigateAtRoot: () => void
}

export const Auth: FunctionComponent<AuthProps> = memo((props) => {
  const { navigateAtRoot, eventTitle } = props

  const [renderCase, setRenderCase] = useState<
    'login' | 'register' | 'register-with-cognito' | 'recover-password'
  >('login')
  const [showRegConfirm, setShowRegConfirm] = useState(false)

  const onLoginSuccess = (authData: any) => {
    if (authData?.awscognito) {
      setCookie({
        key: COOKIE_COGNITO_KEY,
        token: authData?.awscognito?.signInUserSession?.accessToken?.jwtToken
      })
    }

    document.cookie = `MULTIREPO_DOMAIN=${document.domain}; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure; domain=.app1.local.com; path=/`
    // exiting Auth with redirect:
    navigateAtRoot?.()
  }

  const generateFooterElements = useCallback(() => {
    switch (renderCase) {
      case 'login':
        return (
          <Container modifiers={['column', 'centeredContent']}>
            <LinkButton
              prefixedText={'New to Monorepo?'}
              linkModifiers={['defaultLink']}
              size={'small'}
              onClick={() => setRenderCase('register')}
              text={'Create an account'}
            />
            <LinkButton
              prefixedText={'Forgot your password?'}
              linkModifiers={['defaultLink']}
              size={'small'}
              onClick={() => setRenderCase('recover-password')}
              text={'Recover Password'}
            />
          </Container>
        )
      case 'register':
      case 'register-with-cognito':
        return (
          <Container modifiers={['column', 'centeredContent']}>
            {showRegConfirm && (
              <LinkButton
                prefixedText={'Forgot your password?'}
                linkModifiers={['centered']}
                onClick={() => setRenderCase('recover-password')}
                text={'Recover Password'}
              />
            )}
            <LinkButton
              prefixedText={'Another Method?'}
              linkModifiers={['centered']}
              onClick={() => setRenderCase('login')}
              text={'Go Back'}
            />
          </Container>
        )
      case 'recover-password':
        return (
          <Container modifiers={['column', 'centeredContent']}>
            <LinkButton
              prefixedText={'New to Monorepo?'}
              linkModifiers={['centeredContent']}
              onClick={() => setRenderCase('register')}
              text={'Create an account'}
            />
            <LinkButton
              prefixedText={'Already have an account?'}
              linkModifiers={['centeredContent']}
              onClick={() => setRenderCase('login')}
              text={'Go back to Sign in'}
            />
          </Container>
        )
    }
  }, [renderCase, showRegConfirm])

  return (
    <AuthLayout
      header
      footer={generateFooterElements()}
      backgroundImage={backgroundFallback}
    >
      {renderCase === 'login' && (
        <LoginForm onLoginSuccess={onLoginSuccess} eventTitle={eventTitle} />
      )}
      {renderCase === 'register' && (
        <RegisterOptions
          optionButtons={['Register with Cognito ']}
          onSelect={(index: number) =>
            setRenderCase(index === 0 ? 'register-with-cognito' : 'register')
          }
        />
      )}
      {renderCase == 'register-with-cognito' && (
        <RegisterWithCognitoForm
          eventTitle={eventTitle}
          onRedirectAtLogin={() => setRenderCase('login')}
          onValidationSuccess={onLoginSuccess}
          onRenderConfirmation={() => setShowRegConfirm(true)}
        />
      )}
      {renderCase === 'recover-password' && (
        <RecoverPasswordForm
          onPasswordChanged={(authData) =>
            authData ? onLoginSuccess(authData) : setRenderCase('login')
          }
        />
      )}
    </AuthLayout>
  )
})

Auth.displayName = 'Auth'
