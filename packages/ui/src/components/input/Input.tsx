import { omit } from 'lodash'
import { ChangeEventHandler, ComponentProps, forwardRef, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { Label } from '../label/Label'
import { StyledInputWrapper } from './Input.style'

export type InputProps = {
  headerLabel?: string
  headerIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  headerIconOnRight?: boolean

  name?: string
  placeholder?: string
  charactersNo?: number
  type?: ComponentProps<'input'>['type']
  disabled?: ComponentProps<'input'>['disabled']
  readonly?: ComponentProps<'input'>['readOnly']
  autoComplete?: ComponentProps<'input'>['autoComplete']
  defaultValue?: ComponentProps<'input'>['defaultValue']
  onChange?: ChangeEventHandler<HTMLInputElement>

  footerMessage?: string
  footerIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  footerIconOnRight?: boolean
  footerMessageType?: 'warning' | 'error'

  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
  modifiers?: string[] | string
} & Omit<ComponentProps<'div'>, 'onChange'> &
  Partial<UseFormRegisterReturn>

/**
 * Props Description @function Input @typedef props:InputProps
 * @param headerLabel  - label on top of field **{ string }**
 * @param headerIcon - icon to be rendered in field header **{@linkcode React.FC<SVGProps<SVGElement>> }**
 * @param headerIconOnRight - switching positions of label with icon in header **{ boolean }**
 *
 * @param name - name attribute used in form field registration **{string}**
 * @param placeholder - placeholder **{ string }**
 * @param charactersNo -  max number of characters **{ number }**
 * @param type - forwarded button's type **{@linkcode ComponentProps<'input'>['type']}**
 * @param disabled - disabled state **{@linkcode ComponentProps<'input'>['disabled'] }**
 * @param readonly - readonly state **{@linkcode ComponentProps<'input'>['readOnly'] }**
 * @param autoComplete - forwarded attribute {@linkcode ComponentProps<'input'>['autoComplete']}
 * @param defaultValue - initial value **{@linkcode ComponentProps<'input'>['defaultValue'] }**
 * @param onChange - event handler forwarded **{@linkcode ChangeEventHandler<HTMLInputElement> }**
 *
 * @param footerMessage - validation message  **{ string }**
 * @param footerIcon - icon to be rendered in footer mesage **{@linkcode React.FunctionComponent<React.SVGProps<SVGSVGElement>>}**
 * @param footerIconOnRight - switching positions of message with icon in footer **{ boolean }**
 * @param footerMessageType - color presets for footer elements **{'warning' | 'error'}**
 *
 * @param customStyled -  client side style particularities {@linkcode CSSObject }
 * @param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
 * @param modifiers - accessing style preset **{ 'success', 'error', 'warning', 'stretched', 'top16' }**
 * @param rest - inherits ComponentProps<'div'> {@linkcode ComponentProps<'div'>}
 * @returns {JSX} JSX
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    headerLabel: label,
    headerIcon: HeaderIcon,
    headerIconOnRight,
    placeholder,
    defaultValue,
    disabled,
    readonly,
    name,
    type,
    autoComplete,
    charactersNo,
    footerMessage,
    footerMessageType,
    footerIcon: FooterIcon,
    footerIconOnRight,
    onChange,
    ...rest
  } = props

  const [inputValue, setInputValue] = useState(defaultValue ?? '')

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value)
    onChange?.(event)
  }

  const tranzientProps = Object.entries(omit(props, ['onChange'])).reduce(
    (acc, [key, value]) =>
      Object.assign(acc, {
        [key]: key === 'headerIconOnRight' ? headerIconOnRight : value
      }),
    {}
  )

  return (
    <StyledInputWrapper {...tranzientProps}>
      {(label || HeaderIcon) && (
        <div className={'header'}>
          {label && <Label label={label} modifiers={['formFieldHeader']} />}
          {HeaderIcon && <HeaderIcon className={'header-icon'} />}
        </div>
      )}
      <div className={'input-container'}>
        <input
          ref={ref}
          placeholder={placeholder}
          value={inputValue}
          type={type}
          name={name}
          readOnly={readonly}
          disabled={disabled}
          autoComplete={autoComplete}
          maxLength={charactersNo}
          onChange={handleOnChange}
          {...omit(rest, ['customStyled', 'customModifiers'])}
        />
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
    </StyledInputWrapper>
  )
})

Input.displayName = 'Input'
Input.defaultProps = {
  type: 'text',
  name: 'input-element',
  placeholder: 'Insert text here...'
}
