import { omit } from 'lodash'
import { FC, PropsWithChildren, SVGProps } from 'react'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { Check, Close, Information } from '../../icons'
import { StyledStickyAlert } from './StickyAlert.style'

export type StickyAlertProps = {
  id: string
  timeout?: number
  isVisible: boolean
  type: 'warning' | 'success' | 'error'
  ornament?: FC<React.SVGProps<SVGSVGElement>>
  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
  onClose?: () => void
}

/**
 * Props Description @function StickyAlert @typedef props:StickyAlertProps
 * @param id - id for being able to remove the alert **{string}**
 * @param timeout - seconds counter for dismiss alert **{number}**
 * @param children - alert body passed as childen for being able to add more ornaments or styling **{@linkcode JSX.Element}**
 * @param isVisible - state of alert render **{boolean}**
 * @param type - preset for alert style **{'warning' | 'success' | 'error'}**
 * @param ornament - replacement for the icon on the left **{@linkcode FC<React.SVGProps<SVGSVGElement>>}**
 * @param customStyled - client side style prop **{@linkcode CSSObject}**
 * @param customModifiers - client modifiers config **{@linkcode ModifiersConfig}**
 * @param onClose - callback to close the alert **{@linkcode () => void}**
 * @returns {JSX} JSX
 */
export const StickyAlert: FC<PropsWithChildren<StickyAlertProps>> = (props) => {
  const { children, type, ornament: Icon, isVisible, onClose } = props

  const DefaultIcon = {
    warning: Information,
    success: Check,
    error: Close
  }
  const LeftIcon: FC<SVGProps<SVGSVGElement>> | null =
    Icon || DefaultIcon[type] || null

  return isVisible ? (
    <StyledStickyAlert {...omit(props, ['onClose', 'children'])}>
      <button className="button" type="button" onClick={onClose}>
        {LeftIcon && (
          <span className="left-icon-container">
            <LeftIcon className="left-icon" />
          </span>
        )}
        <span className="content">{children}</span>
      </button>
    </StyledStickyAlert>
  ) : null
}

StickyAlert.defaultProps = {
  type: 'warning',
  isVisible: true
}
