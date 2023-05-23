import { Meta, Story } from '@storybook/react'
import { FC, PropsWithChildren } from 'react'
import { StoryWrapper, Row } from '../../helpers/Storybook'
import { Button } from '../button'
import { Container } from '../utility/container/Container'
import {
  StickyAlertProvider,
  StickyAlertProviderProps,
  useStickyAlertContext
} from './StickyAlertContext'

type AlertProviderChildProps = {
  autoDispose: boolean
  tickSecInterval: number
  timeoutWarning: number
  timeoutSuccess: number
  timeoutError: number
}

const AlertProviderChild: FC<AlertProviderChildProps> = (props) => {
  const {
    autoDispose,
    tickSecInterval,
    timeoutWarning,
    timeoutSuccess,
    timeoutError
  } = props
  const { addAlert } = useStickyAlertContext({
    autoDispose: autoDispose,
    tickSecInterval: tickSecInterval
  })

  return (
    <Container modifiers={['column', 'v20']}>
      <Button
        modifiers={['primary', 'v24']}
        text={'Add warning alert'}
        onClick={() =>
          addAlert({
            id: Math.random().toString(),
            isVisible: true,
            timeout: timeoutWarning ?? 3,
            children: 'This is a warning alert',
            type: 'warning'
          })
        }
      />
      <Button
        modifiers={['primary', 'v24']}
        text={'Add success alert'}
        onClick={() =>
          addAlert({
            id: Math.random().toString(),
            isVisible: true,
            timeout: timeoutSuccess ?? 5,
            children: 'This is a success alert',
            type: 'success'
          })
        }
      />
      <Button
        modifiers={['primary', 'v24']}
        text={'Add error alert'}
        onClick={() =>
          addAlert({
            id: Math.random().toString(),
            isVisible: true,
            timeout: timeoutError ?? 8,
            children: 'This is an error alert',
            type: 'error'
          })
        }
      />
    </Container>
  )
}

export default {
  title: 'Primitives/Alerts/StickyAlertContext',
  component: AlertProviderChild,
  argTypes: {
    autoDispose: { control: { type: 'boolean' } },
    timeoutWarning: { control: { type: 'number' } },
    timeoutSuccess: { control: { type: 'number' } },
    timeoutError: { control: { type: 'number' } },
    customStyled: { control: 'object' }
  }
} as Meta

const TemplateContext: Story<
  PropsWithChildren<AlertProviderChildProps & StickyAlertProviderProps>
> = ({ customStyled, ...rest }) => {
  return (
    <StoryWrapper>
      <StickyAlertProvider customStyled={customStyled}>
        <Row title="Alerts triggers">
          <AlertProviderChild {...rest} />
        </Row>
      </StickyAlertProvider>
    </StoryWrapper>
  )
}

export const Default = TemplateContext.bind({})
Default.args = {
  autoDispose: true,
  tickSecInterval: 2,
  timeoutWarning: 3,
  timeoutSuccess: 5,
  timeoutError: 8,
  customStyled: {}
}
