import { Eye, EyeCrossed } from '../../icons/ui'
import { render, screen, vi, userEvent, cleanup } from '../../test/test-utils'
import { Input, InputProps } from './Input'

const modifiers = ['success', 'error', 'warning', 'stretched', 'top16']

const setupSUT = (args: InputProps) => {
  return render(<Input {...args} />)
}

describe('Input', () => {
  afterEach(() => cleanup())

  it('should render the input', () => {
    const snap = setupSUT({
      modifiers: ['top16'],
      required: true,
      headerLabel: 'Email',
      headerIcon: Eye,
      headerIconOnRight: true,
      name: 'email',
      placeholder: 'insert email',
      type: 'text',
      footerIcon: EyeCrossed,
      footerIconOnRight: true
    })

    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(snap).toMatchSnapshot()
  })

  it.each(modifiers)('should render with "%s" modifier', (modifier) => {
    const { container } = setupSUT({
      required: true,
      headerLabel: 'Input Field',
      modifiers: [modifier],
      placeholder: 'placeholder mock'
    })
    const input = container.querySelector('[placeholder="placeholder mock"]')
    expect(input).toBeInTheDocument()
    expect(input).toBeTruthy()
  })

  it('should render the input in error state', () => {
    const { getByText } = setupSUT({
      modifiers: ['top16'],
      required: true,
      footerMessage: 'Error message',
      footerMessageType: 'error',
      defaultValue: 'error trigger string'
    })

    expect(getByText('Error message')).toBeInTheDocument()
  })

  it('should render the input in warning state', () => {
    const { container } = setupSUT({
      placeholder: 'insert email',
      footerMessage: 'Warning message',
      footerMessageType: 'warning'
    })
    const input = container.querySelector('[placeholder="insert email"]')
    expect(input).toBeInTheDocument()
  })

  it('should change input value', async () => {
    const onChangeMock = vi.fn()

    const { getByRole } = setupSUT({
      headerLabel: 'Email',
      name: 'email',
      placeholder: 'Insert email here...',
      type: 'text',
      required: true,
      onChange: onChangeMock,
      footerMessage: 'Warning message',
      footerMessageType: 'warning',
      'aria-label': 'Email Address'
    })
    const input = getByRole('textbox', {
      name: /email address/i
    })

    expect(input).toBeInTheDocument()

    await userEvent.type(input, 'some@email.com')

    expect(onChangeMock).toHaveBeenCalledTimes('some@email.com'?.length)
    expect(input).toHaveValue('some@email.com')

    onChangeMock.mockReset()

    await userEvent.clear(input)

    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(input).toHaveValue('')

    onChangeMock.mockReset()
  })
})
