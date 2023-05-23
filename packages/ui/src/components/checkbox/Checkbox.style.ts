import { transparentize } from 'polished'
import styled from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { Colors } from '../../theme'
import { CheckboxProps } from './Checkbox'

const MODIFIER_CONFIG: ModifiersConfig = {
  selfStartCheckbox: () => `
    .checkmark-container {
       align-self: flex-start;
    }
  `,
  selfStart: () => `align-self: flex-start;` // used in auth for to align self at start row
}

export const StyledCheckboxContainer = styled(
  styled.div<CheckboxProps>``
).attrs<CheckboxProps>(({ customStyled }) => ({
  style: customStyled
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  .host {
    --comp-checkbox-border-color: ${({ theme }) =>
      theme.palette.highlighted.main};
    --comp-checkbox-background-color: ${({ theme }) =>
      transparentize(0.5, theme.palette.highlighted.main)};
    --comp-checkbox-text-color: ${({ theme }) =>
      theme.palette.textPrimary.main};
    --comp-checkbox-disabled-border-color: ${({ theme }) =>
      transparentize(0.5, theme.palette.highlighted.main)};
    --comp-checkbox-disabled-background-color: ${({ theme }) =>
      transparentize(0.5, theme.palette.highlighted.main)};
    --comp-checkbox-disabled-text-color: ${({ theme }) =>
      theme.palette.textSecondary.main};

    --comp-checkbox-checked-background-color: ${({ theme }) =>
      theme.palette.primary.main};
    --comp-checkbox-unchecked-stroke: ${Colors.transparent};
    --comp-checkbox-checked-stroke: ${({ theme }) =>
      theme.palette.highlighted.main};
    --comp-checkbox-hover-boxshadow-color: ${({ theme }) =>
      transparentize(0.5, theme.palette.highlighted.main)};

    --comp-checkbox-border-radius: ${({ shape }) =>
      shape === 'circle' ? '50%' : '2px'};
    --comp-checkbox-width: ${({ theme }) => theme.typography.h5.fontSize}px;

    display: grid;
    grid-template-columns: min-content auto;
    column-gap: 10px;
    width: auto;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;

    &:hover {
      --comp-checkbox-border-color: ${({ theme }) =>
        theme.palette.highlighted.main};
      --comp-checkbox-background-color: ${({ theme }) =>
        transparentize(0.5, theme.palette.highlighted.main)};
      --comp-checkbox-unchecked-stroke: ${Colors.transparent};
      --comp-checkbox-checked-stroke: ${({ theme }) =>
        theme.palette.highlighted.main};
      transition: all 250ms ease-in-out;
    }
  }

  .checkmark-container {
    display: flex;
    align-items: center;
    width: var(--comp-checkbox-width);
    aspect-ratio: 1/1;
    align-self: center;
    justify-content: center;
    align-items: center;
  }
  .input {
    opacity: 0;
    position: absolute;
    width: 0px;
    height: 0px;
  }
  .checkbox-control {
    display: flex;
    justify-content: center;
    width: var(--comp-checkbox-width);
    aspect-ratio: 1/1;
    cursor: pointer;
  }
  .input + .checkbox-control {
    border: 1px solid var(--comp-checkbox-border-color);
    border-radius: var(--comp-checkbox-border-radius);
    background: var(--comp-checkbox-background-color);
  }

  .host[app-checkbox-error='error'] .checkbox-control {
    border: 1px solid var(--comp-checkbox-border-color);
    border-radius: var(--comp-checkbox-border-radius);
  }
  .input:checked + .checkbox-control {
    border: 1px solid var(--comp-checkbox-checked-background-color);
    border-radius: var(--comp-checkbox-border-radius);
    background: var(--comp-checkbox-checked-background-color);
  }
  .input[disabled] + .checkbox-control {
    cursor: default;
    border: 1px solid var(--comp-checkbox-disabled-border-color);
    border-radius: var(--comp-checkbox-border-radius);
    background: var(--comp-checkbox-disabled-background-color);
  }
  .input[disabled]:checked + .checkbox-control {
    cursor: default;
    border: 1px solid var(--comp-checkbox-disabled-border-color);
    border-radius: var(--comp-checkbox-border-radius);
    background: var(--comp-checkbox-disabled-background-color);
  }
  .host:focus-within .checkbox-control {
    box-shadow: 0px 0px 5px var(--comp-checkbox-hover-boxshadow-color);
    outline: none;
  }

  .checkbox-control-icon {
    width: calc(var(--comp-checkbox-width) - 4px);
    height: calc(var(--comp-checkbox-width) - 4px);
    margin: 0;
    padding: 0;
    align-self: center;
    color: var(--comp-checkbox-unchecked-stroke);
  }
  .input:checked + span .checkbox-control-icon {
    display: block;
    stroke-width: 3px;
    color: var(--comp-checkbox-checked-stroke);
  }
  .input[disabled]:checked + span .checkbox-control-icon {
    display: block;
    stroke-width: 2px;
    color: var(--comp-checkbox-disabled-text-color);
  }

  .checkbox-label {
    place-self: start;
    cursor: pointer;
    font-family: ${({ theme }) => theme.typography.paragraph.fontFamily};
    font-size: ${({ theme }) => theme.typography.p3.fontSize}px;
    line-height: ${({ theme }) => theme.typography.p3.lineHeight}px;
    padding-top: 2px;
    color: var(--comp-checkbox-text-color);
  }
  .checkbox-disabled .checkbox-label {
    cursor: default;
    color: var(--comp-checkbox-disabled-text-color);
  }
  ${({ mandatory, theme }) =>
    mandatory === true
      ? `
			  &:before {
          content: '*';
          color: ${theme.palette.error.main};
          font-weight: 900;
          font-family: 'Inter';
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
