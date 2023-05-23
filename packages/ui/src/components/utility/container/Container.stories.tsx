import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../../helpers/Storybook'

import { Delimiter } from '../delimiter/Delimiter'
import { Container, ContainerProps } from './Container'

export default {
  title: 'Utility/Container',
  component: Container,
  argTypes: {
    modifiers: {
      options: [
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
      ],
      control: { type: 'check' }
    }
  }
} as Meta

const Template: Story<ContainerProps> = ({ modifiers = [] }) => {
  return (
    <StoryWrapper>
      <Row title="Container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            flex: 1,
            marginTop: '30px'
          }}
        >
          <Container modifiers={['v20', 'fullWidth']}>
            <Container
              modifiers={[
                'row',
                'verticalSpaced',
                'spacedEvenly',
                ...modifiers
              ]}
            >
              <Delimiter modifiers={['verticalPadded20']} text={'some'} />
              <Delimiter modifiers={['verticalPadded20']} text={'content'} />
              <Delimiter modifiers={['verticalPadded20']} text={'to'} />
              <Delimiter modifiers={['verticalPadded20']} text={'render'} />
            </Container>
          </Container>
        </div>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: []
}
