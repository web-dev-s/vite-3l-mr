import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { StyledLabel } from './Label.style'

export type LabelProps = {
  label?: string
  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
  modifiers?: string[] | string
}

/**
 * Props Description @function Label @typedef props:LabelProps
 * @param label - text string to render **{  string }**
 * @param customStyled -  client side style prop {@linkcode CSSObject }
 * @param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
 * @param modifiers - accessing style preset defined in MODIFIERS_CONFIG **{ string[] | string }**
 * @returns {JSX} JSX
 */
export const Label = (props: LabelProps) => {
  const { label } = props

  return label ? <StyledLabel {...props}>{label}</StyledLabel> : null
}

Label.defaultProps = {
  label: ''
}
