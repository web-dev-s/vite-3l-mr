import { ComponentProps, forwardRef, ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { Check } from '../../icons'
import { Label } from '../label/Label'
import { StyledCheckboxContainer } from './Checkbox.style'

export type CheckboxProps = {
  label: string | ReactNode
  name: string
  shape?: 'square' | 'circle'
  mandatory?: boolean
  readonly?: boolean
  errorMessage?: string
  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
  modifiers?: string[] | string
} & ComponentProps<'input'> &
  Omit<Partial<UseFormRegisterReturn>, 'onChange'>

/**
 * Props Description @function Checkbox @typedef props:CheckboxProps
 * @param label - renders as childs of checkbox **{ ReactNode | string}**
 * @param name - name attribute **{ string }**
 * @param mandatory - is mandatory state  **{ boolean }**
 * @param errorMessage - error message **{ string }**
 * @param customStyled -  client side style prop {@linkcode CSSObject }
 * @param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
 * @param modifiers - accessing style preset defined **{'selfStartCheckbox'}**
 * @param rest - inherits ComponentProps<'input'> {@linkcode ComponentProps<'input'>}
 * @returns {JSX} JSX
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref) => {
    const {
      label,
      name,
      disabled,
      readonly,
      defaultChecked,
      errorMessage,
      ...rest
    } = props

    const readonlyBypassUncontrolled =
      readonly && [true, false].indexOf(Boolean(defaultChecked)) > -1
        ? {
            onChange: () => {
              /*  */
            },
            checked: defaultChecked
          }
        : {}

    const defaultCheckedBypassUncontrolled =
      !readonly && [true, false].indexOf(Boolean(defaultChecked)) > -1
        ? { defaultChecked: defaultChecked }
        : {}

    return (
      <StyledCheckboxContainer {...props}>
        <label
          className={`host ${disabled ? 'checkbox-disabled' : ''}`}
          app-checkbox-error={
            errorMessage && errorMessage?.length > 0 ? 'error' : 'false'
          }
        >
          <span className={'checkmark-container'}>
            <input
              ref={ref}
              className={'input'}
              type="checkbox"
              disabled={disabled}
              name={name ?? 'checkbox'}
              {...readonlyBypassUncontrolled}
              {...defaultCheckedBypassUncontrolled}
              {...rest}
            />
            <span className={'checkbox-control'}>
              <Check className={'checkbox-control-icon'} />
            </span>
          </span>
          <span className={'checkbox-label'}>{label}</span>
        </label>
        <div>
          <Label modifiers={['error']} label={errorMessage} />
        </div>
      </StyledCheckboxContainer>
    )
  }
)
Checkbox.displayName = 'Checkbox'
Checkbox.defaultProps = {
  shape: 'square'
}
