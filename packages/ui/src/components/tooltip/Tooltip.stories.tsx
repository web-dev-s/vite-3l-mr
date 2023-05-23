import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../helpers/Storybook'
import { Button } from '../button'
import { Container } from '../utility/container/Container'
import { Tooltip, TooltipProps } from './Tooltip'

export default {
  title: 'Primitives/Tooltips',
  component: Tooltip,
  argTypes: {
    text: { control: 'text' }
  }
} as Meta

const Template: Story<TooltipProps> = (args) => (
  <StoryWrapper>
    <Row title="Tooltips">
      <Container modifiers={['row', 'spacedEvenly']}>
        <Tooltip {...args}>
          <Button modifiers={'primary'} text={'Tooltip at the bottom'} />
        </Tooltip>
        <Tooltip placement="top" {...args}>
          <Button modifiers={'primary'}>Tooltip at the top</Button>
        </Tooltip>
      </Container>
    </Row>
  </StoryWrapper>
)

export const Default = Template.bind({})
Default.args = { modifiers: [], text: 'Tooltip' }
