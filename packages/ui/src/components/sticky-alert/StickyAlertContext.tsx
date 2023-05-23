import { omit } from 'lodash'
import {
  createContext,
  Dispatch,
  FC,
  memo,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { StickyAlert, StickyAlertProps } from './StickyAlert'
import { StyledStickyAlertContainer } from './StickyAlertContext.style'

type StickyAlertContextData = {
  alerts: Array<PropsWithChildren<StickyAlertProps>>
  setAlerts: Dispatch<
    SetStateAction<Array<PropsWithChildren<StickyAlertProps>>>
  >
}

const StickyAlertContext = createContext<StickyAlertContextData>(
  {} as StickyAlertContextData
)

export type StickyAlertProviderProps = {
  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
}

export const StickyAlertProvider: FC<
  PropsWithChildren<StickyAlertProviderProps>
> = ({ children, ...props }) => {
  const [alerts, setAlerts] = useState<
    Array<PropsWithChildren<StickyAlertProps>>
  >([])

  const removeAlert = (id: string) => {
    setAlerts((storedAlerts) => storedAlerts.filter((alert) => alert.id !== id))
  }

  return (
    <StickyAlertContext.Provider value={{ alerts, setAlerts }}>
      {children}
      {alerts?.length > 0 && (
        <StyledStickyAlertContainer {...props}>
          {alerts.map((alert) => (
            <RenderAlert key={alert.id} {...alert} removeAlert={removeAlert} />
          ))}
        </StyledStickyAlertContainer>
      )}
    </StickyAlertContext.Provider>
  )
}

const RenderAlert: FC<
  StickyAlertProps & { removeAlert: (id: string) => void }
> = memo(
  (props) => {
    const { id, children, onClose, removeAlert } = props
    return (
      <div className={'alert-wrapper'}>
        <StickyAlert
          {...omit(props, ['removeAlert'])}
          onClose={() => {
            onClose?.()
            removeAlert(id)
          }}
        >
          {children}
        </StickyAlert>
      </div>
    )
  },
  (props, nextProps) =>
    props.id === nextProps.id && props.children === nextProps.children
)
RenderAlert.displayName = 'RenderAlert'

export type useContextParamsType = {
  autoDispose?: boolean
  tickSecInterval?: number
}

export function useStickyAlertContext(params?: useContextParamsType) {
  const { setAlerts } = useContext(StickyAlertContext)
  const { autoDispose = false, tickSecInterval = 2 } = params ?? {}

  const addAlert = (alert: PropsWithChildren<StickyAlertProps>) => {
    setAlerts?.((storedAlerts) => [
      ...storedAlerts,
      { ...alert, timeout: alert?.timeout ?? 5 }
    ])
  }

  const clearLastAlert = () => {
    setAlerts?.((storedAlerts) => [...storedAlerts?.slice(0, -1)])
  }

  // adding a timeout decrementer and clearing timeouted alerts
  useEffect(() => {
    const interval = autoDispose
      ? setInterval(() => {
          setAlerts((prev) =>
            prev
              .filter((alert) => Number(alert?.timeout) > 0)
              .map((alert) => ({
                ...alert,
                timeout: Number(alert?.timeout) - tickSecInterval
              }))
          )
        }, tickSecInterval * 1000)
      : undefined

    return () => interval && clearInterval(interval)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { addAlert, clearLastAlert }
}
