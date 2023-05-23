import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from '../../../helpers/Storybook'
import { Panel, PanelProps } from './Panel'

export default {
  title: 'Utility/Panel',
  component: Panel,
  argTypes: {
    title: { control: { type: 'text' } },
    extraLeftControles: { control: { type: 'text' } },
    extraRightControles: { control: { type: 'text' } },
    sidebar: { control: { type: 'text' } },
    onDismiss: { table: { disable: true } },
    toggleExpand: { table: { disable: true } }
  }
} as Meta<PanelProps>

const Template: Story<PanelProps> = (args) => {
  return (
    <StoryWrapper>
      <Panel {...args}>
        <p>panel body</p>
      </Panel>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = { title: 'title', isExpanded: false, disableExpand: false }
