import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../helpers/Storybook'

import { Container } from '../utility/container/Container'
import { Checkbox, CheckboxProps } from './Checkbox'

export default {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  argTypes: {
    modifiers: {
      options: ['selfStartCheckbox', 'selfStart'],
      control: { type: 'check' }
    },
    label: { control: { type: 'text' } },
    customStyled: { control: 'object' },
    mandatory: { control: 'boolean' }
  }
} as Meta

const Template: Story<CheckboxProps> = (props) => {
  return (
    <StoryWrapper>
      <Row title="Square Checkbox">
        <Container modifiers={['row', 'verticalSpaced20', 'spacedEvenly']}>
          <Checkbox {...props} name={'checkbox'} />
        </Container>
      </Row>
      <Row title="Circle Checkbox">
        <Container modifiers={['row', 'verticalSpaced20', 'spacedEvenly']}>
          <Checkbox {...props} name={'checkbox'} shape={'circle'} />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: [],
  label: 'I agree with the terms.',
  customStyled: {}
}
