import styled from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { Colors } from '../../theme'
import { LinkButtonProps } from './LinkButton'

const LINK_MODIFIER_CONFIG: ModifiersConfig = {
  reversed: () => `
 	  flex-direction: row-reverse;
  `,
  centered: () => `
  	justify-content: center;
    align-items: center;
    align-self: center;
	  text-align: center;
  `
}

export const StyledLink = styled(
  styled.a<LinkButtonProps>``
).attrs<LinkButtonProps>(({ customStyled }) => ({
  style: customStyled
}))`
  --comp-font-family: ${({ theme }) => theme.typography.paragraph.fontFamily};
  --comp-text-color: ${({ theme }) =>
    theme.palette.textPrimary.main ?? Colors.white};
  --comp-hover-background: ${({ theme }) =>
    theme.palette.textPrimary.main ?? Colors.white};

  ${({ size }) =>
    size === 'large'
      ? `
        --comp-font-size: 24px;
        --comp-line-height: 36px;
      `
      : size === 'normal'
      ? `
        --comp-font-size: 18px;
        --comp-line-height: 24px;
      `
      : size === 'small'
      ? `
        --comp-font-size: 14px;
        --comp-line-height: 22px;
      `
      : `
        --comp-font-size: 12px;
        --comp-line-height: 18px;
      `};

  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  gap: 10px;
  margin: 5px;
  transition: all 250ms ease;
  white-space: pre;

  &[disabled] {
    cursor: initial;
    pointer-events: none;
    --comp-text-color: ${({ theme }) =>
      theme.palette.textSecondary.main ?? Colors.white};
  }

  .text {
    align-self: flex-start;
    text-align: left;

    font-family: var(--comp-font-family);
    font-size: var(--comp-font-size);
    line-height: var(--comp-line-height);

    text-decoration-line: underline;
    text-underline-offset: 3px;
    color: var(--comp-text-color);

    -webkit-font-smoothing: subpixel-antialiased;
    font-smooth: subpixel-antialiased;

    position: relative;
    &:hover {
      text-decoration: none;
      font-weight: 600;
      text-decoration-line: none;
      transition: all 250ms ease;
    }
    &:hover:before {
      position: absolute;
      content: '';
      bottom: 0px;
      left: 0;
      right: 0;
      height: 3px;
      width: 100%;
      background: var(--comp-hover-background);
    }
  }
  .child {
    align-self: center;
    display: flex;
    align-items: center;
    width: auto;
    color: var(--comp-text-color);
  }
  svg {
    width: 1.2em;
    height: 1.2em;
    color: var(--comp-text-color);
  }
  ${({ customModifiers }) =>
    applyStyleModifiers(
      { ...LINK_MODIFIER_CONFIG, ...customModifiers?.link },
      'linkModifiers'
    )};
`

const LINK_CONTAINER_MODIFIER_CONFIG: ModifiersConfig = {
  reversed: () => `
	   flex-direction: row-reverse;
	`,
  centered: () => `
		justify-content: center;
		align-items: center;
		align-self: center;
		text-align: center;
  	`,
  stretched: () => `
 	  width: 100%;
	  justify-content: center;
	  align-items: center;
	  align-self: center;
	  text-align: center;
	`
}

export const StyledLinkContainer = styled(
  styled.div<LinkButtonProps>``
).attrs<LinkButtonProps>(({ customStyled }) => ({
  style: customStyled
}))`
  ${({ size }: LinkButtonProps) =>
    size === 'large'
      ? `
        --comp-font-size: 24px;
        --comp-line-height: 36px;
      `
      : size === 'normal'
      ? `
        --comp-font-size: 18px;
        --comp-line-height: 24px;
      `
      : size === 'small'
      ? `
        --comp-font-size: 14px;
        --comp-line-height: 22px;
      `
      : `
        --comp-font-size: 12px;
        --comp-line-height: 18px;
      `};

  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: pre;

  .prefixed-text {
    -webkit-font-smoothing: antialiased;
    font-smooth: antialiased;

    font-family: ${({ theme }) => theme.typography.paragraph.fontFamily};
    font-size: var(--comp-font-size);
    line-height: var(--comp-line-height);
    color: ${({ theme }) =>
      theme.palette.textSecondary.main ?? Colors.whiteEthereal};
  }
  ${({ customModifiers }) =>
    applyStyleModifiers(
      { ...LINK_CONTAINER_MODIFIER_CONFIG, ...customModifiers?.container },
      'linkContainerModifiers'
    )};
`
