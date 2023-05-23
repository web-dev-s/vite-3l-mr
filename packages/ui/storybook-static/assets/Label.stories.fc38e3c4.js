import{S as i,R as l}from"./Storybook.b497f08e.js";import{C as a}from"./Container.f6c04d3e.js";import{L as t}from"./Label.3fdd96d3.js";import{j as e}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./index.59aa917f.js";import"./index.81122112.js";import"./extends.842bf898.js";const L={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../helpers/Storybook'

import { Container } from '../utility/container/Container'
import { Label, LabelProps } from './Label'

export default {
  title: 'Primitives/Label',
  component: Label,
  argTypes: {
    modifiers: {
      options: [
        'h4',
        'underlinedEffect',
        'underlined',
        'uppercased',
        'error',
        'warning',
        'success',
        'formFieldHeader',
        'mediumP',
        'noVerticalSpacing'
      ],
      control: { type: 'check' }
    },
    label: { control: { type: 'text' } },
    customStyled: { control: 'object' }
  }
} as Meta

const Template: Story<LabelProps> = ({
  modifiers = [],
  label,
  customStyled
}) => {
  return (
    <StoryWrapper>
      <Row title="Label Primitive">
        <Container modifiers={['row', 'verticalSpaced20', 'fullWidth']}>
          <Label
            modifiers={modifiers}
            label={label}
            customStyled={customStyled}
          />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: [],
  label: 'Some label text',
  customStyled: {}
}
`,locationsMap:{default:{startLoc:{col:36,line:32},endLoc:{col:1,line:50},startBody:{col:36,line:32},endBody:{col:1,line:50}}}}},title:"Primitives/Label",component:t,argTypes:{modifiers:{options:["h4","underlinedEffect","underlined","uppercased","error","warning","success","formFieldHeader","mediumP","noVerticalSpacing"],control:{type:"check"}},label:{control:{type:"text"}},customStyled:{control:"object"}}},s=({modifiers:n=[],label:o,customStyled:r})=>e(i,{children:e(l,{title:"Label Primitive",children:e(a,{modifiers:["row","verticalSpaced20","fullWidth"],children:e(t,{modifiers:n,label:o,customStyled:r})})})}),c=s.bind({});c.args={modifiers:[],label:"Some label text",customStyled:{}};const h=["Default"];export{c as Default,h as __namedExportsOrder,L as default};
//# sourceMappingURL=Label.stories.fc38e3c4.js.map
