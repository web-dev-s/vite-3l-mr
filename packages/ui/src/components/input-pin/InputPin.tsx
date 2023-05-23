import { omit } from 'lodash'
import { ComponentProps, forwardRef, useCallback, useState } from 'react'
import { PinInput } from 'react-input-pin-code'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { Phone, Close, Check } from '../../icons'
import { Colors } from '../../theme'
import { Label } from '../label/Label'
import { StyledInputPin } from './InputPin.style'

export type InputPinProps = {
  prefix?: string
  charactersNo?: number
  onPinChanged?: (target: { value: string }) => void
  onPinCompleted?: (pin: string[]) => void

  footerMessage?: string
  footerIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  footerIconOnRight?: boolean
  footerMessageType?: 'warning' | 'error'

  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
  modifiers?: string[] | string
} & Omit<ComponentProps<typeof PinInput>, 'onChange' | 'values'>

/**
 * Props Description@function InputPin @typedef props:InputPinProps
 * @param prefix -prefix string in front of code **{ string }**
 * @param charactersNo -  max number of characters **{ number }**
 * @param onPinChanged - event handler adapted **{ (sending: { value: string }) => void;}**
 * @param onPinCompleted - event handler for completion **{ (pin: string[] ) => void;}**

 * @param footerMessage - validation message  **{ string }**
 * @param footerIcon - icon to be rendered in footer mesage **{@linkcode React.FunctionComponent<React.SVGProps<SVGSVGElement>>}**
 * @param footerIconOnRight - switching positions of message with icon in footer **{ boolean }**
 * @param footerMessageType - color presets for footer elements **{'warning' | 'error'}**

 * @param customStyled -  client side style particularities {@linkcode CSSObject }
 * @param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
 * @param modifiers - accessing style preset **{ 'stretched', 'success', 'error', 'withValidationButtons' }**
 * @param rest - inherits ComponentProps<'div'> {@linkcode ComponentProps<PinInput> }
 * @returns {JSX} JSX
 */
export const InputPin = forwardRef<HTMLInputElement, InputPinProps>(
  (props, ref) => {
    const {
      modifiers,
      prefix,
      charactersNo,
      onPinChanged,
      footerMessage,
      footerMessageType,
      footerIcon: FooterIcon,
      footerIconOnRight
    } = props
    const [pin, setPin] = useState<string[]>([
      ...new Array(charactersNo ?? 5).map(() => '')
    ])

    const onPinChange = (
      _v: string | string[],
      _index: number,
      values: string[]
    ) => {
      setPin([...values])
      onPinChanged?.({ value: values.join('') })
    }

    const onPinCompleted = (_values: string[]) => {
      // to be determined how is needed at client side level
      // onPinCompleted?.(values)
    }

    const ValidationBtnIcon = footerMessageType === 'error' ? Close : Check
    const hasVButtons =
      modifiers?.includes('withValidationButtons') &&
      ((modifiers?.includes('error') &&
        footerMessage &&
        footerMessage?.length > 0) ||
        modifiers?.includes('success'))

    const handleValidationButton = useCallback(() => {
      if (footerMessage) {
        setPin([...new Array(charactersNo ?? 5).map(() => '')])
        onPinChanged?.({ value: '' })
      }
    }, [charactersNo, footerMessage, onPinChanged])

    return (
      <StyledInputPin
        {...omit(props, [
          'onPinChanged',
          'onPinCompleted',
          'charactersNo',
          'onComplete'
        ])}
      >
        <div className={'pin-component'} ref={ref}>
          <Phone className={'phone-icon'} />
          {prefix && (
            <span className={'prefix'}>
              {prefix}
              {' - '}
            </span>
          )}
          <PinInput
            placeholder={''}
            values={pin?.map((i: string) => i ?? '')}
            type={'number' /*  | 'text' */}
            mask={false}
            size={'lg'} //'xs' | 'sm' | 'md' | 'lg';
            // validate?: string | string[] | RegExp;
            validate={new RegExp(/^[a-zA-Z0-9]*$/)}
            format={(char: string) => char.toUpperCase()}
            showState={true}
            autoFocus={true}
            autoTab={true}
            containerClassName={'pin-container'}
            inputClassName={'input'}
            borderColor={Colors.transparent}
            errorBorderColor={Colors.error}
            //  focusBorderColor={Colors.monorepoLight}
            //  validBorderColor={Colors.success}
            onChange={onPinChange}
            onComplete={onPinCompleted}
          />
          {hasVButtons && (
            <button
              type={'button'}
              className={'validation-button'}
              onClick={handleValidationButton}
            >
              <ValidationBtnIcon className={'validation-button-svg'} />
            </button>
          )}
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
      </StyledInputPin>
    )
  }
)

InputPin.displayName = 'InputPin'
