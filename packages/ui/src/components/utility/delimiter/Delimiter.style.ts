import { darken } from 'polished'
import styled, { DefaultTheme } from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { DelimiterProps } from './Delimiter'

const MODIFIER_CONFIG: ModifiersConfig = {
  large: ({ theme }: { theme: DefaultTheme }) => `
    --comp-text-font-size: ${theme.typography.h1.fontSize}px;
    --comp-text-line-height: ${theme.typography.h1.lineHeight}px;
    --comp-text-striketrough-size: 8px;
  `,
  medium: ({ theme }: { theme: DefaultTheme }) => `
    --comp-text-font-size: ${theme.typography.h5.fontSize}px;
    --comp-text-line-height: ${theme.typography.h5.lineHeight}px;
    --comp-text-striketrough-size: 3px;
  `,
  small: ({ theme }: { theme: DefaultTheme }) => `
    --comp-text-font-size: ${theme.typography.p2.fontSize}px;
    --comp-text-line-height: ${theme.typography.p2.lineHeight}px;
    --comp-text-striketrough-size: 1px;
  `,
  v40: () => `
    padding-top: clamp(40px, 0.9em, 1.2em);
    padding-bottom: clamp(40px, 0.9em, 1.2em);
  `,
  v20: () => `
    padding-top: clamp(20px, 0.9em, 1.2em);
    padding-bottom: clamp(20px, 0.9em, 1.2em);
  `,
  bottom8: () => `margin-bottom: 8px`,
  bottom24: () => `margin-bottom: 24px`,
  striketrouhOnly: ({ theme }: { theme: DefaultTheme }) => `
    --comp-striketrough-color: ${darken(0.8, theme.palette.background.main)};
    -webkit-font-smoothing: pixel-antialiased;
    margin: 30px 0 15px 0;
    .text {
      display: none;
    }
  `
}

export const StyledDelimiter = styled(
  styled.div<DelimiterProps>``
).attrs<DelimiterProps>(({ customStyled }) => ({
  style: { ...customStyled }
}))`
  --comp-text-color: ${({ theme }) => theme.palette.textPrimary.main};
  --comp-striketrough-color: ${({ theme }) => theme.palette.unfocused.main};
  --comp-text-font-size: ${({ theme }) => theme.typography.h5.fontSize}px;
  --comp-text-line-height: ${({ theme }) => theme.typography.h5.lineHeight}px;
  --comp-text-striketrough-size: 3px;
  --comp-text-font-family: ${({ theme }) =>
    theme.typography.paragraph.fontFamily};

  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;

  .text {
    object-fit: contain;
    padding: 0 16px;
    font-family: var(--comp-text-font-family);
    font-style: normal;
    font-weight: 400;
    font-size: var(--comp-text-font-size);
    line-height: var(--comp-text-line-height);
    color: var(--comp-text-color);
  }
  .striketrough {
    flex: 1;
    width: 100%;
    height: 100%;
    position: relative;
    &:after {
      background-color: var(--comp-striketrough-color);
      height: var(--comp-text-striketrough-size);
      content: '';
      display: block;
      position: absolute;
      inset: 50% 0px 0px;
      width: 100%;
    }
  }
  ${({ customModifiers }) =>
    applyStyleModifiers({
      ...MODIFIER_CONFIG,
      ...customModifiers
    } as ModifiersConfig)};
`
