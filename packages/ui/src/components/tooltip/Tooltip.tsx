import { FC, PropsWithChildren } from 'react'
import { usePopperTooltip } from 'react-popper-tooltip'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { StyledTooltip } from './Tooltip.style'
import 'react-popper-tooltip/dist/styles.css'

export type TooltipProps = {
  text?: string
  placement?: 'top' | 'bottom'
  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
  modifiers?: string[] | string
}

/**
 * Props Description @function Tooltip @typedef props:TooltipProps
 * @param text - tooltip text **{ string }**
 * @param placement - tooltip placement, defaults to bottom **{ 'top' | 'bottom' }**
 * @param customStyled -  client side style prop {@linkcode CSSObject }
 * @param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
 * @param modifiers - accessing style preset defined in MODIFIERS_CONFIG **{ string[] | string }**
 * @returns {JSX} JSX
 */
export const Tooltip: FC<PropsWithChildren<TooltipProps>> = (props) => {
  const { children, text, placement } = props
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({ placement })

  return text ? (
    <StyledTooltip {...props}>
      <div ref={setTriggerRef}>{children}</div>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: 'tooltip-container' })}
        >
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
          {text}
        </div>
      )}
    </StyledTooltip>
  ) : (
    <>{children}</>
  )
}

Tooltip.defaultProps = {
  placement: 'bottom'
}
