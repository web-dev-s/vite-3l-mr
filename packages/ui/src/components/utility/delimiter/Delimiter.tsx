import { FC } from 'react'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { StyledDelimiter } from './Delimiter.style'

export type DelimiterProps = {
  text?: string
  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
  modifiers?: string[] | string
}

/**
 * Description @function Delimiter @typedef props:DelimiterProps
 * @param text - delimiter text **{string}**
 * @param striketroughOnly - delimiter without text, only with a striketrough line **{boolean}**
 * @param customStyled -  client side style prop {@linkcode CSSObject }
 * @param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
 * @param modifiers - accessing style preset **{ 'large', 'medium', 'small', 'bottom8', 'v40', 'v20', 'bottom8', 'striketrouhOnly' }**
 * @returns {JSX} JSX
 * @example  <Delimiter modifiers={['verticalPadded20']} text={'texted delimiter'} />
 */
export const Delimiter: FC<DelimiterProps> = (props) => {
  const { text } = props

  return (
    <StyledDelimiter {...props}>
      <div className={'striketrough'} />
      {text && <span className={'text'}>{text}</span>}
      <div className={'striketrough'} />
    </StyledDelimiter>
  )
}
