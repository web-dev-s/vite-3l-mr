import{S as n}from"./Storybook.b497f08e.js";import{C as i}from"./Container.f6c04d3e.js";import{S as r}from"./StickyAlert.c9894ab7.js";import{j as e}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./index.59aa917f.js";import"./index.81122112.js";import"./extends.842bf898.js";import"./check.5c4d4aa8.js";import"./close.8612aa39.js";import"./information.c69ae277.js";const k={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'
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
`,locationsMap:{default:{startLoc:{col:61,line:25},endLoc:{col:1,line:39},startBody:{col:61,line:25},endBody:{col:1,line:39}}}}},title:"Primitives/Alerts/StickyAlert",component:r,argTypes:{children:{control:{type:"text"}},isVisible:{control:{type:"boolean"}},type:{options:["success","error","warning"],control:{type:"radio"}},customStyled:{control:"object"},ornament:{table:{disable:!0}},remove:{table:{disable:!0}},customModifiers:{table:{disable:!0}}}},l=({children:t,...o})=>e(n,{children:e(i,{modifiers:["row","v20","fullWidth"],customStyled:{flexDirection:"row-reverse"},children:e(r,{...o,children:t!=null?t:"This is the alert"})})}),s=l.bind({});s.args={children:"This is the alert",isVisible:!0,type:"warning",customStyled:{}};const A=["Default"];export{s as Default,A as __namedExportsOrder,k as default};
//# sourceMappingURL=StickyAlert.stories.88e6dcd4.js.map
