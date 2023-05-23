import styled, { DefaultTheme } from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { Colors } from '../../theme'
import { InputPasswordProps } from './InputPassword'

const MODIFIER_CONFIG: ModifiersConfig = {
  success: ({ theme }: { theme: DefaultTheme }) => `
    --comp-border-color: ${theme.palette.success.main};
    --comp-footer-color: ${theme.palette.success.main};
    --comp-message-color: ${theme.palette.success.main};
  `,
  error: ({ theme }: { theme: DefaultTheme }) => `
    --comp-border-color: ${theme.palette.error.main};
    --comp-footer-color: ${theme.palette.error.main};
    --comp-message-color: ${theme.palette.error.main};

  `,
  warning: ({ theme }: { theme: DefaultTheme }) => `
    --comp-border-color: ${theme.palette.warning.main};
    --comp-footer-color: ${theme.palette.warning.main};
    --comp-message-color: ${theme.palette.warning.main};

  `,
  stretched: ({ theme }: { theme: DefaultTheme }) => `
    width: 100%;
    line-height: ${theme.typography.p1.lineHeight}px;
    text-align: center;
    justify-content: center;
    align-items: stretch;
  `,
  top16: ({ headerLabel }) => `
    padding-top: 16px;
    --comp-required-top-offset: ${headerLabel ? '36px' : '16px'};
  `
}

export const StyledInputPasswordWrapper = styled(
  styled.div<InputPasswordProps>``
).attrs<InputPasswordProps>(({ customStyled }) => ({
  style: customStyled
}))`
  --comp-header-flex-direction: row;
  --comp-footer-flex-direction: row;
  --comp-footer-flex-justify: flex-start;
  --comp-required-top-offset: ${({ headerLabel }) =>
    headerLabel ? '1em' : '0'};
  --comp-border-color: ${({ theme }) => theme.palette.unfocused.main};
  --comp-text-color: ${({ theme }) => theme.palette.textPrimary.main};
  --comp-footer-color: ${({ theme }) => theme.palette.textPrimary.main};
  --comp-message-color: inherit;
  --comp-placeholder-color: ${({ theme }) => theme.palette.unfocused.main};
  --comp-footer-icon-padding: 0 5px 0 0;

  &:focus,
  &:focus-within {
    --comp-border-color: ${({ theme }) => theme.palette.highlighted.main};
    --comp-text-color: ${({ theme }) => theme.palette.textPrimary.main};
    --comp-placeholder-color: ${({ theme }) => theme.palette.unfocused.main};
  }
  ${({ headerIconOnRight }) =>
    headerIconOnRight ? '--comp-header-flex-direction: row-reverse;' : ''}
  ${({ footerIconOnRight }) =>
    footerIconOnRight
      ? `
        --comp-footer-flex-direction: row-reverse;
        --comp-footer-flex-justify: flex-end;
        --comp-footer-icon-padding: 0 0 0 5px;
      `
      : ''}
  ${({ theme, footerMessage, footerMessageType }) =>
    footerMessage && footerMessageType === 'error'
      ? `
        --comp-border-color: ${theme.palette.error.main};
        --comp-footer-color: ${theme.palette.error.main};
        --comp-message-color: ${theme.palette.error.main};
      `
      : ''}
  ${({ theme, footerMessage, footerMessageType }) =>
    footerMessage && footerMessageType === 'warning'
      ? `
        --comp-border-color: ${theme.palette.warning.main};
        --comp-footer-color: ${theme.palette.warning.main};
        --comp-message-color: ${theme.palette.warning.main};
      `
      : ''}

  position: relative;
  width: auto;
  height: 100%;
  margin: 0;
  padding: 0;
  background: ${Colors.transparent};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  color: var(--comp-text-color);

  .input-container {
    display: flex;
    border: 1px solid var(--comp-border-color);
    border-radius: 2px;
    position: relative;
  }

  input {
    width: calc(100% - 2px);

    min-height: 24px;
    padding: 0;
    margin: 8px 16px;

    outline: none;
    border: none;
    background-color: ${Colors.transparent};

    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: inherit;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: var(--comp-placeholder-color);
    }
    :-ms-input-placeholder {
      color: var(--comp-placeholder-color);
    }
  }

  .header {
    display: flex;
    flex-direction: var(--comp-header-flex-direction);
    justify-content: space-between;
    align-items: center;

    label {
      color: var(--comp-footer-color);
      width: auto;
    }
  }

  .header-icon {
    width: 1em;
    aspect-ratio: 1/1;
    color: inherit;
  }

  .showhide-button {
    background: none;
    outline: none;
    border: none;
    border-width: 0px; //for cases when is previous set border-bottom...
    margin-right: 16px;
    color: var(--comp-text-color);
  }

  .showhide-button-svg {
    width: 1.2em;
    height: 1.2em;
    color: inherit;

    &[svg-hide='true'] {
      color: var(--comp-placeholder-color);
    }
  }

  .footer {
    padding-top: 5px;
    display: flex;
    flex-direction: var(--comp-footer-flex-direction);
    justify-content: var(--comp-footer-flex-justify);
    align-items: center;
    label {
      color: var(--comp-message-color);
      width: auto;
    }
  }

  .footer-icon {
    align-self: center;
    width: 1.1em;
    aspect-ratio: 1/1;
    color: var(--comp-message-color);

    padding: var(--comp-footer-icon-padding);
  }

  ${({ required, theme }) =>
    required === true
      ? `
          &:before {
            content: '*';
            color: ${theme.palette.error.main};
            font-weight: 900;
            font-family: inherit;
            font-size: 22px;
            position: absolute;
            top: var(--comp-required-top-offset);
            right: -20px;
          }
        `
      : ''}

  ${({ customModifiers }) =>
    applyStyleModifiers({ ...MODIFIER_CONFIG, ...customModifiers })};
`
