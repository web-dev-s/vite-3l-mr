import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../../helpers/Storybook'

import { Container } from '../container/Container'
import { Delimiter, DelimiterProps } from './Delimiter'

export default {
  title: 'Utility/Delimiter',
  component: Delimiter,
  argTypes: {
    modifiers: {
      options: [
        'large',
        'medium',
        'small',
        'bottom8',
        'v40',
        'v20',
        'bottom24',
        'striketrouhOnly'
      ],
      control: { type: 'check' }
    }
  }
} as Meta

const Template: Story<DelimiterProps> = ({ modifiers = [], text }) => {
  return (
    <StoryWrapper>
      <Row title="Delimiter">
        <Container
          modifiers={[
            'column',
            'verticalSpaced20',
            'spacedEvenly',
            'fullWidth'
          ]}
        >
          <Delimiter
            modifiers={[...modifiers]}
            text={text && text?.length > 0 ? text : 'some'}
          />
          <Delimiter modifiers={[...modifiers]} text={'content'} />
          <Delimiter modifiers={[...modifiers]} text={'to'} />
          <Delimiter modifiers={[...modifiers]} text={'render'} />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: []
}
