import styled from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { SpinnerProps } from './Spinner'

const MODIFIER_CONFIG: ModifiersConfig = {
  spacedLeft10: () => `
    padding-left:10px;
  `,
  spacedRight10: () => `
    padding-right:10px;
  `
}

export const StyledSpinnerWrapper = styled(
  styled.div<SpinnerProps>``
).attrs<SpinnerProps>(({ customStyled }) => ({
  style: { ...customStyled }
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ customModifiers }) =>
    applyStyleModifiers({ ...MODIFIER_CONFIG, ...customModifiers })};
`
