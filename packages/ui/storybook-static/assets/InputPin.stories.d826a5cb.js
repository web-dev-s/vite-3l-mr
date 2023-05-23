import{s as k,C as i,l as fe,S as me,R as ge}from"./Storybook.b497f08e.js";import{r as f}from"./index.59aa917f.js";import{S as be}from"./trash-can.ed5a2740.js";import{C as xe}from"./Container.f6c04d3e.js";import{p as n}from"./index.597afd62.js";import{j as l,a as B}from"./jsx-runtime.2eaea906.js";import{S as he}from"./check.5c4d4aa8.js";import{S as ye}from"./close.8612aa39.js";import{S as ve}from"./phone.ae353880.js";import{L as we}from"./Label.3fdd96d3.js";import{l as Ce}from"./index.81122112.js";import"./iframe.1b5ca124.js";import"./extends.842bf898.js";var E=function(){return E=Object.assign||function(r){for(var o,t=1,a=arguments.length;t<a;t++){o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(r[s]=o[s])}return r},E.apply(this,arguments)};function Se(e,r){for(var o=0,t=r.length,a=e.length;o<t;o++,a++)e[a]=r[o];return e}function Z(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e}var $e=k.div(J||(J=Z([`
  display: flex;
  align-items: center;
`],[`
  display: flex;
  align-items: center;
`]))),J,u={type:"number",mask:!1,showState:!0,size:"md",autoFocus:!1,autoTab:!0,borderColor:"rgb(204,204,204)",errorBorderColor:"rgb(220,53,69)",focusBorderColor:"rgb(13,110,253)",validBorderColor:"rgb(25,135,84)",containerStyle:{},inputStyle:{},autoComplete:"off",placeholder:"o","aria-label":"Please enter pin code"},U=function(e){if(Array.isArray(e)){var r=new RegExp(e.join("|")).toString();return r.slice(1,r.length-1)}else if(typeof e=="string"){var r=new RegExp(e.split("").join("|")).toString();return r.slice(1,r.length-1)}else if(e instanceof RegExp){var r=e.toString();return r.slice(1,r.length-1)}else return},T=function(e){if(e===void 0)return null;var r=e.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);if(r)return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3])};var o=/^#?[a-fA-Z\d]{3}$/i.test(e),t=o?/^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(e):/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(o?t[1]+t[1]:t[1],16),g:parseInt(o?t[2]+t[2]:t[2],16),b:parseInt(o?t[3]+t[3]:t[3],16)}:null},Pe=k.input(X||(X=Z([`
  width: `,`;
  height: `,`;
  margin-right: 0.375rem;
  outline: transparent solid 2px;
  outline-offset: 2px;
  font-size: `,`;
  text-align: center;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  border-color: `,`;
  background-color: inherit;
  box-sizing: border-box;
  &:focus {
    border-color: `,`;
    box-shadow: `,` 0px 0px 0px 1px;
  }
  &:last-child {
    margin-right: 0;
  }
  `,`
  `,`
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`],[`
  width: `,`;
  height: `,`;
  margin-right: 0.375rem;
  outline: transparent solid 2px;
  outline-offset: 2px;
  font-size: `,`;
  text-align: center;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  border-color: `,`;
  background-color: inherit;
  box-sizing: border-box;
  &:focus {
    border-color: `,`;
    box-shadow: `,` 0px 0px 0px 1px;
  }
  &:last-child {
    margin-right: 0;
  }
  `,`
  `,`
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`])),function(e){var r=e.sizing;switch(r){case"xs":return"1.5rem";case"sm":return"2rem";case"md":return"2.5rem";case"lg":return"3rem"}},function(e){var r=e.sizing;switch(r){case"xs":return"1.5rem";case"sm":return"2rem";case"md":return"2.5rem";case"lg":return"3rem"}},function(e){var r=e.sizing;switch(r){case"xs":return"0.75rem";case"sm":return"0.875rem";case"md":return"1rem";case"lg":return"1.125rem"}},function(e){var r=e.borderColor,o=T(r);return o?"rgb(".concat(o.r,",").concat(o.g,",").concat(o.b,")"):u.borderColor},function(e){var r=e.focusBorderColor,o=T(r);return o?"rgb(".concat(o.r,",").concat(o.g,",").concat(o.b,")"):u.focusBorderColor},function(e){var r=e.focusBorderColor;return r},function(e){var r=e.completed,o=e.showState,t=e.validBorderColor,a=T(t);return r&&o?`&:valid {
    border-color: `.concat(a?"rgb(".concat(a.r,",").concat(a.g,",").concat(a.b,")"):u.validBorderColor,`;
    box-shadow: `).concat(a?"rgb(".concat(a.r,",").concat(a.g,",").concat(a.b,")"):u.validBorderColor,` 0px 0px 0px 1px;
    background-color: `).concat(a?"rgba(".concat(a.r,",").concat(a.g,",").concat(a.b,",0.1)"):u.validBorderColor.replace("rgb","rgba").replace(")",",0.1)"),`;
  }`):""},function(e){var r=e.showState,o=e.errorBorderColor,t=T(o);return r?`&:invalid {
    border-color: `.concat(t?"rgb(".concat(t.r,",").concat(t.g,",").concat(t.b,")"):u.errorBorderColor,`;
    box-shadow: `).concat(t?"rgb(".concat(t.r,",").concat(t.g,",").concat(t.b,")"):u.errorBorderColor,` 0px 0px 0px 1px;
    background-color: `).concat(t?"rgba(".concat(t.r,",").concat(t.g,",").concat(t.b,",0.1)"):u.errorBorderColor.replace("rgb","rgba").replace(")",",0.1)"),`;
  }`):""}),X,Ie={index:n.exports.number,values:n.exports.arrayOf(n.exports.string),onChange:n.exports.func},Be=function(e,r){return!e||r.length>2?r.split(""):r===""?[]:e[0]===r[0]?[r[1]]:[r[0]]},V=function(e){var r=e.index,o=e.value,t=e.values,a=e.completed,s=e.type,c=e.mask,m=e.size,g=e.validate,w=e.format,b=e.showState,x=e.autoFocus,C=e.autoTab,j=e["aria-describedby"],z=e["aria-label"],M=e["aria-labelledby"],R=e.autoComplete,p=e.disabled,D=e.inputMode,h=e.id,Q=e.name,q=e.placeholder,L=e.required,Y=e.inputClassName,_=e.inputStyle,ee=e.borderColor,re=e.errorBorderColor,oe=e.focusBorderColor,te=e.validBorderColor,A=e.onChange,G=e.onBlur,W=e.onFocus,H=e.onKeyDown,S=f.exports.useRef(),ne=function(d){var $=t[r],ce=d.target.value,P=Se([],t),F=Be($,ce).slice(0,P.length-r),pe=s==="number"?/(^$)|(\d+)/:/.*/,de=F.every(function(v){return pe.test(v)});if(!!A){var y=w?F.map(function(v){return w(v)}):F;if(y.length?y.forEach(function(v,ue){return P[r+ue]=v}):P[r]="",!!de){A(y,r,P);for(var I=S.current,K=0;K<y.length;K++)I=I.nextElementSibling;y&&C&&I instanceof HTMLInputElement&&I.focus()}}},ae=function(d){if(d.key==="Backspace"&&C&&t[r]===""&&r>0){var $=S.current.previousElementSibling;$ instanceof HTMLInputElement&&$.focus()}H&&H(d)},ie=function(d){d.target.placeholder="",W&&W(d)},se=function(d){d.target.placeholder=q,G&&G(d)},le=f.exports.useMemo(function(){return U(g)},[g]);return f.exports.useEffect(function(){x&&r===0&&S.current.focus()},[x,r]),l(Pe,{ref:S,type:c?"password":"text","aria-describedby":j,"aria-disabled":p,"aria-label":z,"aria-labelledby":M,"aria-required":L,autoComplete:R,disabled:p,name:Q,id:h&&"".concat(h,"-").concat(r),className:Y,inputMode:D||(s==="number"?"numeric":"text"),required:L,placeholder:q,pattern:le,value:o,onChange:ne,onKeyDown:ae,onFocus:ie,onBlur:se,completed:a,showState:b,sizing:m,style:_,borderColor:ee,errorBorderColor:re,focusBorderColor:oe,validBorderColor:te,"data-index":r})};V.displayName="PinInputField";V.propTypes=Ie;var Te={values:n.exports.arrayOf(n.exports.string).isRequired,type:n.exports.oneOf(["number","text"]),mask:n.exports.bool,validate:n.exports.oneOfType([n.exports.string,n.exports.arrayOf(n.exports.string),n.exports.instanceOf(RegExp)]),format:n.exports.func,showState:n.exports.bool,size:n.exports.oneOf(["xs","sm","md","lg"]),autoFocus:n.exports.bool,autoTab:n.exports.bool,containerClassName:n.exports.string,containerStyle:n.exports.object,inputClassName:n.exports.string,inputStyle:n.exports.object,onChange:n.exports.func},O=function(e){var r=f.exports.useMemo(function(){return e.values.every(function(o){return o})},[e.values]);return r&&e.onComplete&&(e.validate?e.values.every(function(o){return new RegExp(U(e.validate)).test(o)})&&e.onComplete(e.values):e.onComplete(e.values)),l($e,{className:e.containerClassName,style:e.containerStyle,children:e.values.map(function(o,t){return l(V,{...E({key:e.id?"".concat(e.id,"-").concat(t):t,index:t,value:o,completed:r},e)})})})};O.displayName="PinInput";O.propTypes=Te;O.defaultProps=u;n.exports.number,n.exports.oneOfType([n.exports.string,n.exports.arrayOf(n.exports.string)]),n.exports.oneOf(["number","text"]),n.exports.bool,n.exports.oneOfType([n.exports.string,n.exports.arrayOf(n.exports.string),n.exports.instanceOf(RegExp)]),n.exports.func,n.exports.bool,n.exports.oneOf(["xs","sm","md","lg"]),n.exports.bool,n.exports.bool,n.exports.object,n.exports.object,n.exports.func;const ke={success:({theme:e})=>{var r;return`
    --comp-border-color: ${(r=e.palette.success.main)!=null?r:i.success};
  `},error:({theme:e})=>{var r;return`
    --comp-border-color: ${(r=e.palette.error.main)!=null?r:i.error};
  `},warning:({theme:e})=>{var r;return`
    --comp-border-color: ${(r=e.palette.warning.main)!=null?r:i.error};
  `},stretched:()=>`
    width: calc(100% - 24px);
    justify-content: center;
    align-items: flex-start;

    .pin-component {
      width: 90%;
    }
  `,withValidationButtons:({footerMessage:e,theme:r})=>{var o,t;return`
    .validation-button {
      position: absolute;
      top: 25px;
      right: -12px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${e?(o=r.palette.error.main)!=null?o:i.error:(t=r.palette.success.main)!=null?t:i.success};
    }
    .validation-button-svg {
      width: 24px;
      height: 24px;
    }
  `}},Oe=k(k.div``).attrs(({customStyled:e})=>({style:e}))`
  --comp-digit-border-color: initial;
  --comp-footer-flex-direction: row;
  --comp-footer-flex-justify: flex-start;

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
  ${({footerIconOnRight:e})=>e?`
          --comp-footer-flex-direction:row-reverse;
          --comp-footer-flex-justify:flex-end;
          --comp-footer-icon-padding: 0 0 0 5px;
        `:""}
  ${({theme:e,footerMessage:r,footerMessageType:o})=>r&&o==="error"?`
          --comp-border-color: ${e.palette.error.main};
          --comp-footer-color: ${e.palette.error.main};
          --comp-message-color: ${e.palette.error.main};
        `:""}
  ${({theme:e,footerMessage:r,footerMessageType:o})=>r&&o==="warning"?`
          --comp-border-color: ${e.palette.warning.main};
          --comp-footer-color: ${e.palette.warning.main};
          --comp-message-color: ${e.palette.warning.main};
        `:""}

  position: relative;
  width: auto;
  height: 100%;
  margin: 0;
  padding: 0;
  background: ${i.transparent};

  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: var(--comp-text-color);

  .pin-component {
    position: relative;
    display: flex;
    align-self: flex-start;
    justify-content: space-between;
    align-items: center;
    width: auto;

    margin: 0;

    background: ${i.transparent};
    height: 56px;
    padding: 8px 20px;

    border: 1px solid var(--comp-border-color);
    border-radius: 2px;
  }
  .phone-icon {
    padding-left: 6px;
    align-self: center;
    width: ${({theme:e})=>e.typography.h4.fontSize}px;
    height: ${({theme:e})=>e.typography.h4.fontSize}px;
    color: var(--comp-border-color);
  }

  .prefix {
    font-family: ${({theme:e})=>e.typography.paragraph.fontFamily};
    font-size: ${({theme:e})=>e.typography.p1.fontSize}px;
    line-height: ${({theme:e})=>e.typography.p1.lineHeight}px;
    font-style: normal;
    font-weight: 400;
    color: ${i.white};
    align-self: center;
    white-space: nowrap;
  }

  .pin-container {
    background: ${i.transparent};
  }

  .input {
    border: none;
    border-bottom: 2px solid
      ${({theme:e})=>{var r;return(r=e.palette.textSecondary.main)!=null?r:i.whiteEthereal}};
    border-radius: 0;
    font-family: ${({theme:e})=>e.typography.heading.fontFamily};
    font-style: normal;
    font-weight: 500;
    font-size: ${({theme:e})=>e.typography.h4.fontSize}px;
    line-height: ${({theme:e})=>e.typography.h4.lineHeight}px;
    color: inherit;
    text-align: center;
  }

  .input:invalid {
    outline: none;
    box-shadow: none;
    border: none;
    background-color: ${i.transparent};
    border-bottom: 2px solid ${i.whiteGhost};
  }

  .input:valid {
    outline: none;
    box-shadow: none;
    border: none;
    background-color: ${i.transparent};
    border-bottom: 2px solid ${i.whiteGhost};
  }

  .input:focus {
    background: ${i.transparent};
    background-color: ${i.transparent};
    outline: none;
    box-shadow: none;
    border: none;
    border-bottom: 2px solid
      ${({theme:e})=>{var r;return(r=e.palette.textPrimary.main)!=null?r:i.white}};
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
  ${({theme:e,required:r})=>{var o;return r===!0?`
          &:before {
            content: '*';
            color: ${(o=e.palette.error.main)!=null?o:i.error};
            font-weight: 900;
            font-family: inherit;
            font-size: 22px;
            position: absolute;
            top: 0;
            right: -20px;
          }
        `:""}}
  ${({customModifiers:e})=>Ce.applyStyleModifiers({...ke,...e})};
`,N=f.exports.forwardRef((e,r)=>{const{modifiers:o,prefix:t,charactersNo:a,onPinChanged:s,footerMessage:c,footerMessageType:m,footerIcon:g,footerIconOnRight:w}=e,[b,x]=f.exports.useState([...new Array(a!=null?a:5).map(()=>"")]),C=(p,D,h)=>{x([...h]),s==null||s({value:h.join("")})},j=p=>{},z=m==="error"?ye:he,M=(o==null?void 0:o.includes("withValidationButtons"))&&((o==null?void 0:o.includes("error"))&&c&&(c==null?void 0:c.length)>0||(o==null?void 0:o.includes("success"))),R=f.exports.useCallback(()=>{c&&(x([...new Array(a!=null?a:5).map(()=>"")]),s==null||s({value:""}))},[a,c,s]);return B(Oe,{...fe.exports.omit(e,["onPinChanged","onPinCompleted","charactersNo","onComplete"]),children:[B("div",{className:"pin-component",ref:r,children:[l(ve,{className:"phone-icon"}),t&&B("span",{className:"prefix",children:[t," - "]}),l(O,{placeholder:"",values:b==null?void 0:b.map(p=>p!=null?p:""),type:"number",mask:!1,size:"lg",validate:new RegExp(/^[a-zA-Z0-9]*$/),format:p=>p.toUpperCase(),showState:!0,autoFocus:!0,autoTab:!0,containerClassName:"pin-container",inputClassName:"input",borderColor:i.transparent,errorBorderColor:i.error,onChange:C,onComplete:j}),M&&l("button",{type:"button",className:"validation-button",onClick:R,children:l(z,{className:"validation-button-svg"})})]}),(c||w)&&B("div",{className:"footer",children:[g&&l(g,{className:"footer-icon"}),c&&l(we,{label:c,modifiers:["formFieldHeader",String(m==="error"&&"error"),String(m==="warning"&&"warning")]})]})]})});N.displayName="InputPin";N.__docgenInfo={description:`Props Description@function InputPin @typedef props:InputPinProps
@param prefix -prefix string in front of code **{ string }**
@param charactersNo -  max number of characters **{ number }**
@param onPinChanged - event handler adapted **{ (sending: { value: string }) => void;}**
@param onPinCompleted - event handler for completion **{ (pin: string[] ) => void;}**

@param footerMessage - validation message  **{ string }**
@param footerIcon - icon to be rendered in footer mesage **{@linkcode React.FunctionComponent<React.SVGProps<SVGSVGElement>>}**
@param footerIconOnRight - switching positions of message with icon in footer **{ boolean }**
@param footerMessageType - color presets for footer elements **{'warning' | 'error'}**

@param customStyled -  client side style particularities {@linkcode CSSObject }
@param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
@param modifiers - accessing style preset **{ 'stretched', 'success', 'error', 'withValidationButtons' }**
@param rest - inherits ComponentProps<'div'> {@linkcode ComponentProps<PinInput> }
@returns {JSX} JSX`,methods:[],displayName:"InputPin"};const Ke={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'

import { Row, StoryWrapper } from '../../helpers/Storybook'

import { TrashCan } from '../../icons'
import { Container } from '../utility/container/Container'
import { InputPin, InputPinProps } from './InputPin'

export default {
  title: 'Primitives/Inputs/InputPin',
  component: InputPin,
  argTypes: {
    modifiers: {
      options: ['stretched', 'success', 'error', 'withValidationButtons'],
      control: { type: 'check' }
    },
    prefix: { control: { type: 'text' } },
    charactersNo: { control: { type: 'number' } },
    footerMessage: { control: { type: 'text' } },
    footerMessageType: {
      options: ['error', 'warning'],
      control: { type: 'radio' }
    },
    required: { control: 'boolean' },
    customStyled: { control: { type: 'object' } },
    footerIcon: { table: { disable: true } },
    onChange: { table: { disable: true } }
  }
} as Meta

const Template: Story<InputPinProps> = ({ modifiers = [], ...args }) => {
  return (
    <StoryWrapper>
      <Row title="InputPin Primitive">
        <Container modifiers={['row', 'spaced20', 'fullWidth']}>
          <InputPin
            modifiers={['withValidationButtons', ...modifiers]}
            {...args}
            footerIcon={args?.footerMessage ? TrashCan : undefined}
          />
        </Container>
      </Row>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: [],
  prefix: '',
  charactersNo: 5,
  footerMessage: '',
  footerIconOnRight: false,
  footerMessageType: undefined,
  required: false,
  customStyled: {}
}
`,locationsMap:{default:{startLoc:{col:39,line:31},endLoc:{col:1,line:45},startBody:{col:39,line:31},endBody:{col:1,line:45}}}}},title:"Primitives/Inputs/InputPin",component:N,argTypes:{modifiers:{options:["stretched","success","error","withValidationButtons"],control:{type:"check"}},prefix:{control:{type:"text"}},charactersNo:{control:{type:"number"}},footerMessage:{control:{type:"text"}},footerMessageType:{options:["error","warning"],control:{type:"radio"}},required:{control:"boolean"},customStyled:{control:{type:"object"}},footerIcon:{table:{disable:!0}},onChange:{table:{disable:!0}}}},Ne=({modifiers:e=[],...r})=>l(me,{children:l(ge,{title:"InputPin Primitive",children:l(xe,{modifiers:["row","spaced20","fullWidth"],children:l(N,{modifiers:["withValidationButtons",...e],...r,footerIcon:r!=null&&r.footerMessage?be:void 0})})})}),je=Ne.bind({});je.args={modifiers:[],prefix:"",charactersNo:5,footerMessage:"",footerIconOnRight:!1,footerMessageType:void 0,required:!1,customStyled:{}};const Je=["Default"];export{je as Default,Je as __namedExportsOrder,Ke as default};
//# sourceMappingURL=InputPin.stories.d826a5cb.js.map
