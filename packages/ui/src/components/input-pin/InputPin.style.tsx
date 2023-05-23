import styled, { DefaultTheme } from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { Colors } from '../../theme'
import { InputPinProps } from './InputPin'

const MODIFIER_CONFIG: ModifiersConfig = {
  success: ({ theme }: { theme: DefaultTheme }) => `
    --comp-border-color: ${theme.palette.success.main ?? Colors.success};
  `,
  error: ({ theme }: { theme: DefaultTheme }) => `
    --comp-border-color: ${theme.palette.error.main ?? Colors.error};
  `,
  warning: ({ theme }: { theme: DefaultTheme }) => `
    --comp-border-color: ${theme.palette.warning.main ?? Colors.error};
  `,
  stretched: () => `
    width: calc(100% - 24px);
    justify-content: center;
    align-items: flex-start;

    .pin-component {
      width: 90%;
    }
  `,
  withValidationButtons: ({
    footerMessage,
    theme
  }: { theme: DefaultTheme } & InputPinProps) => `
    .validation-button {
      position: absolute;
      top: 25px;
      right: -12px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${
        footerMessage
          ? theme.palette.error.main ?? Colors.error
          : theme.palette.success.main ?? Colors.success
      };
    }
    .validation-button-svg {
      width: 24px;
      height: 24px;
    }
  `
}
export const StyledInputPin = styled(
  styled.div<InputPinProps>``
).attrs<InputPinProps>(({ customStyled }) => ({
  style: customStyled
}))`
  --comp-digit-border-color: initial;
  --comp-footer-flex-direction: row;
  --comp-footer-flex-justify: flex-start;

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
  ${({ footerIconOnRight }) =>
    footerIconOnRight
      ? `
          --comp-footer-flex-direction:row-reverse;
          --comp-footer-flex-justify:flex-end;
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
  align-items: stretch;
  color: var(--comp-text-color);

  .pin-component {
    position: relative;
    display: flex;
    align-self: flex-start;
    justify-content: space-between;
    align-items: center;
    width: auto;

    margin: 0;

    background: ${Colors.transparent};
    height: 56px;
    padding: 8px 20px;

    border: 1px solid var(--comp-border-color);
    border-radius: 2px;
  }
  .phone-icon {
    padding-left: 6px;
    align-self: center;
    width: ${({ theme }) => theme.typography.h4.fontSize}px;
    height: ${({ theme }) => theme.typography.h4.fontSize}px;
    color: var(--comp-border-color);
  }

  .prefix {
    font-family: ${({ theme }) => theme.typography.paragraph.fontFamily};
    font-size: ${({ theme }) => theme.typography.p1.fontSize}px;
    line-height: ${({ theme }) => theme.typography.p1.lineHeight}px;
    font-style: normal;
    font-weight: 400;
    color: ${Colors.white};
    align-self: center;
    white-space: nowrap;
  }

  .pin-container {
    background: ${Colors.transparent};
  }

  .input {
    border: none;
    border-bottom: 2px solid
      ${({ theme }) => theme.palette.textSecondary.main ?? Colors.whiteEthereal};
    border-radius: 0;
    font-family: ${({ theme }) => theme.typography.heading.fontFamily};
    font-style: normal;
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.h4.fontSize}px;
    line-height: ${({ theme }) => theme.typography.h4.lineHeight}px;
    color: inherit;
    text-align: center;
  }

  .input:invalid {
    outline: none;
    box-shadow: none;
    border: none;
    background-color: ${Colors.transparent};
    border-bottom: 2px solid ${Colors.whiteGhost};
  }

  .input:valid {
    outline: none;
    box-shadow: none;
    border: none;
    background-color: ${Colors.transparent};
    border-bottom: 2px solid ${Colors.whiteGhost};
  }

  .input:focus {
    background: ${Colors.transparent};
    background-color: ${Colors.transparent};
    outline: none;
    box-shadow: none;
    border: none;
    border-bottom: 2px solid
      ${({ theme }) => theme.palette.textPrimary.main ?? Colors.white};
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
  ${({ theme, required }) =>
    required === true
      ? `
          &:before {
            content: '*';
            color: ${theme.palette.error.main ?? Colors.error};
            font-weight: 900;
            font-family: inherit;
            font-size: 22px;
            position: absolute;
            top: 0;
            right: -20px;
          }
        `
      : ''}
  ${({ customModifiers }) =>
    applyStyleModifiers({ ...MODIFIER_CONFIG, ...customModifiers })};
`
