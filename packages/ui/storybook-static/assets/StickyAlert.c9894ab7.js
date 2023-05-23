import{s as a,C as i,l as d}from"./Storybook.b497f08e.js";import"./index.59aa917f.js";import{S as m}from"./check.5c4d4aa8.js";import{S as f}from"./close.8612aa39.js";import{S as u}from"./information.c69ae277.js";import{l as g}from"./index.81122112.js";import{j as r,a as h}from"./jsx-runtime.2eaea906.js";const y=a(a.div``).attrs(({customStyled:e})=>({style:e}))`
  margin-right: 20px;
  max-width: 90vw;
  align-self: flex-end;
  background: ${({theme:e,type:t})=>{var n;return t?(n=e.palette)==null?void 0:n[t].main:i.transparent}};
  color: ${({theme:e})=>e.palette.textPrimary.main};
  border-radius: 4px;

  .button {
    outline: none;
    border: none;
    background: none;
    background-color: ${i.transparent};
    color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 90vw;
    padding: 16px;
    border-radius: 4px;

    font-style: normal;
    font-weight: 400;
    font-family: ${({theme:e})=>e.typography.paragraph.fontFamily};
    font-size: ${({theme:e})=>e.typography.p2.fontSize}px;
    line-height: ${({theme:e})=>e.typography.p2.lineHeight}px;
  }

  .left-icon-container {
    height: 22px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-icon {
    align-self: center;
    color: inherit;
    height: 20px;
    width: 20px;
    padding-right: 20.25px;
  }
  .content {
    max-width: 90vw;
    overflow-wrap: break-word;
    width: calc(100% - 30px);
    height: auto;
    text-align: left;
  }
  animation: run 1s linear normal;
  transition: all 750ms ease;

  @keyframes run {
    0% {
      margin-right: -200px;
    }
    100% {
      margin-right: 20px;
    }
  }

  ${({customModifiers:e})=>g.applyStyleModifiers({...e})};
`,l=e=>{const{children:t,type:n,ornament:s,isVisible:c,onClose:p}=e,o=s||{warning:u,success:m,error:f}[n]||null;return c?r(y,{...d.exports.omit(e,["onClose","children"]),children:h("button",{className:"button",type:"button",onClick:p,children:[o&&r("span",{className:"left-icon-container",children:r(o,{className:"left-icon"})}),r("span",{className:"content",children:t})]})}):null};l.defaultProps={type:"warning",isVisible:!0};l.__docgenInfo={description:`Props Description @function StickyAlert @typedef props:StickyAlertProps
@param id - id for being able to remove the alert **{string}**
@param timeout - seconds counter for dismiss alert **{number}**
@param children - alert body passed as childen for being able to add more ornaments or styling **{@linkcode JSX.Element}**
@param isVisible - state of alert render **{boolean}**
@param type - preset for alert style **{'warning' | 'success' | 'error'}**
@param ornament - replacement for the icon on the left **{@linkcode FC<React.SVGProps<SVGSVGElement>>}**
@param customStyled - client side style prop **{@linkcode CSSObject}**
@param customModifiers - client modifiers config **{@linkcode ModifiersConfig}**
@param onClose - callback to close the alert **{@linkcode () => void}**
@returns {JSX} JSX`,methods:[],displayName:"StickyAlert",props:{type:{defaultValue:{value:"'warning'",computed:!1},required:!1},isVisible:{defaultValue:{value:"true",computed:!1},required:!1}}};export{l as S};
//# sourceMappingURL=StickyAlert.c9894ab7.js.map
