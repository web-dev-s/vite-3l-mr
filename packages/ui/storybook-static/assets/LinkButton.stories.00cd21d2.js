import{S as i,R as p,E as r}from"./Storybook.b497f08e.js";import"./index.59aa917f.js";import{S as l}from"./chevron-right.666b1b19.js";import{S as s}from"./eye.ee427fe5.js";import{C as a}from"./Container.f6c04d3e.js";import{L as e}from"./LinkButton.9e8059da.js";import{a as o,j as t}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./index.81122112.js";import"./extends.842bf898.js";const C={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'

import { ElementWrapper, Row, StoryWrapper } from '../../helpers/Storybook'
import { Eye, ChevronRight } from '../../icons'
import { Container } from '../utility/container/Container'
import { LinkButton, LinkButtonProps } from './LinkButton'

export default {
  title: 'Primitives/Buttons',
  component: LinkButton,
  argTypes: {
    linkModifiers: {
      options: ['reversed', 'centered'],
      control: { type: 'check' }
    },
    linkContainerModifiers: {
      options: ['reversed', 'centered', 'stretched'],
      control: { type: 'check' }
    },
    icon: { table: { disable: true } },
    onClick: { table: { disable: true } }
  }
} as Meta

const Template: Story<LinkButtonProps> = (args) => (
  <StoryWrapper>
    <Row>
      <ElementWrapper>
        <LinkButton
          text={'link button 1'}
          prefixedText={'prefixed? '}
          {...args}
        />
      </ElementWrapper>
      <ElementWrapper>
        <LinkButton text={'link button 2'} {...args}>
          <ChevronRight />
        </LinkButton>
      </ElementWrapper>
      <ElementWrapper>
        <LinkButton
          text={'link button 3'}
          prefixedText={'prefixed? '}
          {...args}
        />
      </ElementWrapper>
    </Row>
    <Container modifiers={['row', 'fullwidth']}>
      <LinkButton
        text="Button with child element"
        prefixedText={'prefixed?'}
        {...args}
      >
        <Eye />
      </LinkButton>
    </Container>
  </StoryWrapper>
)

export const LinkButtons = Template.bind({})
LinkButtons.args = {
  linkModifiers: [],
  linkContainerModifiers: [],
  text: 'default button text',
  prefixedText: 'default prefixed text'
}
`,locationsMap:{"link-buttons":{startLoc:{col:41,line:25},endLoc:{col:1,line:58},startBody:{col:41,line:25},endBody:{col:1,line:58}}}}},title:"Primitives/Buttons",component:e,argTypes:{linkModifiers:{options:["reversed","centered"],control:{type:"check"}},linkContainerModifiers:{options:["reversed","centered","stretched"],control:{type:"check"}},icon:{table:{disable:!0}},onClick:{table:{disable:!0}}}},d=n=>o(i,{children:[o(p,{children:[t(r,{children:t(e,{text:"link button 1",prefixedText:"prefixed? ",...n})}),t(r,{children:t(e,{text:"link button 2",...n,children:t(l,{})})}),t(r,{children:t(e,{text:"link button 3",prefixedText:"prefixed? ",...n})})]}),t(a,{modifiers:["row","fullwidth"],children:t(e,{text:"Button with child element",prefixedText:"prefixed?",...n,children:t(s,{})})})]}),c=d.bind({});c.args={linkModifiers:[],linkContainerModifiers:[],text:"default button text",prefixedText:"default prefixed text"};const E=["LinkButtons"];export{c as LinkButtons,E as __namedExportsOrder,C as default};
//# sourceMappingURL=LinkButton.stories.00cd21d2.js.map
