import { render, cleanup } from '../../../test/test-utils'
import { Delimiter, DelimiterProps } from './Delimiter'

const modifiers = [
  'large',
  'medium',
  'small',
  'bottom8',
  'v40',
  'v20',
  'bottom24',
  'striketrouhOnly'
]

const setupSUT = (args?: DelimiterProps) => {
  return render(<Delimiter {...args} />, { mode: 'light' })
}

describe('Delimiter', () => {
  afterEach(() => cleanup())

  it.each(modifiers)('should render with "%s" modifier', (modifier) => {
    const snap = setupSUT({
      modifiers: [modifier]
    })

    expect(snap.container).toBeInTheDocument()
    expect(snap).toMatchSnapshot()
  })

  it('should render the text', () => {
    const snap = setupSUT({
      modifiers: ['medium'],
      text: 'text to render'
    })

    expect(snap.getByText('text to render')).toBeInTheDocument()
    expect(snap).toMatchSnapshot()
  })
})
