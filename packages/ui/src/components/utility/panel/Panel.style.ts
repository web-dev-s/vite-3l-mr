import { darken, lighten, transparentize } from 'polished'
import styled from 'styled-components'
import { PanelProps } from './Panel'

type StyledPanelProps = PanelProps & {
  expanded: boolean
}

export const StyledPanel = styled.div<StyledPanelProps>`
  position: absolute;
  width: 98vw;
  max-width: 360px;
  min-height: 360px;
  background-color: ${({ theme }) => theme.palette.black.dark};
  color: ${({ theme }) => theme.palette.textPrimary.main};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  transition: all 0.2s ease-out;
  overflow: hidden;

  ${({ expanded }) =>
    expanded
      ? `
        width: 100%;
        height: calc(100% - 96px);
        max-width: 1128px;
      `
      : ''}

  ${({ sidebar, expanded, theme }) =>
    !!sidebar && expanded
      ? `
        flex-direction: row;
        padding: 16px;

        .panel-sidebar {
          width: 21.9858%;
          flex: 0 0 21.9858%;
          margin-right: 24px;
          background-color: ${transparentize(0.9, theme.palette.white.main)};
          border-radius: 4px;
          padding: 16px 8px;
          display: flex;
          flex-direction: column;
        }
      `
      : ''}

  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.palette.background.main};
    width: 8px;
  }
  &::-webkit-scrollbar-corner {
    background-color: ${({ theme }) =>
      darken(0.3, theme.palette.unfocused.main)};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      darken(0.1, theme.palette.unfocused.main)};
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #0f0f0f;
    background-color: ${({ theme }) =>
      lighten(0.1, theme.palette.background.main)};
  }

  .hud-container {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .panel-head {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ sidebar, expanded }) =>
      !!sidebar && expanded ? '0' : '12px 18.38px'};
    min-height: 24px;
    cursor: ${({ expanded }) => (expanded ? 'default' : 'move')};
    position: relative;
    overflow: hidden;

    .panel-title {
      flex: 1;
      font-family: ${({ theme }) => theme.typography.heading.fontFamily};
      font-size: ${({ sidebar, expanded }) =>
        !!sidebar && expanded ? '32px' : '20px'};
      font-weight: ${({ sidebar, expanded }) =>
        !!sidebar && expanded ? '500' : '600'};
      line-height: ${({ sidebar, expanded }) =>
        !!sidebar && expanded ? '40px' : '24px'};
      text-align: ${({ sidebar, expanded }) =>
        !!sidebar && expanded ? 'left' : 'center'};
      text-transform: capitalize;
    }

    .panel-head-controls {
      position: ${({ sidebar, expanded }) =>
        !!sidebar && expanded ? 'unset' : 'absolute'};
      display: flex;
      align-items: center;
      z-index: 1;

      &-right {
        right: 20.25px;

        button {
          margin-left: 16px;
        }
      }

      &-left {
        left: 18.35px;

        button {
          margin-right: 16px;
        }
      }

      button {
        padding: 0;
      }
    }
  }

  .panel-body {
    flex: 1;
    display: flex;
  }
`
