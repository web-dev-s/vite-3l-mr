import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { TooltipProps } from './Tooltip'

export const StyledTooltip = styled(
  styled.div<TooltipProps>``
).attrs<TooltipProps>(({ customStyled }) => ({
  style: customStyled
}))`
  .tooltip-container {
    --tooltipBorder: ${({ theme }) => theme.palette.background.main};
    --tooltipBackground: ${({ theme }) => theme.palette.background.main};
    --tooltipColor: ${({ theme }) => theme.palette.textPrimary.main};

    font-family: ${({ theme }) => theme.typography.paragraph.fontFamily};
    font-size: ${({ theme }) => theme.typography.p3.fontSize}px;
    line-height: ${({ theme }) => theme.typography.p3.lineHeight}px;

    padding: 4px 8px;
    border-radius: 4px;
  }
  ${({ customModifiers }) => applyStyleModifiers({ ...customModifiers })};
`
