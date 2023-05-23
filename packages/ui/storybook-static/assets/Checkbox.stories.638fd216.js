import{s as p,C as h,S as g,R as b}from"./Storybook.b497f08e.js";import{C as m}from"./Container.f6c04d3e.js";import{r as y}from"./index.59aa917f.js";import{S as C}from"./check.5c4d4aa8.js";import{L as v}from"./Label.3fdd96d3.js";import{b as t,l as S}from"./index.81122112.js";import{a as n,j as o}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./extends.842bf898.js";const w={selfStartCheckbox:()=>`
    .checkmark-container {
       align-self: flex-start;
    }
  `,selfStart:()=>"align-self: flex-start;"},$=p(p.div``).attrs(({customStyled:e})=>({style:e}))`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  .host {
    --comp-checkbox-border-color: ${({theme:e})=>e.palette.highlighted.main};
    --comp-checkbox-background-color: ${({theme:e})=>t(.5,e.palette.highlighted.main)};
    --comp-checkbox-text-color: ${({theme:e})=>e.palette.textPrimary.main};
    --comp-checkbox-disabled-border-color: ${({theme:e})=>t(.5,e.palette.highlighted.main)};
    --comp-checkbox-disabled-background-color: ${({theme:e})=>t(.5,e.palette.highlighted.main)};
    --comp-checkbox-disabled-text-color: ${({theme:e})=>e.palette.textSecondary.main};

    --comp-checkbox-checked-background-color: ${({theme:e})=>e.palette.primary.main};
    --comp-checkbox-unchecked-stroke: ${h.transparent};
    --comp-checkbox-checked-stroke: ${({theme:e})=>e.palette.highlighted.main};
    --comp-checkbox-hover-boxshadow-color: ${({theme:e})=>t(.5,e.palette.highlighted.main)};

    --comp-checkbox-border-radius: ${({shape:e})=>e==="circle"?"50%":"2px"};
    --comp-checkbox-width: ${({theme:e})=>e.typography.h5.fontSize}px;

    display: grid;
    grid-template-columns: min-content auto;
    column-gap: 10px;
    width: auto;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;

    &:hover {
      --comp-checkbox-border-color: ${({theme:e})=>e.palette.highlighted.main};
      --comp-checkbox-background-color: ${({theme:e})=>t(.5,e.palette.highlighted.main)};
      --comp-checkbox-unchecked-stroke: ${h.transparent};
      --comp-checkbox-checked-stroke: ${({theme:e})=>e.palette.highlighted.main};
      transition: all 250ms ease-in-out;
    }
  }

  .checkmark-container {
    display: flex;
    align-items: center;
    width: var(--comp-checkbox-width);
    aspect-ratio: 1/1;
    align-self: center;
    justify-content: center;
    align-items: center;
  }
  .input {
    opacity: 0;
    position: absolute;
    width: 0px;
    height: 0px;
  }
  .checkbox-control {
    display: flex;
    justify-content: center;
    width: var(--comp-checkbox-width);
    aspect-ratio: 1/1;
    cursor: pointer;
  }
  .input + .checkbox-control {
    border: 1px solid var(--comp-checkbox-border-color);
    border-radius: var(--comp-checkbox-border-radius);
    background: var(--comp-checkbox-background-color);
  }

  .host[app-checkbox-error='error'] .checkbox-control {
    border: 1px solid var(--comp-checkbox-border-color);
    border-radius: var(--comp-checkbox-border-radius);
  }
  .input:checked + .checkbox-control {
    border: 1px solid var(--comp-checkbox-checked-background-color);
    border-radius: var(--comp-checkbox-border-radius);
    background: var(--comp-checkbox-checked-background-color);
  }
  .input[disabled] + .checkbox-control {
    cursor: default;
    border: 1px solid var(--comp-checkbox-disabled-border-color);
    border-radius: var(--comp-checkbox-border-radius);
    background: var(--comp-checkbox-disabled-background-color);
  }
  .input[disabled]:checked + .checkbox-control {
    cursor: default;
    border: 1px solid var(--comp-checkbox-disabled-border-color);
    border-radius: var(--comp-checkbox-border-radius);
    background: var(--comp-checkbox-disabled-background-color);
  }
  .host:focus-within .checkbox-control {
    box-shadow: 0px 0px 5px var(--comp-checkbox-hover-boxshadow-color);
    outline: none;
  }

  .checkbox-control-icon {
    width: calc(var(--comp-checkbox-width) - 4px);
    height: calc(var(--comp-checkbox-width) - 4px);
    margin: 0;
    padding: 0;
    align-self: center;
    color: var(--comp-checkbox-unchecked-stroke);
  }
  .input:checked + span .checkbox-control-icon {
    display: block;
    stroke-width: 3px;
    color: var(--comp-checkbox-checked-stroke);
  }
  .input[disabled]:checked + span .checkbox-control-icon {
    display: block;
    stroke-width: 2px;
    color: var(--comp-checkbox-disabled-text-color);
  }

  .checkbox-label {
    place-self: start;
    cursor: pointer;
    font-family: ${({theme:e})=>e.typography.paragraph.fontFamily};
    font-size: ${({theme:e})=>e.typography.p3.fontSize}px;
    line-height: ${({theme:e})=>e.typography.p3.lineHeight}px;
    padding-top: 2px;
    color: var(--comp-checkbox-text-color);
  }
  .checkbox-disabled .checkbox-label {
    cursor: default;
    color: var(--comp-checkbox-disabled-text-color);
  }
  ${({mandatory:e,theme:i})=>e===!0?`
			  &:before {
          content: '*';
          color: ${i.palette.error.main};
          font-weight: 900;
          font-family: 'Inter';
          font-size: 22px;
          position: absolute;
          top: 0;
          right: -20px;
			  }
			`:""}
  ${({customModifiers:e})=>S.applyStyleModifiers({...w,...e})};
`,r=y.exports.forwardRef((e,i)=>{const{label:k,name:l,disabled:s,readonly:d,defaultChecked:a,errorMessage:c,...x}=e,u=d&&[!0,!1].indexOf(Boolean(a))>-1?{onChange:()=>{},checked:a}:{},f=!d&&[!0,!1].indexOf(Boolean(a))>-1?{defaultChecked:a}:{};return n($,{...e,children:[n("label",{className:`host ${s?"checkbox-disabled":""}`,"app-checkbox-error":c&&(c==null?void 0:c.length)>0?"error":"false",children:[n("span",{className:"checkmark-container",children:[o("input",{ref:i,className:"input",type:"checkbox",disabled:s,name:l!=null?l:"checkbox",...u,...f,...x}),o("span",{className:"checkbox-control",children:o(C,{className:"checkbox-control-icon"})})]}),o("span",{className:"checkbox-label",children:k})]}),o("div",{children:o(v,{modifiers:["error"],label:c})})]})});r.displayName="Checkbox";r.defaultProps={shape:"square"};r.__docgenInfo={description:`Props Description @function Checkbox @typedef props:CheckboxProps
@param label - renders as childs of checkbox **{ ReactNode | string}**
@param name - name attribute **{ string }**
@param mandatory - is mandatory state  **{ boolean }**
@param errorMessage - error message **{ string }**
@param customStyled -  client side style prop {@linkcode CSSObject }
@param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
@param modifiers - accessing style preset defined **{'selfStartCheckbox'}**
@param rest - inherits ComponentProps<'input'> {@linkcode ComponentProps<'input'>}
@returns {JSX} JSX`,methods:[],displayName:"Checkbox",props:{shape:{defaultValue:{value:"'square'",computed:!1},required:!1,tsType:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}]},description:""},label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},mandatory:{required:!1,tsType:{name:"boolean"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},customStyled:{required:!1,tsType:{name:"CSSObject"},description:""},customModifiers:{required:!1,tsType:{name:"ModifiersConfig"},description:""},modifiers:{required:!1,tsType:{name:"union",raw:"string[] | string",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"}]},description:""}}};const E={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../helpers/Storybook'

import { Container } from '../utility/container/Container'
import { Checkbox, CheckboxProps } from './Checkbox'

export default {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  argTypes: {
    modifiers: {
      options: ['selfStartCheckbox', 'selfStart'],
      control: { type: 'check' }
    },
    label: { control: { type: 'text' } },
    customStyled: { control: 'object' },
    mandatory: { control: 'boolean' }
  }
} as Meta

const Template: Story<CheckboxProps> = (props) => {
  return (
    <StoryWrapper>
      <Row title="Square Checkbox">
        <Container modifiers={['row', 'verticalSpaced20', 'spacedEvenly']}>
          <Checkbox {...props} name={'checkbox'} />
        </Container>
      </Row>
      <Row title="Circle Checkbox">
        <Container modifiers={['row', 'verticalSpaced20', 'spacedEvenly']}>
          <Checkbox {...props} name={'checkbox'} shape={'circle'} />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: [],
  label: 'I agree with the terms.',
  customStyled: {}
}
`,locationsMap:{default:{startLoc:{col:39,line:22},endLoc:{col:1,line:37},startBody:{col:39,line:22},endBody:{col:1,line:37}}}}},title:"Primitives/Checkbox",component:r,argTypes:{modifiers:{options:["selfStartCheckbox","selfStart"],control:{type:"check"}},label:{control:{type:"text"}},customStyled:{control:"object"},mandatory:{control:"boolean"}}},q=e=>n(g,{children:[o(b,{title:"Square Checkbox",children:o(m,{modifiers:["row","verticalSpaced20","spacedEvenly"],children:o(r,{...e,name:"checkbox"})})}),o(b,{title:"Circle Checkbox",children:o(m,{modifiers:["row","verticalSpaced20","spacedEvenly"],children:o(r,{...e,name:"checkbox",shape:"circle"})})})]}),T=q.bind({});T.args={modifiers:[],label:"I agree with the terms.",customStyled:{}};const _=["Default"];export{T as Default,_ as __namedExportsOrder,E as default};
//# sourceMappingURL=Checkbox.stories.638fd216.js.map
