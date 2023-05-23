import { Meta, Story } from '@storybook/react'
import { Row, StoryWrapper } from '../../helpers/Storybook'
import { TrashCan } from '../../icons'

import { Container } from '../utility/container/Container'
import { Input, InputProps } from './Input'

export default {
  title: 'Primitives/Inputs/Input',
  component: Input,
  argTypes: {
    modifiers: {
      options: ['success', 'error', 'warning', 'stretched', 'top16'],
      control: { type: 'check' }
    },
    headerLabel: { control: { type: 'text' } },
    headerIcon: { table: { disable: true } },
    headerIconOnRight: { control: 'boolean' },
    footerMessage: { control: { type: 'text' } },
    customStyled: { control: { type: 'object' } },
    required: { control: 'boolean' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    footerIcon: { table: { disable: true } },
    onChange: { table: { disable: true } },
    minLength: { table: { disable: true } },
    min: { table: { disable: true } },
    pattern: { table: { disable: true } },
    defaultValue: { table: { disable: true } }
  }
} as Meta

const Template: Story<InputProps> = ({ modifiers = [], ...args }) => {
  return (
    <StoryWrapper>
      <Row title="Input Primitive">
        <Container modifiers={['row', 'h20']}>
          <Input
            modifiers={modifiers}
            {...args}
            headerIcon={TrashCan}
            footerIcon={args?.footerMessage ? TrashCan : undefined}
          />
        </Container>
      </Row>
      <Row title="Input Primitive Variants">
        <Container modifiers={['row', 'inlineGap8', 'h20']}>
          <Input
            modifiers={modifiers}
            headerLabel={
              args?.headerLabel && args?.headerLabel?.length > 0
                ? args?.headerLabel
                : 'Field'
            }
            headerIcon={TrashCan}
            footerIcon={TrashCan}
            footerMessage={
              args?.footerMessage && args?.footerMessage?.length > 0
                ? args?.footerMessage
                : 'Error message'
            }
            footerMessageType={'error'}
            defaultValue={'error trigger string'}
          />
          <br />
          <Input
            modifiers={modifiers}
            headerLabel={
              args?.headerLabel && args?.headerLabel?.length > 0
                ? args?.headerLabel
                : 'Field'
            }
            headerIcon={TrashCan}
            footerMessage={
              args?.footerMessage && args?.footerMessage?.length > 0
                ? args?.footerMessage
                : 'Warning message'
            }
            footerIcon={TrashCan}
            footerMessageType={'warning'}
            defaultValue={'warning trigger string'}
          />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: [],
  headerLabel: 'Email',
  headerIconOnRight: false,
  placeholder: 'Insert email here...',
  defaultValue: '',
  required: true,
  readonly: true,
  disabled: false,
  footerMessage: '',
  footerIconOnRight: false,
  footerMessageType: undefined
}
