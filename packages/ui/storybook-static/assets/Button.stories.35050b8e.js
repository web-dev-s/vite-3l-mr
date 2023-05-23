import{S as p,R as a,E as e}from"./Storybook.b497f08e.js";import"./index.59aa917f.js";import{S as r}from"./google.52846759.js";import{S as s}from"./camera.fcd80d7f.js";import{S as l}from"./eye-crossed.0359fead.js";import{C as m}from"./Container.f6c04d3e.js";import{B as o}from"./Button.138387bf.js";import{a as i,j as t}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./index.81122112.js";import"./extends.842bf898.js";import"./Spinner.1d54eade.js";import"./objectWithoutPropertiesLoose.b60bc317.js";import"./index.ecef2a71.js";const v={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'

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
`,locationsMap:{buttons:{startLoc:{col:37,line:37},endLoc:{col:1,line:56},startBody:{col:37,line:37},endBody:{col:1,line:56}}}}},title:"Primitives/Buttons",component:o,argTypes:{modifiers:{options:["primary","secondary","stretched","shadowed","uppercased","iconOnly","fontEffects","top8","top24","v24"],control:{type:"check"}},tooltipText:{control:{type:"text"}},toolTipPlacement:{options:["top","bottom"],control:{type:"radio"}},icon:{table:{disable:!0}},onClick:{table:{disable:!0}}}},c=n=>i(p,{children:[i(a,{children:[t(e,{children:t(o,{text:"Text on button",...n})}),t(e,{children:t(o,{icon:s,...n})}),t(e,{children:t(o,{text:"Icon button",icon:r,...n})})]}),t(m,{modifiers:["row","fullwidth"],children:t(o,{text:"Button with child element",icon:r,...n,children:t(l,{style:{marginLeft:"10px"}})})})]}),d=c.bind({});d.args={modifiers:["primary"]};const k=["Buttons"];export{d as Buttons,k as __namedExportsOrder,v as default};
//# sourceMappingURL=Button.stories.35050b8e.js.map
