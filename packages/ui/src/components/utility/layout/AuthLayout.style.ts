import styled from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { Colors } from '../../../theme'
import { AuthLayoutProps } from './AuthLayout'

const MODIFIER_CONFIG: ModifiersConfig = {
  row: () => `
 	 flex-direction: row;
  `
}

export const StyledLayout = styled(
  styled.div<AuthLayoutProps>``
).attrs<AuthLayoutProps>(({ customStyled }) => ({
  style: { ...customStyled }
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 10px;

  background-image: url(${(props) => props.backgroundImage});
  background-color: ${Colors.transparent};
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .ly-header {
    margin-top: 41px;
    padding: 28px;
  }

  .ly-wordmark {
    width: 187px;
    height: 32px;
    align-self: center;
    color: ${({ theme }) => theme.palette.highlighted.main ?? Colors.white};
    fill: ${({ theme }) => theme.palette.highlighted.main ?? Colors.white};
  }

  .ly-main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .ly-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .ly-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 28px;
  }

  ${({ customModifiers }) =>
    applyStyleModifiers({
      ...MODIFIER_CONFIG,
      ...customModifiers
    } as ModifiersConfig)};
`
