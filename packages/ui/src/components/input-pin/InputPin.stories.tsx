import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../helpers/Storybook'

import { TrashCan } from '../../icons'
import { Container } from '../utility/container/Container'
import { InputPin, InputPinProps } from './InputPin'

export default {
  title: 'Primitives/Inputs/InputPin',
  component: InputPin,
  argTypes: {
    modifiers: {
      options: ['stretched', 'success', 'error', 'withValidationButtons'],
      control: { type: 'check' }
    },
    prefix: { control: { type: 'text' } },
    charactersNo: { control: { type: 'number' } },
    footerMessage: { control: { type: 'text' } },
    footerMessageType: {
      options: ['error', 'warning'],
      control: { type: 'radio' }
    },
    required: { control: 'boolean' },
    customStyled: { control: { type: 'object' } },
    footerIcon: { table: { disable: true } },
    onChange: { table: { disable: true } }
  }
} as Meta

const Template: Story<InputPinProps> = ({ modifiers = [], ...args }) => {
  return (
    <StoryWrapper>
      <Row title="InputPin Primitive">
        <Container modifiers={['row', 'spaced20', 'fullWidth']}>
          <InputPin
            modifiers={['withValidationButtons', ...modifiers]}
            {...args}
            footerIcon={args?.footerMessage ? TrashCan : undefined}
          />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: [],
  prefix: '',
  charactersNo: 5,
  footerMessage: '',
  footerIconOnRight: false,
  footerMessageType: undefined,
  required: false,
  customStyled: {}
}
