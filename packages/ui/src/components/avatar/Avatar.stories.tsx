import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../helpers/Storybook'

import { Container } from '../utility/container/Container'
import { Avatar, AvatarProps } from './Avatar'

export default {
  title: 'Primitives/Avatar',
  component: Avatar,
  argTypes: {
    modifiers: {
      options: ['viewOnly'],
      control: { type: 'check' }
    },
    avatarImage: { control: 'text' },
    customStyled: { control: 'object' },
    onAvatarSet: { table: { disable: true } }
  }
} as Meta

const Template: Story<AvatarProps> = ({
  modifiers = [],
  customStyled,
  avatarImage
}) => {
  return (
    <StoryWrapper>
      <Row title="Avatar Primitive">
        <Container modifiers={['row', 'verticalSpaced20', 'spacedEvenly']}>
          <Avatar
            modifiers={modifiers}
            avatarImage={avatarImage}
            customStyled={customStyled}
          />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  avatarImage: 'https://picsum.photos/200/300?random=1',
  modifiers: [],
  customStyled: {}
}
