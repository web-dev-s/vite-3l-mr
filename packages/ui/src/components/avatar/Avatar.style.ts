import styled from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { Colors } from '../../theme'
import { AvatarProps } from './Avatar'

const MODIFIER_CONFIG: ModifiersConfig = {
  viewOnly: () => `
    .cam-button {
      display: none;
    }
	`
}

export const StyledAvatarContainer = styled.div<AvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .avatar-container {
    font-family: ${({ theme }) => theme.typography.paragraph.fontFamily};
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    overflow: hidden;
    margin-right: 10px;
    width: 72px;
    height: 72px;
    border: 0px;
    border-radius: 50%;
    perspective: 1px;
  }
  .image {
    display: block;
    aspect-ratio: 1 / 1;
    opacity: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &[app-variant-drag-active='true'] {
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        background-color: ${({ theme }) =>
          theme.palette.secondary.light ?? Colors.dustLight};
        width: 100%;
        height: 100%;
      }
    }
  }
  .camera-button {
    position: absolute;
    bottom: 0;
    right: 5px;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .cam-button {
    background-color: ${({ theme }) =>
      theme.palette.textPrimary.main ?? Colors.white};
    border-radius: 50%;
    align-items: center;
    z-index: 1;
    position: absolute;
    bottom: 0;
    right: 5px;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .cam-button-image {
    color: ${({ theme }) => theme.palette.primary.main ?? Colors.monorepo};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin: auto;
  }

  ${({ customModifiers }) =>
    applyStyleModifiers({ ...MODIFIER_CONFIG, ...customModifiers })};
`
