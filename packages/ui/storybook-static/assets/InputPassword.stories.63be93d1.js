import{s as y,C as I,l as q,S as W,R as x}from"./Storybook.b497f08e.js";import{r as u}from"./index.59aa917f.js";import{S as l}from"./trash-can.ed5a2740.js";import{C as v}from"./Container.f6c04d3e.js";import{S as G}from"./eye-crossed.0359fead.js";import{S as H}from"./eye.ee427fe5.js";import{L as P}from"./Label.3fdd96d3.js";import{l as D}from"./index.81122112.js";import{a as s,j as r}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./extends.842bf898.js";const _={success:({theme:e})=>`
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
  `},B=y(y.div``).attrs(({customStyled:e})=>({style:e}))`
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
  background: ${I.transparent};

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
    background-color: ${I.transparent};

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

  .showhide-button {
    background: none;
    outline: none;
    border: none;
    border-width: 0px; //for cases when is previous set border-bottom...
    margin-right: 16px;
    color: var(--comp-text-color);
  }

  .showhide-button-svg {
    width: 1.2em;
    height: 1.2em;
    color: inherit;

    &[svg-hide='true'] {
      color: var(--comp-placeholder-color);
    }
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

  ${({customModifiers:e})=>D.applyStyleModifiers({..._,...e})};
`,n=u.exports.forwardRef((e,o)=>{const{headerLabel:t,headerIcon:a,headerIconOnRight:d,placeholder:c,defaultValue:p,disabled:M,readonly:C,name:S,autoComplete:$,charactersNo:L,onChange:m,footerMessage:f,footerMessageType:b,footerIcon:g,footerIconOnRight:R,...O}=e,[T,k]=u.exports.useState(p!=null?p:""),[h,V]=u.exports.useState(!1),j=i=>{k(i.target.value),m==null||m(i)},N=h?G:H,F=Object.entries(e).reduce((i,[w,E])=>Object.assign(i,{[w]:w==="headerIconOnRight"?d:E}),{});return s(B,{...F,children:[(t||a)&&s("div",{className:"header",children:[t&&r(P,{label:t,modifiers:["formFieldHeader"]}),a&&r(a,{className:"header-icon"})]}),s("div",{className:"input-container",children:[r("input",{ref:o,placeholder:c,name:S,type:h?"text":"password",autoComplete:$,readOnly:C,disabled:M,value:T,maxLength:L,onChange:j,...q.exports.omit(O,["customStyled","customModifiers"])}),r("button",{type:"button",className:"showhide-button",onClick:()=>V(i=>!i),children:r(N,{"svg-hide":h?"false":"true",className:"showhide-button-svg"})})]}),(f||R)&&s("div",{className:"footer",children:[g&&r(g,{className:"footer-icon"}),f&&r(P,{label:f,modifiers:["formFieldHeader",String(b==="error"&&"error"),String(b==="warning"&&"warning")]})]})]})});n.displayName="InputPassword";n.defaultProps={name:"input-password-element",placeholder:"Insert password here..."};n.__docgenInfo={description:`Props Description @function InputPassword @typedef props:InputPasswordProps
@param headerLabel  - label on top of field **{ string }**
@param headerIcon - icon to be rendered in field header **{@linkcode React.FC<SVGProps<SVGElement>> }**
@param headerIconOnRight - switching positions of label with icon in header **{ boolean }**

@param name - name attribute **{string}**
@param placeholder - placeholder **{ string }**
@param charactersNo -  max number of characters **{ number }**
@param disabled - disabled state **{@linkcode ComponentProps<'input'>['disabled'] }**
@param readonly - readonly state **{@linkcode ComponentProps<'input'>['readOnly'] }**
@param autoComplete - forwarded attribute {@linkcode ComponentProps<'input'>['autoComplete'];}
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
@returns {JSX} JSX`,methods:[],displayName:"InputPassword",props:{name:{defaultValue:{value:"'input-password-element'",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Insert password here...'",computed:!1},required:!1}}};const ne={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../helpers/Storybook'

import { TrashCan } from '../../icons'
import { Container } from '../utility/container/Container'
import { InputPassword, InputPasswordProps } from './InputPassword'

export default {
  title: 'Primitives/Inputs/InputPassword',
  component: InputPassword,
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

const Template: Story<InputPasswordProps> = ({ modifiers = [], ...args }) => {
  return (
    <StoryWrapper>
      <Row title="InputPassword Primitive">
        <Container modifiers={['row', 'h20']}>
          <InputPassword
            modifiers={modifiers}
            {...args}
            headerIcon={TrashCan}
            footerIcon={args?.footerMessage ? TrashCan : undefined}
          />
        </Container>
      </Row>
      <br />
      <br />
      <Row title="Input Primitive State Variants">
        <Container modifiers={['row', 'inlineGap8', 'h20', 'fullWidth']}>
          <InputPassword
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
            footerIconOnRight
          />
          <br />
          <InputPassword
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
            footerIconOnRight
          />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: [],
  headerLabel: 'Password',
  headerIconOnRight: false,
  placeholder: 'Insert password here...',
  defaultValue: '',
  required: true,
  readonly: true,
  disabled: false,
  footerMessage: '',
  footerIconOnRight: false,
  footerMessageType: undefined
}
`,locationsMap:{default:{startLoc:{col:44,line:34},endLoc:{col:1,line:90},startBody:{col:44,line:34},endBody:{col:1,line:90}}}}},title:"Primitives/Inputs/InputPassword",component:n,argTypes:{modifiers:{options:["success","error","warning","stretched","top16"],control:{type:"check"}},headerLabel:{control:{type:"text"}},headerIcon:{table:{disable:!0}},headerIconOnRight:{control:"boolean"},footerMessage:{control:{type:"text"}},customStyled:{control:{type:"object"}},required:{control:"boolean"},readonly:{control:"boolean"},disabled:{control:"boolean"},footerIcon:{table:{disable:!0}},onChange:{table:{disable:!0}},minLength:{table:{disable:!0}},min:{table:{disable:!0}},pattern:{table:{disable:!0}},defaultValue:{table:{disable:!0}}}},z=({modifiers:e=[],...o})=>{var t,a,d,c;return s(W,{children:[r(x,{title:"InputPassword Primitive",children:r(v,{modifiers:["row","h20"],children:r(n,{modifiers:e,...o,headerIcon:l,footerIcon:o!=null&&o.footerMessage?l:void 0})})}),r("br",{}),r("br",{}),r(x,{title:"Input Primitive State Variants",children:s(v,{modifiers:["row","inlineGap8","h20","fullWidth"],children:[r(n,{modifiers:e,headerLabel:(o==null?void 0:o.headerLabel)&&((t=o==null?void 0:o.headerLabel)==null?void 0:t.length)>0?o==null?void 0:o.headerLabel:"Field",headerIcon:l,footerIcon:l,footerMessage:(o==null?void 0:o.footerMessage)&&((a=o==null?void 0:o.footerMessage)==null?void 0:a.length)>0?o==null?void 0:o.footerMessage:"Error message",footerMessageType:"error",footerIconOnRight:!0}),r("br",{}),r(n,{modifiers:e,headerLabel:(o==null?void 0:o.headerLabel)&&((d=o==null?void 0:o.headerLabel)==null?void 0:d.length)>0?o==null?void 0:o.headerLabel:"Field",headerIcon:l,footerMessage:(o==null?void 0:o.footerMessage)&&((c=o==null?void 0:o.footerMessage)==null?void 0:c.length)>0?o==null?void 0:o.footerMessage:"Warning message",footerIcon:l,footerMessageType:"warning",footerIconOnRight:!0})]})})]})},J=z.bind({});J.args={modifiers:[],headerLabel:"Password",headerIconOnRight:!1,placeholder:"Insert password here...",defaultValue:"",required:!0,readonly:!0,disabled:!1,footerMessage:"",footerIconOnRight:!1,footerMessageType:void 0};const ae=["Default"];export{J as Default,ae as __namedExportsOrder,ne as default};
//# sourceMappingURL=InputPassword.stories.63be93d1.js.map
