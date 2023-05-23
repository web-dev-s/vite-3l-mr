import { Meta, Story } from '@storybook/react'

import { ElementWrapper, Row, StoryWrapper } from '../../helpers/Storybook'
import { Camera, Google, EyeCrossed } from '../../icons'
import { Container } from '../utility/container/Container'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Primitives/Buttons',
  component: Button,
  argTypes: {
    modifiers: {
      options: [
        'primary',
        'secondary',
        'stretched',
        'shadowed',
        'uppercased',
        'iconOnly',
        'fontEffects',
        'top8',
        'top24',
        'v24'
      ],
      control: { type: 'check' }
    },
    tooltipText: { control: { type: 'text' } },
    toolTipPlacement: {
      options: ['top', 'bottom'],
      control: { type: 'radio' }
    },
    icon: { table: { disable: true } },
    onClick: { table: { disable: true } }
  }
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <StoryWrapper>
    <Row>
      <ElementWrapper>
        <Button text="Text on button" {...args} />
      </ElementWrapper>
      <ElementWrapper>
        <Button icon={Camera} {...args} />
      </ElementWrapper>
      <ElementWrapper>
        <Button text="Icon button" icon={Google} {...args} />
      </ElementWrapper>
    </Row>
    <Container modifiers={['row', 'fullwidth']}>
      <Button text="Button with child element" icon={Google} {...args}>
        <EyeCrossed style={{ marginLeft: '10px' }} />
      </Button>
    </Container>
  </StoryWrapper>
)

export const Buttons = Template.bind({})
Buttons.args = { modifiers: ['primary'] }
