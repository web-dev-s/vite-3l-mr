import { FC, PropsWithChildren, useState } from 'react'
import { Close, Maximize, Minimize } from '../../../icons'
import { Button } from '../../button'
import { StyledPanel } from './Panel.style'

export type PanelProps = {
  disableExpand?: boolean
  extraLeftControls?: React.ReactNode
  extraRightControls?: React.ReactNode
  hideHead?: boolean
  isExpanded?: boolean
  sidebar?: React.ReactNode
  title?: string
  onDismiss: () => void
}

/**
 * Description @function Panel @typedef props:PanelProps
 * @param disableExpand - flag to hide expand toggler
 * @param extraLeftControls - extra controllers on the panel head left section {@linkcode React.ReactNode}
 * @param extraRightControls - extra controllers on the panel head right section {@linkcode React.ReactNode}
 * @param hideHead - flag to hide the panel header
 * @param isExpanded - flag to parent control the panel expanded state
 * @param title - title for the panel
 * @param toggleExpand - on click on expand button callback
 * @param onDismiss - on click on dismiss button callback
 * @returns {JSX} JSX
 */
export const Panel: FC<PropsWithChildren<PanelProps>> = (props) => {
  const {
    title,
    children,
    disableExpand,
    isExpanded,
    sidebar,
    hideHead,
    extraLeftControls,
    extraRightControls,
    onDismiss
  } = props

  const [expanded, setExpanded] = useState<boolean>(isExpanded || false)

  const toggleExpand = () => setExpanded((prevExpanded) => !prevExpanded)

  return (
    <StyledPanel expanded={expanded} {...props}>
      {!!sidebar && expanded && <div className="panel-sidebar">{sidebar}</div>}
      <div className="hud-container">
        {!hideHead && (
          <div className="panel-head">
            <div className="panel-head-controls panel-head-controls-left">
              {extraLeftControls}
            </div>
            <span className="panel-title">{title}</span>
            <div className="panel-head-controls panel-head-controls-right">
              {extraRightControls}
              {!disableExpand && (
                <Button
                  icon={expanded ? Minimize : Maximize}
                  modifiers="iconOnly"
                  onClick={toggleExpand}
                />
              )}
              <Button icon={Close} modifiers="iconOnly" onClick={onDismiss} />
            </div>
          </div>
        )}
        <div className="panel-body">{children}</div>
      </div>
    </StyledPanel>
  )
}
