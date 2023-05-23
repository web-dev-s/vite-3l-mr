import{S as e,R as n}from"./Storybook.b497f08e.js";import{T as t,B as i}from"./Button.138387bf.js";import"./LinkButton.9e8059da.js";import{C as p}from"./Container.f6c04d3e.js";import{j as o,a}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./index.59aa917f.js";import"./Spinner.1d54eade.js";import"./index.81122112.js";import"./extends.842bf898.js";import"./objectWithoutPropertiesLoose.b60bc317.js";import"./index.ecef2a71.js";const g={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'

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
`,locationsMap:{default:{startLoc:{col:38,line:16},endLoc:{col:1,line:29},startBody:{col:38,line:16},endBody:{col:1,line:29}}}}},title:"Primitives/Tooltips",component:t,argTypes:{text:{control:"text"}}},l=r=>o(e,{children:o(n,{title:"Tooltips",children:a(p,{modifiers:["row","spacedEvenly"],children:[o(t,{...r,children:o(i,{modifiers:"primary",text:"Tooltip at the bottom"})}),o(t,{placement:"top",...r,children:o(i,{modifiers:"primary",children:"Tooltip at the top"})})]})})}),s=l.bind({});s.args={modifiers:[],text:"Tooltip"};const w=["Default"];export{s as Default,w as __namedExportsOrder,g as default};
//# sourceMappingURL=Tooltip.stories.44d70bae.js.map
