import { darken, lighten } from 'polished'
import styled, { DefaultTheme } from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { holo } from '../../../icons/misc'
import { ContainerProps } from './Container'

const MODIFIER_CONFIG: ModifiersConfig = {
  authPageForm: ({ theme }: { theme: DefaultTheme }) => `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 40px 96px;
    max-width: 552px;
    max-height: calc( 476px + 40px);  //hertical for max 3 btns under delimiter
    box-shadow: -32px 24px 56px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    background: ${theme.palette.background.main};
	  color: ${theme.palette.textPrimary.main};

	  white-space: pre-wrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    text-overflow: ellipsis;
  `,
  holoContainer: ({ theme }: { theme: DefaultTheme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    position: relative;
    width: 120px;
    height: 120px;
    color: ${theme.palette.highlighted.main};
    background-image: url(${holo});
    background-repeat: no-repeat;
    background-size: cover;
  `, // used in Cognito registration confirmation form
  row: () => `
		display: flex;
    flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
		margin: 0;
  `,
  column: () => `
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
  `,
  centeredContent: () => `
		justify-content: center;
		align-items: center;
		text-align: center;
 `,
  spacedEvenly: () => `
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 100%;
		text-align: center;
  `,
  inlineGap8: () => `
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 8px;
  `, // used in auth register with email form
  maxH45vh: () => `
		flex-direction: column;
		align-items: stretch;

		max-height: 45vh;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 0 20px 0 0;
		margin-bottom: 24px;
		width: clamp(100px, calc(100% - 20px), 800px);
  `, //used in auth register with email form
  v20: () => `
 	  padding: 20px 0;
  `, // used in Registration confirmations and CheckPinForm
  h20: () => `
    padding: 0 20px;
  `, // used in storybook for padding inputs, necessary for required symbol
  hmax380: () => `max-width: 380px;`, // used in  CheckPinForm
  fullWidth: () => `
    width: 100%;
    flex: 1;
  `, // used in auth RegisterWithEmailForm, RegEmailVerify, RegisterOptions and CheckPinForm
  fullHeight: () => `
    height: 100vh;
    flex: 1;
`
}

export const StyledContainer = styled(
  styled.div<ContainerProps>``
).attrs<ContainerProps>(({ customStyled }) => ({
  style: { ...customStyled }
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

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

  ${({ customModifiers }) =>
    applyStyleModifiers({
      ...MODIFIER_CONFIG,
      ...customModifiers
    } as ModifiersConfig)};
`
