import { render, cleanup } from '../../test/test-utils'
import { Label, LabelProps } from './Label'

const modifiers = [
  'h4',
  'underlinedEffect',
  'underlined',
  'uppercased',
  'error',
  'warning',
  'success',
  'formFieldHeader',
  'mediumP',
  'noVerticalSpacing'
]

const setupSUT = (args?: LabelProps) => {
  return render(<Label {...args} />, { mode: 'light' })
}

describe('Label', () => {
  afterEach(() => cleanup())

  it('should render the label', () => {
    const snap = setupSUT({
      modifiers: ['mediumP'],
      label: 'label test'
    })

    expect(snap.getByText('label test')).toBeInTheDocument()
    expect(snap).toMatchSnapshot()
  })
  it('should not render without label prop', () => {
    const snap = setupSUT()

    expect(snap.container).toBeEmptyDOMElement()
    expect(snap).toMatchSnapshot()
  })

  it.each(modifiers)('should render with "%s" modifier', (modifier) => {
    const { getByText } = setupSUT({
      modifiers: [modifier],
      label: 'label test modifiers',
      customStyled: { color: 'green' }
    })
    const label = getByText('label test modifiers')

    expect(label).toBeInTheDocument()
    expect(label).toBeTruthy()
  })
})
