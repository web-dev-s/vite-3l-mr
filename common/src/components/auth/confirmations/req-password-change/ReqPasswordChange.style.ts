import styled from 'styled-components'
import {
  applyStyleModifiers,
  ModifiersConfig
} from 'styled-components-modifiers'
import { ReqPasswordChangeProps } from './ReqPasswordChange'

const MODIFIER_CONFIG: ModifiersConfig = {}

type StyledProps = Omit<
  ReqPasswordChangeProps,
  | 'email'
  | 'password'
  | 'onCancelCallback'
  | 'onRedirectAtLogin'
  | 'onSuccessCallback'
>
export const StyledReqPasswordChange = styled.div<StyledProps>`
  display: flex;

  .envelope {
    width: 40px;
    height: 40px;
    align-self: center;
    color: ${({ theme }) => theme.palette.white.main};
    z-index: 1;
    margin: 0;
    padding: 0;
  }
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`
