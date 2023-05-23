import{s as g,C as y,l as I,S as E,R as x}from"./Storybook.b497f08e.js";import{r as w}from"./index.59aa917f.js";import{S as i}from"./trash-can.ed5a2740.js";import{C as v}from"./Container.f6c04d3e.js";import{L as M}from"./Label.3fdd96d3.js";import{l as N}from"./index.81122112.js";import{a as l,j as r}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./extends.842bf898.js";const G={success:({theme:e})=>`
    --comp-border-color: ${e.palette.success.main};
    --comp-footer-color: ${e.palette.success.main};
    --comp-message-color: ${e.palette.success.main};
  `,error:({theme:e})=>`
    --comp-border-color: ${e.palette.error.main};
    --comp-footer-color: ${e.palette.error.main};
    --comp-message-color: ${e.palette.error.main};
  `,warning:({theme:e})=>`
    --comp-border-color: ${e.palette.warning.main};
    --comp-footer-color: ${e.palette.warning.main};
    --comp-message-color: ${e.palette.warning.main};
  `,stretched:({theme:e})=>`
    width: 100%;
    line-height: ${e.typography.p1.lineHeight}px;
    text-align: center;
    justify-content: center;
    align-items: stretch;
  `,top16:({headerLabel:e})=>`
    padding-top: 16px;
    --comp-required-top-offset: ${e?"36px":"16px"};
  `},W=g(g.div``).attrs(({customStyled:e})=>({style:e}))`
  --comp-header-flex-direction: row;
  --comp-footer-flex-direction: row;
  --comp-footer-flex-justify: flex-start;
  --comp-required-top-offset: ${({headerLabel:e})=>e?"1em":"0"};
  --comp-border-color: ${({theme:e})=>e.palette.unfocused.main};
  --comp-text-color: ${({theme:e})=>e.palette.textPrimary.main};
  --comp-footer-color: ${({theme:e})=>e.palette.textPrimary.main};
  --comp-message-color: inherit;
  --comp-placeholder-color: ${({theme:e})=>e.palette.unfocused.main};
  --comp-footer-icon-padding: 0 5px 0 0;

  &:focus,
  &:focus-within {
    --comp-border-color: ${({theme:e})=>e.palette.highlighted.main};
    --comp-text-color: ${({theme:e})=>e.palette.textPrimary.main};
    --comp-placeholder-color: ${({theme:e})=>e.palette.unfocused.main};
  }
  ${({headerIconOnRight:e})=>e?"--comp-header-flex-direction: row-reverse;":""}
  ${({footerIconOnRight:e})=>e?`
        --comp-footer-flex-direction: row-reverse;
        --comp-footer-flex-justify: flex-end;
        --comp-footer-icon-padding: 0 0 0 5px;
      `:""}
  ${({theme:e,footerMessage:o,footerMessageType:t})=>o&&t==="error"?`
        --comp-border-color: ${e.palette.error.main};
        --comp-footer-color: ${e.palette.error.main};
        --comp-message-color: ${e.palette.error.main};
      `:""}
  ${({theme:e,footerMessage:o,footerMessageType:t})=>o&&t==="warning"?`
        --comp-border-color: ${e.palette.warning.main};
        --comp-footer-color: ${e.palette.warning.main};
        --comp-message-color: ${e.palette.warning.main};
      `:""}

  position: relative;
  width: auto;
  height: 100%;
  margin: 0;
  padding: 0;
  background: ${y.transparent};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  color: var(--comp-text-color);

  .input-container {
    display: flex;
    border: 1px solid var(--comp-border-color);
    border-radius: 2px;
    position: relative;
  }

  input {
    width: calc(100% - 2px);

    min-height: 24px;
    padding: 0;
    margin: 8px 16px;

    outline: none;
    border: none;
    background-color: ${y.transparent};

    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: inherit;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: var(--comp-placeholder-color);
    }
    :-ms-input-placeholder {
      color: var(--comp-placeholder-color);
    }
  }

  .header {
    display: flex;
    flex-direction: var(--comp-header-flex-direction);
    justify-content: space-between;
    align-items: center;

    label {
      color: var(--comp-footer-color);
      width: auto;
    }
  }

  .header-icon {
    width: 1em;
    aspect-ratio: 1/1;
    color: inherit;
  }

  .footer {
    padding-top: 5px;
    display: flex;
    flex-direction: var(--comp-footer-flex-direction);
    justify-content: var(--comp-footer-flex-justify);
    align-items: center;
    label {
      color: var(--comp-message-color);
      width: auto;
    }
  }

  .footer-icon {
    align-self: center;
    width: 1.1em;
    aspect-ratio: 1/1;
    color: var(--comp-message-color);

    padding: var(--comp-footer-icon-padding);
  }

  ${({required:e,theme:o})=>e===!0?`
          &:before {
            content: '*';
            color: ${o.palette.error.main};
            font-weight: 900;
            font-family: inherit;
            font-size: 22px;
            position: absolute;
            top: var(--comp-required-top-offset);
            right: -20px;
          }
        `:""}

  ${({customModifiers:e})=>N.applyStyleModifiers({...G,...e})};
`,n=w.exports.forwardRef((e,o)=>{const{headerLabel:t,headerIcon:a,headerIconOnRight:s,placeholder:c,defaultValue:d,disabled:C,readonly:$,name:L,type:S,autoComplete:P,charactersNo:R,footerMessage:m,footerMessageType:u,footerIcon:h,footerIconOnRight:T,onChange:f,...V}=e,[O,k]=w.exports.useState(d!=null?d:""),j=p=>{k(p.target.value),f==null||f(p)},F=Object.entries(I.exports.omit(e,["onChange"])).reduce((p,[b,q])=>Object.assign(p,{[b]:b==="headerIconOnRight"?s:q}),{});return l(W,{...F,children:[(t||a)&&l("div",{className:"header",children:[t&&r(M,{label:t,modifiers:["formFieldHeader"]}),a&&r(a,{className:"header-icon"})]}),r("div",{className:"input-container",children:r("input",{ref:o,placeholder:c,value:O,type:S,name:L,readOnly:$,disabled:C,autoComplete:P,maxLength:R,onChange:j,...I.exports.omit(V,["customStyled","customModifiers"])})}),(m||T)&&l("div",{className:"footer",children:[h&&r(h,{className:"footer-icon"}),m&&r(M,{label:m,modifiers:["formFieldHeader",String(u==="error"&&"error"),String(u==="warning"&&"warning")]})]})]})});n.displayName="Input";n.defaultProps={type:"text",name:"input-element",placeholder:"Insert text here..."};n.__docgenInfo={description:`Props Description @function Input @typedef props:InputProps
@param headerLabel  - label on top of field **{ string }**
@param headerIcon - icon to be rendered in field header **{@linkcode React.FC<SVGProps<SVGElement>> }**
@param headerIconOnRight - switching positions of label with icon in header **{ boolean }**

@param name - name attribute used in form field registration **{string}**
@param placeholder - placeholder **{ string }**
@param charactersNo -  max number of characters **{ number }**
@param type - forwarded button's type **{@linkcode ComponentProps<'input'>['type']}**
@param disabled - disabled state **{@linkcode ComponentProps<'input'>['disabled'] }**
@param readonly - readonly state **{@linkcode ComponentProps<'input'>['readOnly'] }**
@param autoComplete - forwarded attribute {@linkcode ComponentProps<'input'>['autoComplete']}
@param defaultValue - initial value **{@linkcode ComponentProps<'input'>['defaultValue'] }**
@param onChange - event handler forwarded **{@linkcode ChangeEventHandler<HTMLInputElement> }**

@param footerMessage - validation message  **{ string }**
@param footerIcon - icon to be rendered in footer mesage **{@linkcode React.FunctionComponent<React.SVGProps<SVGSVGElement>>}**
@param footerIconOnRight - switching positions of message with icon in footer **{ boolean }**
@param footerMessageType - color presets for footer elements **{'warning' | 'error'}**

@param customStyled -  client side style particularities {@linkcode CSSObject }
@param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
@param modifiers - accessing style preset **{ 'success', 'error', 'warning', 'stretched', 'top16' }**
@param rest - inherits ComponentProps<'div'> {@linkcode ComponentProps<'div'>}
@returns {JSX} JSX`,methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},name:{defaultValue:{value:"'input-element'",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Insert text here...'",computed:!1},required:!1}}};const Y={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'
import { Row, StoryWrapper } from '../../helpers/Storybook'
import { TrashCan } from '../../icons'

import { Container } from '../utility/container/Container'
import { Input, InputProps } from './Input'

export default {
  title: 'Primitives/Inputs/Input',
  component: Input,
  argTypes: {
    modifiers: {
      options: ['success', 'error', 'warning', 'stretched', 'top16'],
      control: { type: 'check' }
    },
    headerLabel: { control: { type: 'text' } },
    headerIcon: { table: { disable: true } },
    headerIconOnRight: { control: 'boolean' },
    footerMessage: { control: { type: 'text' } },
    customStyled: { control: { type: 'object' } },
    required: { control: 'boolean' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    footerIcon: { table: { disable: true } },
    onChange: { table: { disable: true } },
    minLength: { table: { disable: true } },
    min: { table: { disable: true } },
    pattern: { table: { disable: true } },
    defaultValue: { table: { disable: true } }
  }
} as Meta

const Template: Story<InputProps> = ({ modifiers = [], ...args }) => {
  return (
    <StoryWrapper>
      <Row title="Input Primitive">
        <Container modifiers={['row', 'h20']}>
          <Input
            modifiers={modifiers}
            {...args}
            headerIcon={TrashCan}
            footerIcon={args?.footerMessage ? TrashCan : undefined}
          />
        </Container>
      </Row>
      <Row title="Input Primitive Variants">
        <Container modifiers={['row', 'inlineGap8', 'h20']}>
          <Input
            modifiers={modifiers}
            headerLabel={
              args?.headerLabel && args?.headerLabel?.length > 0
                ? args?.headerLabel
                : 'Field'
            }
            headerIcon={TrashCan}
            footerIcon={TrashCan}
            footerMessage={
              args?.footerMessage && args?.footerMessage?.length > 0
                ? args?.footerMessage
                : 'Error message'
            }
            footerMessageType={'error'}
            defaultValue={'error trigger string'}
          />
          <br />
          <Input
            modifiers={modifiers}
            headerLabel={
              args?.headerLabel && args?.headerLabel?.length > 0
                ? args?.headerLabel
                : 'Field'
            }
            headerIcon={TrashCan}
            footerMessage={
              args?.footerMessage && args?.footerMessage?.length > 0
                ? args?.footerMessage
                : 'Warning message'
            }
            footerIcon={TrashCan}
            footerMessageType={'warning'}
            defaultValue={'warning trigger string'}
          />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: [],
  headerLabel: 'Email',
  headerIconOnRight: false,
  placeholder: 'Insert email here...',
  defaultValue: '',
  required: true,
  readonly: true,
  disabled: false,
  footerMessage: '',
  footerIconOnRight: false,
  footerMessageType: undefined
}
`,locationsMap:{default:{startLoc:{col:36,line:33},endLoc:{col:1,line:87},startBody:{col:36,line:33},endBody:{col:1,line:87}}}}},title:"Primitives/Inputs/Input",component:n,argTypes:{modifiers:{options:["success","error","warning","stretched","top16"],control:{type:"check"}},headerLabel:{control:{type:"text"}},headerIcon:{table:{disable:!0}},headerIconOnRight:{control:"boolean"},footerMessage:{control:{type:"text"}},customStyled:{control:{type:"object"}},required:{control:"boolean"},readonly:{control:"boolean"},disabled:{control:"boolean"},footerIcon:{table:{disable:!0}},onChange:{table:{disable:!0}},minLength:{table:{disable:!0}},min:{table:{disable:!0}},pattern:{table:{disable:!0}},defaultValue:{table:{disable:!0}}}},D=({modifiers:e=[],...o})=>{var t,a,s,c;return l(E,{children:[r(x,{title:"Input Primitive",children:r(v,{modifiers:["row","h20"],children:r(n,{modifiers:e,...o,headerIcon:i,footerIcon:o!=null&&o.footerMessage?i:void 0})})}),r(x,{title:"Input Primitive Variants",children:l(v,{modifiers:["row","inlineGap8","h20"],children:[r(n,{modifiers:e,headerLabel:(o==null?void 0:o.headerLabel)&&((t=o==null?void 0:o.headerLabel)==null?void 0:t.length)>0?o==null?void 0:o.headerLabel:"Field",headerIcon:i,footerIcon:i,footerMessage:(o==null?void 0:o.footerMessage)&&((a=o==null?void 0:o.footerMessage)==null?void 0:a.length)>0?o==null?void 0:o.footerMessage:"Error message",footerMessageType:"error",defaultValue:"error trigger string"}),r("br",{}),r(n,{modifiers:e,headerLabel:(o==null?void 0:o.headerLabel)&&((s=o==null?void 0:o.headerLabel)==null?void 0:s.length)>0?o==null?void 0:o.headerLabel:"Field",headerIcon:i,footerMessage:(o==null?void 0:o.footerMessage)&&((c=o==null?void 0:o.footerMessage)==null?void 0:c.length)>0?o==null?void 0:o.footerMessage:"Warning message",footerIcon:i,footerMessageType:"warning",defaultValue:"warning trigger string"})]})})]})},H=D.bind({});H.args={modifiers:[],headerLabel:"Email",headerIconOnRight:!1,placeholder:"Insert email here...",defaultValue:"",required:!0,readonly:!0,disabled:!1,footerMessage:"",footerIconOnRight:!1,footerMessageType:void 0};const Z=["Default"];export{H as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Input.stories.e952fef7.js.map
