import{S as i,R as o}from"./Storybook.b497f08e.js";import{D as n}from"./Delimiter.530c85e5.js";import{C as t}from"./Container.f6c04d3e.js";import{j as e,a}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./index.59aa917f.js";import"./index.81122112.js";import"./extends.842bf898.js";const v={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../../helpers/Storybook'

import { Delimiter } from '../delimiter/Delimiter'
import { Container, ContainerProps } from './Container'

export default {
  title: 'Utility/Container',
  component: Container,
  argTypes: {
    modifiers: {
      options: [
        'authPageForm',
        'holoContainer',
        'row',
        'column',
        'centeredContent',
        'spacedEvenly',
        'inlineGap8',
        'maxH45vh',
        'v20',
        'h20',
        'hmax380',
        'fullWidth'
      ],
      control: { type: 'check' }
    }
  }
} as Meta

const Template: Story<ContainerProps> = ({ modifiers = [] }) => {
  return (
    <StoryWrapper>
      <Row title="Container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            flex: 1,
            marginTop: '30px'
          }}
        >
          <Container modifiers={['v20', 'fullWidth']}>
            <Container
              modifiers={[
                'row',
                'verticalSpaced',
                'spacedEvenly',
                ...modifiers
              ]}
            >
              <Delimiter modifiers={['verticalPadded20']} text={'some'} />
              <Delimiter modifiers={['verticalPadded20']} text={'content'} />
              <Delimiter modifiers={['verticalPadded20']} text={'to'} />
              <Delimiter modifiers={['verticalPadded20']} text={'render'} />
            </Container>
          </Container>
        </div>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: []
}
`,locationsMap:{default:{startLoc:{col:40,line:32},endLoc:{col:1,line:65},startBody:{col:40,line:32},endBody:{col:1,line:65}}}}},title:"Utility/Container",component:t,argTypes:{modifiers:{options:["authPageForm","holoContainer","row","column","centeredContent","spacedEvenly","inlineGap8","maxH45vh","v20","h20","hmax380","fullWidth"],control:{type:"check"}}}},d=({modifiers:r=[]})=>e(i,{children:e(o,{title:"Container",children:e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",flex:1,marginTop:"30px"},children:e(t,{modifiers:["v20","fullWidth"],children:a(t,{modifiers:["row","verticalSpaced","spacedEvenly",...r],children:[e(n,{modifiers:["verticalPadded20"],text:"some"}),e(n,{modifiers:["verticalPadded20"],text:"content"}),e(n,{modifiers:["verticalPadded20"],text:"to"}),e(n,{modifiers:["verticalPadded20"],text:"render"})]})})})})}),l=d.bind({});l.args={modifiers:[]};const C=["Default"];export{l as Default,C as __namedExportsOrder,v as default};
//# sourceMappingURL=Container.stories.e1505045.js.map
