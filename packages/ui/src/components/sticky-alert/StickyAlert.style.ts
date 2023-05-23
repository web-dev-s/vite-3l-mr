import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { Colors } from '../../theme'
import { StickyAlertProps } from './StickyAlert'

export const StyledStickyAlert = styled(
  styled.div<StickyAlertProps>``
).attrs<StickyAlertProps>(({ customStyled }) => ({
  style: customStyled
}))`
  margin-right: 20px;
  max-width: 90vw;
  align-self: flex-end;
  background: ${({ theme, type }) =>
    type ? theme.palette?.[type].main : Colors.transparent};
  color: ${({ theme }) => theme.palette.textPrimary.main};
  border-radius: 4px;

  .button {
    outline: none;
    border: none;
    background: none;
    background-color: ${Colors.transparent};
    color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 90vw;
    padding: 16px;
    border-radius: 4px;

    font-style: normal;
    font-weight: 400;
    font-family: ${({ theme }) => theme.typography.paragraph.fontFamily};
    font-size: ${({ theme }) => theme.typography.p2.fontSize}px;
    line-height: ${({ theme }) => theme.typography.p2.lineHeight}px;
  }

  .left-icon-container {
    height: 22px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-icon {
    align-self: center;
    color: inherit;
    height: 20px;
    width: 20px;
    padding-right: 20.25px;
  }
  .content {
    max-width: 90vw;
    overflow-wrap: break-word;
    width: calc(100% - 30px);
    height: auto;
    text-align: left;
  }
  animation: run 1s linear normal;
  transition: all 750ms ease;

  @keyframes run {
    0% {
      margin-right: -200px;
    }
    100% {
      margin-right: 20px;
    }
  }

  ${({ customModifiers }) => applyStyleModifiers({ ...customModifiers })};
`
