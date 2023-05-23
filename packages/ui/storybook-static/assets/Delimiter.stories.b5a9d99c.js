import{S as n,R as i}from"./Storybook.b497f08e.js";import{C as m}from"./Container.f6c04d3e.js";import{D as r}from"./Delimiter.530c85e5.js";import{j as e,a as l}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./index.59aa917f.js";import"./index.81122112.js";import"./extends.842bf898.js";const x={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../../helpers/Storybook'

import { Container } from '../container/Container'
import { Delimiter, DelimiterProps } from './Delimiter'

export default {
  title: 'Utility/Delimiter',
  component: Delimiter,
  argTypes: {
    modifiers: {
      options: [
        'large',
        'medium',
        'small',
        'bottom8',
        'v40',
        'v20',
        'bottom24',
        'striketrouhOnly'
      ],
      control: { type: 'check' }
    }
  }
} as Meta

const Template: Story<DelimiterProps> = ({ modifiers = [], text }) => {
  return (
    <StoryWrapper>
      <Row title="Delimiter">
        <Container
          modifiers={[
            'column',
            'verticalSpaced20',
            'spacedEvenly',
            'fullWidth'
          ]}
        >
          <Delimiter
            modifiers={[...modifiers]}
            text={text && text?.length > 0 ? text : 'some'}
          />
          <Delimiter modifiers={[...modifiers]} text={'content'} />
          <Delimiter modifiers={[...modifiers]} text={'to'} />
          <Delimiter modifiers={[...modifiers]} text={'render'} />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: []
}
`,locationsMap:{default:{startLoc:{col:40,line:28},endLoc:{col:1,line:51},startBody:{col:40,line:28},endBody:{col:1,line:51}}}}},title:"Utility/Delimiter",component:r,argTypes:{modifiers:{options:["large","medium","small","bottom8","v40","v20","bottom24","striketrouhOnly"],control:{type:"check"}}}},s=({modifiers:o=[],text:t})=>e(n,{children:e(i,{title:"Delimiter",children:l(m,{modifiers:["column","verticalSpaced20","spacedEvenly","fullWidth"],children:[e(r,{modifiers:[...o],text:t&&(t==null?void 0:t.length)>0?t:"some"}),e(r,{modifiers:[...o],text:"content"}),e(r,{modifiers:[...o],text:"to"}),e(r,{modifiers:[...o],text:"render"})]})})}),a=s.bind({});a.args={modifiers:[]};const S=["Default"];export{a as Default,S as __namedExportsOrder,x as default};
//# sourceMappingURL=Delimiter.stories.b5a9d99c.js.map
