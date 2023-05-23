import { omit } from 'lodash'
import { FC, PropsWithChildren, useCallback } from 'react'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { StyledLink, StyledLinkContainer } from './LinkButton.style'

export type LinkButtonProps = {
  disabled?: boolean
  size?: 'small' | 'normal' | 'large'
  href?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  text?: string
  prefixedText?: string
  onClick?: (_e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  customStyled?: CSSObject
  customModifiers?: { link: ModifiersConfig; container: ModifiersConfig }
  linkModifiers?: string[] | string
  linkContainerModifiers?: string[] | string
}

/**
 * Props Description @function LinkButton @typedef props:LinkButtonProps
 * @param size - preset for size **{'small' | 'normal' | 'large' }**
 * @param disabled - disabled state **{ boolean }**
 * @param href url - anchor's href **{string }**
 * @param target forwarded target for href **{_'_self' | '_blank' | '_parent' | '_top' }**
 * @param text  - text **{ string }**
 * @param prefixedText - text to be rendered inlined before text **{string}**
 * @param onClick - event handler forwarded **{ (e) => void }**
 * @param customStyled -  client side style prop {@linkcode CSSObject }
 * @param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
 * @param linkModifiers - style preset **{ ['reversed', 'centered'] }**
 * @param linkContainerModifiers - accessing style preset **{ 'reversed', 'centered', 'stretched' }**
 * @returns {JSX} JSX
 */
export const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = (props) => {
  const { children, disabled, prefixedText, text, href, target, onClick } =
    props

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
      !disabled && onClick?.(e),
    [disabled, onClick]
  )
  const anchorAction = href
    ? { href: href, target: target ?? '_top' }
    : { onClick: handleClick }

  return (
    <StyledLinkContainer {...omit(props, ['onClick', 'linkModifiers'])}>
      {prefixedText && <span className={'prefixed-text'}>{prefixedText}</span>}
      <StyledLink
        {...omit(props, ['onClick', 'linkContainerModifiers'])}
        {...anchorAction}
      >
        {text && <span className={'text'}>{text}</span>}
        {children && <span className={'child'}>{children}</span>}
      </StyledLink>
    </StyledLinkContainer>
  )
}
