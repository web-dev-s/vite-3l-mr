import styled from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { RegisterOptionsProps } from './RegisterOptions'

const MODIFIER_CONFIG: ModifiersConfig = {}

export const StyledRegisterOptions = styled.div<RegisterOptionsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${applyStyleModifiers(MODIFIER_CONFIG)};
`
