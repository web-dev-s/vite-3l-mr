import{s as u,S as y}from"./Storybook.b497f08e.js";import{r as k}from"./index.59aa917f.js";import{S as P}from"./close.8612aa39.js";import{S as $,a as S}from"./minimize.2a7202f9.js";import{B as s}from"./Button.138387bf.js";import"./LinkButton.9e8059da.js";import{b as w,c as d,a as v}from"./index.81122112.js";import{a as n,j as a}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./Spinner.1d54eade.js";import"./objectWithoutPropertiesLoose.b60bc317.js";import"./extends.842bf898.js";import"./index.ecef2a71.js";const E=u.div`
  position: absolute;
  width: 98vw;
  max-width: 360px;
  min-height: 360px;
  background-color: ${({theme:e})=>e.palette.black.dark};
  color: ${({theme:e})=>e.palette.textPrimary.main};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  transition: all 0.2s ease-out;
  overflow: hidden;

  ${({expanded:e})=>e?`
        width: 100%;
        height: calc(100% - 96px);
        max-width: 1128px;
      `:""}

  ${({sidebar:e,expanded:t,theme:o})=>!!e&&t?`
        flex-direction: row;
        padding: 16px;

        .panel-sidebar {
          width: 21.9858%;
          flex: 0 0 21.9858%;
          margin-right: 24px;
          background-color: ${w(.9,o.palette.white.main)};
          border-radius: 4px;
          padding: 16px 8px;
          display: flex;
          flex-direction: column;
        }
      `:""}

  &::-webkit-scrollbar {
    background-color: ${({theme:e})=>e.palette.background.main};
    width: 8px;
  }
  &::-webkit-scrollbar-corner {
    background-color: ${({theme:e})=>d(.3,e.palette.unfocused.main)};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>d(.1,e.palette.unfocused.main)};
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #0f0f0f;
    background-color: ${({theme:e})=>v(.1,e.palette.background.main)};
  }

  .hud-container {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .panel-head {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({sidebar:e,expanded:t})=>!!e&&t?"0":"12px 18.38px"};
    min-height: 24px;
    cursor: ${({expanded:e})=>e?"default":"move"};
    position: relative;
    overflow: hidden;

    .panel-title {
      flex: 1;
      font-family: ${({theme:e})=>e.typography.heading.fontFamily};
      font-size: ${({sidebar:e,expanded:t})=>!!e&&t?"32px":"20px"};
      font-weight: ${({sidebar:e,expanded:t})=>!!e&&t?"500":"600"};
      line-height: ${({sidebar:e,expanded:t})=>!!e&&t?"40px":"24px"};
      text-align: ${({sidebar:e,expanded:t})=>!!e&&t?"left":"center"};
      text-transform: capitalize;
    }

    .panel-head-controls {
      position: ${({sidebar:e,expanded:t})=>!!e&&t?"unset":"absolute"};
      display: flex;
      align-items: center;
      z-index: 1;

      &-right {
        right: 20.25px;

        button {
          margin-left: 16px;
        }
      }

      &-left {
        left: 18.35px;

        button {
          margin-right: 16px;
        }
      }

      button {
        padding: 0;
      }
    }
  }

  .panel-body {
    flex: 1;
    display: flex;
  }
`,r=e=>{const{title:t,children:o,disableExpand:p,isExpanded:c,sidebar:i,hideHead:x,extraLeftControls:m,extraRightControls:f,onDismiss:h}=e,[l,g]=k.exports.useState(c||!1);return n(E,{expanded:l,...e,children:[!!i&&l&&a("div",{className:"panel-sidebar",children:i}),n("div",{className:"hud-container",children:[!x&&n("div",{className:"panel-head",children:[a("div",{className:"panel-head-controls panel-head-controls-left",children:m}),a("span",{className:"panel-title",children:t}),n("div",{className:"panel-head-controls panel-head-controls-right",children:[f,!p&&a(s,{icon:l?$:S,modifiers:"iconOnly",onClick:()=>g(b=>!b)}),a(s,{icon:P,modifiers:"iconOnly",onClick:h})]})]}),a("div",{className:"panel-body",children:o})]})]})};r.__docgenInfo={description:`Description @function Panel @typedef props:PanelProps
@param disableExpand - flag to hide expand toggler
@param extraLeftControls - extra controllers on the panel head left section {@linkcode React.ReactNode}
@param extraRightControls - extra controllers on the panel head right section {@linkcode React.ReactNode}
@param hideHead - flag to hide the panel header
@param isExpanded - flag to parent control the panel expanded state
@param title - title for the panel
@param toggleExpand - on click on expand button callback
@param onDismiss - on click on dismiss button callback
@returns {JSX} JSX`,methods:[],displayName:"Panel"};const X={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from '../../../helpers/Storybook'
import { Panel, PanelProps } from './Panel'

export default {
  title: 'Utility/Panel',
  component: Panel,
  argTypes: {
    title: { control: { type: 'text' } },
    extraLeftControles: { control: { type: 'text' } },
    extraRightControles: { control: { type: 'text' } },
    sidebar: { control: { type: 'text' } },
    onDismiss: { table: { disable: true } },
    toggleExpand: { table: { disable: true } }
  }
} as Meta<PanelProps>

const Template: Story<PanelProps> = (args) => {
  return (
    <StoryWrapper>
      <Panel {...args}>
        <p>panel body</p>
      </Panel>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = { title: 'title', isExpanded: false, disableExpand: false }
`,locationsMap:{default:{startLoc:{col:36,line:18},endLoc:{col:1,line:26},startBody:{col:36,line:18},endBody:{col:1,line:26}}}}},title:"Utility/Panel",component:r,argTypes:{title:{control:{type:"text"}},extraLeftControles:{control:{type:"text"}},extraRightControles:{control:{type:"text"}},sidebar:{control:{type:"text"}},onDismiss:{table:{disable:!0}},toggleExpand:{table:{disable:!0}}}},C=e=>a(y,{children:a(r,{...e,children:a("p",{children:"panel body"})})}),D=C.bind({});D.args={title:"title",isExpanded:!1,disableExpand:!1};const F=["Default"];export{D as Default,F as __namedExportsOrder,X as default};
//# sourceMappingURL=Panel.stories.c16c81b7.js.map
