import {
  FC,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode
} from 'react'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { Wordmark } from '../../../icons'
import { StyledLayout } from './AuthLayout.style'

export type AuthLayoutProps = {
  header?: ReactNode | boolean
  asideLeft?: ReactNode
  asideRight?: ReactNode
  footer?: ReactNode | ReactElement

  backgroundImage?: string

  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
  modifiers?: string[] | string
}

/**
 * Props Description @function AuthLayout @typedef props:AuthLayoutProps
 * @param header - function element for header area {@linkcode ReactNode | boolean   }
 * @param asideLeft - React node for aside left area {@linkcode React.ReactNode }
 * @param asideRight - React node for aside right area {@linkcode React.ReactNode }
 * @param footer - React node for bottom right  {@linkcode React.ReactNode }
 * @param backgroundImage - Alternative for contexted background value  **{string}**
 * @param customStyled -  client side style prop {@linkcode CSSObject }
 * @param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
 * @param modifiers - accessing style preset defined  **{ 'row' }**
 * @returns {JSX} JSX
 */

export const AuthLayout: FC<PropsWithChildren<AuthLayoutProps>> = (props) => {
  const { header, asideLeft, children, asideRight, footer, backgroundImage } =
    props
  return (
    <StyledLayout
      {...props}
      backgroundImage={
        backgroundImage ?? 'fallback from context or receied url storage'
      }
    >
      {header && (
        <div className={'ly-header'}>
          {typeof header === 'function' ? (
            header()
          ) : (
            <Wordmark className={'ly-wordmark'} />
          )}
        </div>
      )}
      <main className={'ly-main'}>
        {asideLeft && <aside className={'ly-aside-left'}>{asideLeft}</aside>}
        <div className={'ly-content'}>{children}</div>
        {asideRight && <aside className={'ly-aside-right'}>{asideRight}</aside>}
      </main>
      {footer && (
        <div className={'ly-footer'}>
          {isValidElement(footer) ? (
            footer
          ) : (
            <Wordmark className={'ly-wordmark'} />
          )}
        </div>
      )}
    </StyledLayout>
  )
}

AuthLayout.displayName = 'AuthLayout'
