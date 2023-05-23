import { omit } from 'lodash'
import { ChangeEventHandler, ComponentProps, forwardRef, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { Eye, EyeCrossed } from '../../icons/index'
import { Label } from '../label/Label'
import { StyledInputPasswordWrapper } from './InputPassword.style'

export type InputPasswordProps = {
  headerLabel?: string
  headerIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  headerIconOnRight?: boolean

  name?: string
  placeholder?: string
  charactersNo?: number
  disabled?: ComponentProps<'input'>['disabled']
  readonly?: ComponentProps<'input'>['readOnly']
  autoComplete?: ComponentProps<'input'>['autoComplete']
  defaultValue?: string
  onChange?: ChangeEventHandler<HTMLInputElement>

  footerMessage?: string
  footerIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  footerIconOnRight?: boolean
  footerMessageType?: 'warning' | 'error'

  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
  modifiers?: string[] | string
} & ComponentProps<'div'> &
  Partial<UseFormRegisterReturn>

/**
 * Props Description @function InputPassword @typedef props:InputPasswordProps
 * @param headerLabel  - label on top of field **{ string }**
 * @param headerIcon - icon to be rendered in field header **{@linkcode React.FC<SVGProps<SVGElement>> }**
 * @param headerIconOnRight - switching positions of label with icon in header **{ boolean }**

 * @param name - name attribute **{string}**
 * @param placeholder - placeholder **{ string }**
 * @param charactersNo -  max number of characters **{ number }**
 * @param disabled - disabled state **{@linkcode ComponentProps<'input'>['disabled'] }**
 * @param readonly - readonly state **{@linkcode ComponentProps<'input'>['readOnly'] }**
 * @param autoComplete - forwarded attribute {@linkcode ComponentProps<'input'>['autoComplete'];}
 * @param defaultValue - initial value **{@linkcode ComponentProps<'input'>['defaultValue'] }**
 * @param onChange - event handler forwarded **{@linkcode ChangeEventHandler<HTMLInputElement> }**

 * @param footerMessage - validation message  **{ string }**
 * @param footerIcon - icon to be rendered in footer mesage **{@linkcode React.FunctionComponent<React.SVGProps<SVGSVGElement>>}**
 * @param footerIconOnRight - switching positions of message with icon in footer **{ boolean }**
 * @param footerMessageType - color presets for footer elements **{'warning' | 'error'}**

 * @param customStyled -  client side style particularities {@linkcode CSSObject }
 * @param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
 * @param modifiers - accessing style preset **{ 'success', 'error', 'warning', 'stretched', 'top16' }**
 * @param rest - inherits ComponentProps<'div'> {@linkcode ComponentProps<'div'>}
 * @returns {JSX} JSX
 */
export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (props, ref) => {
    const {
      headerLabel,
      headerIcon: HeaderIcon,
      headerIconOnRight,
      placeholder,
      defaultValue,
      disabled,
      readonly,
      name,
      autoComplete,
      charactersNo,
      onChange,
      footerMessage,
      footerMessageType,
      footerIcon: FooterIcon,
      footerIconOnRight,
      ...rest
    } = props

    const [inputValue, setInputValue] = useState(defaultValue ?? '')
    const [showValue, setShowValue] = useState(false)

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      setInputValue(event.target.value)
      onChange?.(event)
    }

    const ShowHideBtnIcon = showValue ? EyeCrossed : Eye

    const tranzientProps = Object.entries(props).reduce(
      (acc, [key, value]) =>
        Object.assign(acc, {
          [key]: key === 'headerIconOnRight' ? headerIconOnRight : value
        }),
      {}
    )

    return (
      <StyledInputPasswordWrapper {...tranzientProps}>
        {(headerLabel || HeaderIcon) && (
          <div className={'header'}>
            {headerLabel && (
              <Label label={headerLabel} modifiers={['formFieldHeader']} />
            )}
            {HeaderIcon && <HeaderIcon className={'header-icon'} />}
          </div>
        )}
        <div className={'input-container'}>
          <input
            ref={ref}
            placeholder={placeholder}
            name={name}
            type={showValue ? 'text' : 'password'}
            autoComplete={autoComplete}
            readOnly={readonly}
            disabled={disabled}
            value={inputValue}
            maxLength={charactersNo}
            onChange={handleOnChange}
            {...omit(rest, ['customStyled', 'customModifiers'])}
          />
          <button
            type={'button'}
            className={'showhide-button'}
            onClick={() => setShowValue((c) => !c)}
          >
            <ShowHideBtnIcon
              svg-hide={showValue ? 'false' : 'true'}
              className={'showhide-button-svg'}
            />
          </button>
        </div>
        {(footerMessage || footerIconOnRight) && (
          <div className={'footer'}>
            {FooterIcon && <FooterIcon className={'footer-icon'} />}
            {footerMessage && (
              <Label
                label={footerMessage}
                modifiers={[
                  'formFieldHeader',
                  String(footerMessageType === 'error' && 'error'),
                  String(footerMessageType === 'warning' && 'warning')
                ]}
              />
            )}
          </div>
        )}
      </StyledInputPasswordWrapper>
    )
  }
)

InputPassword.displayName = 'InputPassword'
InputPassword.defaultProps = {
  name: 'input-password-element',
  placeholder: 'Insert password here...'
}
