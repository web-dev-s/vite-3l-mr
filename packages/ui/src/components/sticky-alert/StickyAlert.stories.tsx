import { Meta, Story } from '@storybook/react'
import { PropsWithChildren } from 'react'
import { StoryWrapper } from '../../helpers/Storybook'

import { Container } from '../utility/container/Container'
import { StickyAlert, StickyAlertProps } from './StickyAlert'

export default {
  title: 'Primitives/Alerts/StickyAlert',
  component: StickyAlert,
  argTypes: {
    children: { control: { type: 'text' } },
    isVisible: { control: { type: 'boolean' } },
    type: {
      options: ['success', 'error', 'warning'],
      control: { type: 'radio' }
    },
    customStyled: { control: 'object' },
    ornament: { table: { disable: true } },
    remove: { table: { disable: true } },
    customModifiers: { table: { disable: true } }
  }
} as Meta

const Template: Story<PropsWithChildren<StickyAlertProps>> = ({
  children,
  ...args
}) => {
  return (
    <StoryWrapper>
      <Container
        modifiers={['row', 'v20', 'fullWidth']}
        customStyled={{ flexDirection: 'row-reverse' }}
      >
        <StickyAlert {...args}>{children ?? 'This is the alert'}</StickyAlert>
      </Container>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: 'This is the alert',
  isVisible: true,
  type: 'warning',
  customStyled: {}
}
