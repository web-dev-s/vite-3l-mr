import { PropsWithChildren } from 'react'
import { Eye } from '../../icons/ui'
import { cleanup, render, vi } from '../../test/test-utils'
import { StickyAlert, StickyAlertProps } from './StickyAlert'
const alertType = ['warning', 'success', 'error']

const setupSUT = (args: PropsWithChildren<StickyAlertProps>) => {
  const { children, ...rest } = args
  return render(<StickyAlert {...rest}>{children}</StickyAlert>)
}

describe('StickyAlert', () => {
  afterEach(() => cleanup())
  it('should render default sticky alert', () => {
    const snap = setupSUT({
      id: 'stickyAlert',
      timeout: 10,
      isVisible: true,
      type: '' as StickyAlertProps['type'],
      children: 'StickyAlert',
      onClose: vi.fn()
    })

    expect(snap.getByText('StickyAlert')).toBeInTheDocument()
  })
  it('should not render sticky alert when visible is false', () => {
    const snap = setupSUT({
      id: 'stickyAlert',
      timeout: 10,
      isVisible: false,
      type: '' as StickyAlertProps['type'],
      ornament: Eye,
      children: 'StickyAlert',
      onClose: vi.fn()
    })
    expect(snap.container).toBeEmptyDOMElement()
  })

  it.each(alertType)('should render the "%s" sticky alert', (alert) => {
    const snap = setupSUT({
      id: 'stickyAlert',
      timeout: 10,
      isVisible: true,
      type: alert as StickyAlertProps['type'],
      children: 'StickyAlert',
      onClose: vi.fn()
    })

    expect(snap.getByText('StickyAlert')).toBeInTheDocument()
    expect(snap).toMatchSnapshot()
  })
})
