import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../helpers/Storybook'

import { Container } from '../utility/container/Container'
import { Label, LabelProps } from './Label'

export default {
  title: 'Primitives/Label',
  component: Label,
  argTypes: {
    modifiers: {
      options: [
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
      ],
      control: { type: 'check' }
    },
    label: { control: { type: 'text' } },
    customStyled: { control: 'object' }
  }
} as Meta

const Template: Story<LabelProps> = ({
  modifiers = [],
  label,
  customStyled
}) => {
  return (
    <StoryWrapper>
      <Row title="Label Primitive">
        <Container modifiers={['row', 'verticalSpaced20', 'fullWidth']}>
          <Label
            modifiers={modifiers}
            label={label}
            customStyled={customStyled}
          />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: [],
  label: 'Some label text',
  customStyled: {}
}
