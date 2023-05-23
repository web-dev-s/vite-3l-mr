import React, {
  ComponentProps,
  FC,
  PropsWithChildren,
  useCallback
} from 'react'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { Spinner } from '../spinner'
import { Tooltip } from '../tooltip/Tooltip'
import { StyledButton } from './Button.style'

export type ButtonProps = {
  icon?: FC<React.SVGProps<SVGSVGElement>>
  rightIcon?: boolean
  loading?: boolean
  text?: string
  onClick?: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent> | any) => void
  size?: 'small' | 'normal' | 'large'
  type?: 'button' | 'submit' | 'reset'
  tooltipText?: string
  toolTipPlacement?: 'top' | 'bottom'
  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
  modifiers?: string[] | string
} & Omit<ComponentProps<'button'>, 'onClick' | 'type'>

/**
 * Props Description @function Button @typedef props:ButtonProps
 * @param icon - icon passed as JSX {@linkcode JSX.Element }
 * @param rightIcon - icon emplacement on right of text **{ boolean }**
 * @param type - forwarded button's type **{'button|submit|reset' }**
 * @param loading - loading state **{boolean }**
 * @param onClick - event handler forwarded **{ (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | any) => void }**
 * @param text  - button text **{ string }**
 * @param size - preset for size **{'small' | 'normal' | 'large' }**
 * @param tooltipText - tooltip text  **{string }**
 * @param toolTipPlacement - preset tooltip placement **{ 'top' | 'bottom'}**
 * @param customStyled -  client side style prop {@linkcode CSSObject }
 * @param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
 * @param modifiers - accessing style preset defined in MODIFIERS_CONFIG **{ 'primary','secondary','stretched','shadowed','uppercased','iconOnly','fontEffects','top8','top24','v24' }**
 * @returns {JSX} JSX
 */

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    type = 'button',
    children,
    disabled,
    loading,
    icon,
    rightIcon,
    text,
    size,
    onClick,
    tooltipText,
    toolTipPlacement,
    modifiers = ['primary']
  } = props

  const Icon = icon

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
      !disabled && !loading && onClick?.(e),
    [disabled, loading, onClick]
  )

  const buttonEvent = type === 'button' ? { onClick: handleClick } : {}
  const transientProps = {
    modifiers,
    type,
    icon,
    rightIcon: rightIcon ? true : undefined,
    text,
    size,
    disabled: disabled ? true : undefined,
    ...buttonEvent
  }

  return (
    <Tooltip text={tooltipText} placement={toolTipPlacement}>
      <StyledButton {...transientProps}>
        <span className={'container'}>
          {loading && (
            <Spinner
              type="oval"
              visible={loading}
              width={'1em'}
              height={'1em'}
              strokeWidth={8}
              strokeWidthSecondary={4}
              presets={'primaryText'}
              modifiers={[
                String(text && !rightIcon && 'spacedRight10'),
                String(text && rightIcon && 'spacedLeft10')
              ]}
            />
          )}
          {Icon && !loading && <Icon className={'icon'} />}
          {text && <span className={'text'}>{text}</span>}
        </span>
        {!loading ? <span className={'child'}>{children}</span> : null}
      </StyledButton>
    </Tooltip>
  )
}

Button.defaultProps = {
  type: 'button',
  size: 'normal'
}
