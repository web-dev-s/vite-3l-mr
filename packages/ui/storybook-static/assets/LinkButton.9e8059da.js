import{s as o,C as i,l as m}from"./Storybook.b497f08e.js";import{r as y}from"./index.59aa917f.js";import{l as f}from"./index.81122112.js";import{a as d,j as a}from"./jsx-runtime.2eaea906.js";const k={reversed:()=>`
 	  flex-direction: row-reverse;
  `,centered:()=>`
  	justify-content: center;
    align-items: center;
    align-self: center;
	  text-align: center;
  `},v=o(o.a``).attrs(({customStyled:e})=>({style:e}))`
  --comp-font-family: ${({theme:e})=>e.typography.paragraph.fontFamily};
  --comp-text-color: ${({theme:e})=>{var t;return(t=e.palette.textPrimary.main)!=null?t:i.white}};
  --comp-hover-background: ${({theme:e})=>{var t;return(t=e.palette.textPrimary.main)!=null?t:i.white}};

  ${({size:e})=>e==="large"?`
        --comp-font-size: 24px;
        --comp-line-height: 36px;
      `:e==="normal"?`
        --comp-font-size: 18px;
        --comp-line-height: 24px;
      `:e==="small"?`
        --comp-font-size: 14px;
        --comp-line-height: 22px;
      `:`
        --comp-font-size: 12px;
        --comp-line-height: 18px;
      `};

  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  gap: 10px;
  margin: 5px;
  transition: all 250ms ease;
  white-space: pre;

  &[disabled] {
    cursor: initial;
    pointer-events: none;
    --comp-text-color: ${({theme:e})=>{var t;return(t=e.palette.textSecondary.main)!=null?t:i.white}};
  }

  .text {
    align-self: flex-start;
    text-align: left;

    font-family: var(--comp-font-family);
    font-size: var(--comp-font-size);
    line-height: var(--comp-line-height);

    text-decoration-line: underline;
    text-underline-offset: 3px;
    color: var(--comp-text-color);

    -webkit-font-smoothing: subpixel-antialiased;
    font-smooth: subpixel-antialiased;

    position: relative;
    &:hover {
      text-decoration: none;
      font-weight: 600;
      text-decoration-line: none;
      transition: all 250ms ease;
    }
    &:hover:before {
      position: absolute;
      content: '';
      bottom: 0px;
      left: 0;
      right: 0;
      height: 3px;
      width: 100%;
      background: var(--comp-hover-background);
    }
  }
  .child {
    align-self: center;
    display: flex;
    align-items: center;
    width: auto;
    color: var(--comp-text-color);
  }
  svg {
    width: 1.2em;
    height: 1.2em;
    color: var(--comp-text-color);
  }
  ${({customModifiers:e})=>f.applyStyleModifiers({...k,...e==null?void 0:e.link},"linkModifiers")};
`,b={reversed:()=>`
	   flex-direction: row-reverse;
	`,centered:()=>`
		justify-content: center;
		align-items: center;
		align-self: center;
		text-align: center;
  	`,stretched:()=>`
 	  width: 100%;
	  justify-content: center;
	  align-items: center;
	  align-self: center;
	  text-align: center;
	`},u=o(o.div``).attrs(({customStyled:e})=>({style:e}))`
  ${({size:e})=>e==="large"?`
        --comp-font-size: 24px;
        --comp-line-height: 36px;
      `:e==="normal"?`
        --comp-font-size: 18px;
        --comp-line-height: 24px;
      `:e==="small"?`
        --comp-font-size: 14px;
        --comp-line-height: 22px;
      `:`
        --comp-font-size: 12px;
        --comp-line-height: 18px;
      `};

  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: pre;

  .prefixed-text {
    -webkit-font-smoothing: antialiased;
    font-smooth: antialiased;

    font-family: ${({theme:e})=>e.typography.paragraph.fontFamily};
    font-size: var(--comp-font-size);
    line-height: var(--comp-line-height);
    color: ${({theme:e})=>{var t;return(t=e.palette.textSecondary.main)!=null?t:i.whiteEthereal}};
  }
  ${({customModifiers:e})=>f.applyStyleModifiers({...b,...e==null?void 0:e.container},"linkContainerModifiers")};
`,w=e=>{const{children:t,disabled:l,prefixedText:s,text:p,href:c,target:r,onClick:n}=e,h=y.exports.useCallback(g=>!l&&(n==null?void 0:n(g)),[l,n]),x=c?{href:c,target:r!=null?r:"_top"}:{onClick:h};return d(u,{...m.exports.omit(e,["onClick","linkModifiers"]),children:[s&&a("span",{className:"prefixed-text",children:s}),d(v,{...m.exports.omit(e,["onClick","linkContainerModifiers"]),...x,children:[p&&a("span",{className:"text",children:p}),t&&a("span",{className:"child",children:t})]})]})};w.__docgenInfo={description:`Props Description @function LinkButton @typedef props:LinkButtonProps
@param size - preset for size **{'small' | 'normal' | 'large' }**
@param disabled - disabled state **{ boolean }**
@param href url - anchor's href **{string }**
@param target forwarded target for href **{_'_self' | '_blank' | '_parent' | '_top' }**
@param text  - text **{ string }**
@param prefixedText - text to be rendered inlined before text **{string}**
@param onClick - event handler forwarded **{ (e) => void }**
@param customStyled -  client side style prop {@linkcode CSSObject }
@param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
@param linkModifiers - style preset **{ ['reversed', 'centered'] }**
@param linkContainerModifiers - accessing style preset **{ 'reversed', 'centered', 'stretched' }**
@returns {JSX} JSX`,methods:[],displayName:"LinkButton"};export{w as L};
//# sourceMappingURL=LinkButton.9e8059da.js.map
