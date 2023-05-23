import { render, cleanup } from '../../../test/test-utils'
import { Container, ContainerProps } from './Container'

const modifiers = [
  'authPageForm',
  'holoContainer',
  'row',
  'column',
  'centeredContent',
  'spacedEvenly',
  'inlineGap8',
  'maxH45vh',
  'v20',
  'h20',
  'hmax380',
  'fullWidth'
]

const setupSUT = (args?: ContainerProps) => {
  return render(<Container {...args} />, { mode: 'light' })
}

describe('Container', () => {
  afterEach(() => cleanup())

  it.each(modifiers)('should render with "%s" modifier', (modifier) => {
    const snap = setupSUT({
      modifiers: [modifier]
    })

    expect(snap.container).toBeInTheDocument()
    expect(snap.container).toBeTruthy()
    expect(snap).toMatchSnapshot()
  })
})
