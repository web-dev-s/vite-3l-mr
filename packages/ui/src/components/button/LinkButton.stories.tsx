import { Meta, Story } from '@storybook/react'

import { ElementWrapper, Row, StoryWrapper } from '../../helpers/Storybook'
import { Eye, ChevronRight } from '../../icons'
import { Container } from '../utility/container/Container'
import { LinkButton, LinkButtonProps } from './LinkButton'

export default {
  title: 'Primitives/Buttons',
  component: LinkButton,
  argTypes: {
    linkModifiers: {
      options: ['reversed', 'centered'],
      control: { type: 'check' }
    },
    linkContainerModifiers: {
      options: ['reversed', 'centered', 'stretched'],
      control: { type: 'check' }
    },
    icon: { table: { disable: true } },
    onClick: { table: { disable: true } }
  }
} as Meta

const Template: Story<LinkButtonProps> = (args) => (
  <StoryWrapper>
    <Row>
      <ElementWrapper>
        <LinkButton
          text={'link button 1'}
          prefixedText={'prefixed? '}
          {...args}
        />
      </ElementWrapper>
      <ElementWrapper>
        <LinkButton text={'link button 2'} {...args}>
          <ChevronRight />
        </LinkButton>
      </ElementWrapper>
      <ElementWrapper>
        <LinkButton
          text={'link button 3'}
          prefixedText={'prefixed? '}
          {...args}
        />
      </ElementWrapper>
    </Row>
    <Container modifiers={['row', 'fullwidth']}>
      <LinkButton
        text="Button with child element"
        prefixedText={'prefixed?'}
        {...args}
      >
        <Eye />
      </LinkButton>
    </Container>
  </StoryWrapper>
)

export const LinkButtons = Template.bind({})
LinkButtons.args = {
  linkModifiers: [],
  linkContainerModifiers: [],
  text: 'default button text',
  prefixedText: 'default prefixed text'
}
