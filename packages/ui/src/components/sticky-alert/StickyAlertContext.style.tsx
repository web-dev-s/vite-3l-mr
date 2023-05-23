import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { StickyAlertProviderProps } from './StickyAlertContext'

export const StyledStickyAlertContainer = styled(
  styled.div<StickyAlertProviderProps>``
).attrs<StickyAlertProviderProps>(({ customStyled }) => ({
  style: customStyled
}))`
  position: absolute;
  top: 10px;
  right: 0;

  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100vh;

  .alert-wrapper {
    position: relative;
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    width: auto;
  }

  ${({ customModifiers }) => applyStyleModifiers({ ...customModifiers })};
`
