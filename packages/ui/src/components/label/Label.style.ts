import styled, { DefaultTheme } from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { Colors } from '../../theme'
import { LabelProps } from './Label'

const MODIFIER_CONFIG: ModifiersConfig = {
  h4: ({ theme, customStyled }: { theme: DefaultTheme } & LabelProps) => `
    font-family: ${theme.typography.heading.fontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: ${theme.typography.h4.fontSize}px;
    line-height: ${theme.typography.h4.lineHeight}px;
    text-align: center;
    color: ${theme.palette.textPrimary.main};
    max-width: ${customStyled?.maxWidth ?? 'initial'};
  `,
  mediumP: ({ theme, customStyled }: { theme: DefaultTheme } & LabelProps) => `
    font-family: ${theme.typography.paragraph.fontFamily};
    font-size: ${theme.typography.p2.fontSize}px;
    line-height: ${theme.typography.p2.lineHeight}px;
    font-style: normal;
    font-weight: 400;
    text-align: ${customStyled?.textAlign ?? 'center'};
    color: ${customStyled?.color ?? theme.palette.textPrimary.main};
    max-width: ${(customStyled?.maxWidth as `${number}px`) ?? 'initial'};
  `,
  noVerticalSpacing: () => `
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  `,
  formFieldHeader: ({
    theme,
    customStyled
  }: { theme: DefaultTheme } & LabelProps) => `
    min-height: 20px;
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.paragraph.fontFamily};
    font-size: ${theme.typography.p3.fontSize}px;
    line-height: ${theme.typography.p3.lineHeight}px;
    font-style: normal;
    font-weight: 400;
    text-align: ${customStyled?.textAlign ?? 'left'};
    color: ${customStyled?.color ?? theme.palette.textPrimary.main};
    text-decoration-color: ${
      customStyled?.color ?? theme.palette.textPrimary.main
    };
  `,

  success: ({ theme }: { theme: DefaultTheme }) => `
    color: ${theme.palette.success.main};
    text-decoration-color: ${theme.palette.success.main};
  `,

  warning: ({ theme }: { theme: DefaultTheme }) => `
    color: ${theme.palette.warning.main};
    text-decoration-color: ${theme.palette.warning.main};
  `,

  error: ({ theme }: { theme: DefaultTheme }) => `
    color: ${theme.palette.error.main};
    text-decoration-color: ${theme.palette.error.main};
`,
  uppercased: () => `
    text-transform: uppercase;
  `,
  underlinedEffect: ({ theme }: { theme: DefaultTheme }) => `
    letter-spacing: 1px;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
    padding-bottom: 5px;
    color: ${theme.palette.textPrimary.main};
    text-decoration-color: ${theme.palette.textPrimary.main};
    transition: all 250ms ease;
    position: relative;
    &:hover {
      letter-spacing: 2px;
      font-weight: 600;
      text-decoration-line: underline;
			text-underline-offset: 3px;
			text-decoration-thickness: 3px;
      text-decoration-color: ${theme.palette.textPrimary.main};
      color: ${theme.palette.textPrimary.main};
      transition: all 750ms ease;
    }
  `,
  underlined: ({ theme }: { theme: DefaultTheme }) => `
    text-decoration-line: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
    text-decoration-color: ${theme.palette.textPrimary.main};
    color: ${theme.palette.textPrimary.main};
  `
}

export const StyledLabel = styled(styled.label<LabelProps>``).attrs<LabelProps>(
  ({ customStyled }) => ({
    style: customStyled
  })
)`
  width: 100%;
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.palette.textPrimary.main};

  ${({ customModifiers }) =>
    applyStyleModifiers({ ...MODIFIER_CONFIG, ...customModifiers })};
`
