import { PropsWithChildren } from 'react'
import { flushPromises } from '../../test/react-hooks-sinon-mock'
import {
  describe,
  expect,
  it,
  render,
  userEvent,
  vi
} from '../../test/test-utils'
import { StickyAlertProps } from './StickyAlert'
import {
  StickyAlertProvider,
  StickyAlertProviderProps,
  useStickyAlertContext
} from './StickyAlertContext'

type ProviderChildProps = {
  hookParams?: { autoDispose: boolean; tickSecInterval?: number }
} & PropsWithChildren<StickyAlertProps>

const ProviderChild = (args: ProviderChildProps) => {
  const { hookParams, ...alertParams } = args
  const { addAlert } = useStickyAlertContext(hookParams)

  const onClick = () => addAlert(alertParams)

  return (
    <div>
      <button type={'button'} onClick={onClick}>
        {'Add Alert'}
      </button>
    </div>
  )
}

// setting up system under test

const setupSUT = (
  args: PropsWithChildren<StickyAlertProviderProps> & {
    alertOptions: ProviderChildProps
  }
) => {
  const { alertOptions, ...providerProps } = args

  return render(
    <StickyAlertProvider {...providerProps}>
      <ProviderChild {...alertOptions} />
    </StickyAlertProvider>
  )
}

describe('StickyAlertContext', () => {
  it('should render and dismiss when pressed an error alert', async () => {
    const onCloseMock = vi.fn()
    const snap = setupSUT({
      alertOptions: {
        id: Math.random().toString(),
        isVisible: true,
        type: 'error',
        children: 'error alert',
        onClose: onCloseMock
      }
    })

    const addAlert = snap.getByText('Add Alert')

    expect(addAlert).toBeInTheDocument()

    await userEvent.click(addAlert)

    const errorAlert = snap.getByRole('button', {
      name: 'error alert'
    })

    expect(errorAlert).toBeInTheDocument()

    await userEvent.click(errorAlert)

    expect(onCloseMock).toHaveBeenCalledTimes(1)

    await flushPromises()

    expect(errorAlert).not.toBeInTheDocument()
  })

  it('should render and autodismiss after timeout a warning alert ', async () => {
    vi.useFakeTimers({ toFake: ['setInterval', 'nextTick'] })

    const snap = setupSUT({
      alertOptions: {
        hookParams: { autoDispose: true, tickSecInterval: 0.5 },
        id: Math.random().toString(),
        isVisible: true,
        timeout: 1,
        type: 'warning',
        children: 'warning alert'
      }
    })

    const addAlert = snap.getByText('Add Alert')

    expect(addAlert).toBeInTheDocument()

    await userEvent.click(addAlert)

    const warningAlert = snap.getByRole('button', {
      name: 'warning alert'
    })

    expect(warningAlert).toBeInTheDocument()

    vi.advanceTimersByTime(2000)

    expect(warningAlert).not.toBeInTheDocument()

    vi.useRealTimers()
  })

  it('should render and autodismiss after timeout a success alert', async () => {
    vi.useFakeTimers({ toFake: ['setInterval', 'nextTick'] })

    const snap = setupSUT({
      alertOptions: {
        hookParams: { autoDispose: true },
        id: Math.random().toString(),
        isVisible: true,
        type: 'success',
        children: 'success alert'
      }
    })

    const addAlert = snap.getByText('Add Alert')

    expect(addAlert).toBeInTheDocument()

    await userEvent.click(addAlert)

    const successAlert = snap.getByRole('button', {
      name: 'success alert'
    })

    expect(successAlert).toBeInTheDocument()

    vi.advanceTimersByTime(8000)

    expect(successAlert).not.toBeInTheDocument()

    vi.useRealTimers()
  })
})
