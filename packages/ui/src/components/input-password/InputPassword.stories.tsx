import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../helpers/Storybook'

import { TrashCan } from '../../icons'
import { Container } from '../utility/container/Container'
import { InputPassword, InputPasswordProps } from './InputPassword'

export default {
  title: 'Primitives/Inputs/InputPassword',
  component: InputPassword,
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

const Template: Story<InputPasswordProps> = ({ modifiers = [], ...args }) => {
  return (
    <StoryWrapper>
      <Row title="InputPassword Primitive">
        <Container modifiers={['row', 'h20']}>
          <InputPassword
            modifiers={modifiers}
            {...args}
            headerIcon={TrashCan}
            footerIcon={args?.footerMessage ? TrashCan : undefined}
          />
        </Container>
      </Row>
      <br />
      <br />
      <Row title="Input Primitive State Variants">
        <Container modifiers={['row', 'inlineGap8', 'h20', 'fullWidth']}>
          <InputPassword
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
            footerIconOnRight
          />
          <br />
          <InputPassword
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
            footerIconOnRight
          />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: [],
  headerLabel: 'Password',
  headerIconOnRight: false,
  placeholder: 'Insert password here...',
  defaultValue: '',
  required: true,
  readonly: true,
  disabled: false,
  footerMessage: '',
  footerIconOnRight: false,
  footerMessageType: undefined
}
