import { darken, lighten, transparentize } from 'polished'
import styled, { DefaultTheme } from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { Colors } from '../../theme'
import { ButtonProps } from './Button'

const MODIFIER_CONFIG: ModifiersConfig = {
  primary: ({ theme }: { theme: DefaultTheme } & ButtonProps) => `
  --comp-background-color: ${theme.palette.primary.main};
  --comp-border-color: ${theme.palette.primary.main};

  &:hover {
    --comp-background-color: ${
      theme.palette.primary.light || lighten(0.1, theme.palette.primary.main)
    };
    --comp-border-color: ${
      theme.palette.primary.light || lighten(0.1, theme.palette.primary.main)
    };
  }

  &:active,
  &:focus {
    --comp-background-color: ${
      theme.palette.primary.dark || darken(0.1, theme.palette.primary.main)
    };
    --comp-border-color: ${
      theme.palette.primary.dark || darken(0.1, theme.palette.primary.main)
    };
  }
`,
  secondary: ({ theme }: { theme: DefaultTheme } & ButtonProps) => `
    --comp-background-color: ${Colors.transparent};
    --comp-border-color: ${transparentize(0.5, theme.palette.textPrimary.main)};

    &:hover {
      --comp-background-color: ${transparentize(
        0.9,
        theme.palette.textPrimary.main
      )};
      --comp-border-color: ${theme.palette.textPrimary.main};
    }

    &:active,
    &:focus {
      --comp-background-color: ${transparentize(
        0.85,
        theme.palette.textPrimary.main
      )};
      --comp-border-color: ${theme.palette.textPrimary.main};
    }
`,
  stretched: () => `
    width: 100%;
    text-align: center;
    justify-content: center;
    aign-items: center;
  `,
  shadowed: () => `
		box-shadow: -32px 24px 56px rgba(0, 0, 0, 0.2);
	`,
  uppercased: () => `
		align-self: center;
		text-transform: uppercase;
	`,
  iconOnly: () => `
	  .text,
	  .child {
		  display: none
	  }
	  .icon {
		  padding: 0;
		  color: var(--comp-text-color);
    }
  `,
  fontEffects: () => `
		&:hover {
			box-shadow: 0 5px 5px rgba(17, 16, 62, 0.15);
			span,
			svg {
				letter-spacing: 5px;
				font-weight: 900;
				transition: color 280ms ease-out, font-weight 1000ms ease-out;
				transition: letter-spacing 1000ms ease-in-out;
				font-stretch: ultra-expanded;
			}
		}
		&:not(:hover) {
			span,
			svg {
				font-weight: 500;
				letter-spacing: initial;
				transition: color 280ms ease-out, font-weight 1000ms ease-out;
				transition: letter-spacing 1000ms ease-in-out;
				font-stretch: ultra-expanded;
			}
		}
	`, // this can be used only when horizontal space permits letter spacing
  top8: () => `
    margin-top: 8px;
`, // used in auth login form
  top24: () => `
    margin-top: 24px;
`, // used in auth register-options form
  v24: () => `
    margin-top: 24px;
    margin-bottom: 24px;
  ` // used in auth login form
}

export const StyledButton = styled(
  styled.button<ButtonProps>``
).attrs<ButtonProps>(({ customStyled }) => ({
  style: customStyled
}))`
  --comp-border-radius: 2px;
  --comp-text-color: ${({ theme }) => theme.palette.textPrimary.main};

  ${({ size, icon, text }) =>
    size === 'large'
      ? `
				--comp-font-size: 24px;
				--comp-line-height: 36px;
				--comp-padding: 20px ${icon && text ? '48px' : '20px'};
				`
      : size === 'normal'
      ? `
        --comp-font-size: 18px;
        --comp-line-height: 24px;
        --comp-padding: 12px ${icon && text ? '24px' : '12px'};
			`
      : size === 'small'
      ? `
				--comp-font-size: 14px;
				--comp-line-height: 22px;
				--comp-padding: 6px ${icon && text ? '12px' : '6px'};
			`
      : `
        --comp-font-size: 12px;
        --comp-line-height: 18px;
        --comp-padding: 4px ${icon && text ? '8px' : '4px'};
			`};

  cursor: pointer;
  outline: none;
  border: none;

  position: relative;
  display: flex;
  align-items: center;
  padding: var(--comp-padding);

  -webkit-font-smoothing: subpixel-antialiased;
  font-smooth: subpixel-antialiased;
  box-sizing: border-box;
  transition: all ease-in 0.1s;

  font-family: ${({ theme }) => theme.typography.heading.fontFamily};
  font-size: var(--comp-font-size);
  line-height: var(--comp-line-height);
  letter-spacing: 0.02em;
  font-weight: inherit;

  color: var(--comp-text-color);
  background: var(--comp-background-color);

  border: 1px solid var(--comp-border-color);
  border-radius: var(--comp-border-radius);

  &[disabled] {
    pointer-events: none;
    --comp-background-color: ${Colors.transparent};
    --comp-text-color: ${({ theme }) =>
      transparentize(0.5, theme.palette.textPrimary.main)};
    --comp-border-color: ${({ theme }) =>
      transparentize(0.85, theme.palette.textPrimary.main)};

    &:hover,
    &:active,
    &:focus {
      --comp-text-color: ${({ theme }) =>
        transparentize(0.5, theme.palette.textPrimary.main)};
      --comp-border-color: ${({ theme }) =>
        transparentize(0.85, theme.palette.textPrimary.main)};
    }
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: ${({ rightIcon }) => (rightIcon ? 'row-reverse' : 'row')};
    align-items: center;
  }
  .icon {
    padding-right: ${({ text, rightIcon }) =>
      text && !rightIcon ? '10px' : 0};
    padding-left: ${({ text, rightIcon }) => (text && rightIcon ? '10px' : 0)};
    width: 1.2em;
    height: 1.2em;
    min-width: 24px;
    min-height: 24px;
    color: var(--comp-text-color);
  }
  .child {
    display: flex;
    align-items: center;
    width: auto;
  }
  ${({ customModifiers }) =>
    applyStyleModifiers({ ...MODIFIER_CONFIG, ...customModifiers })};
`
