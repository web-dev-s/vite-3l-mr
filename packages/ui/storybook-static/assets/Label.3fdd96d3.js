import{s as a}from"./Storybook.b497f08e.js";import{l as p}from"./index.81122112.js";import{j as l}from"./jsx-runtime.2eaea906.js";const s={h4:({theme:e,customStyled:i})=>{var r;return`
    font-family: ${e.typography.heading.fontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: ${e.typography.h4.fontSize}px;
    line-height: ${e.typography.h4.lineHeight}px;
    text-align: center;
    color: ${e.palette.textPrimary.main};
    max-width: ${(r=i==null?void 0:i.maxWidth)!=null?r:"initial"};
  `},mediumP:({theme:e,customStyled:i})=>{var r,t,n;return`
    font-family: ${e.typography.paragraph.fontFamily};
    font-size: ${e.typography.p2.fontSize}px;
    line-height: ${e.typography.p2.lineHeight}px;
    font-style: normal;
    font-weight: 400;
    text-align: ${(r=i==null?void 0:i.textAlign)!=null?r:"center"};
    color: ${(t=i==null?void 0:i.color)!=null?t:e.palette.textPrimary.main};
    max-width: ${(n=i==null?void 0:i.maxWidth)!=null?n:"initial"};
  `},noVerticalSpacing:()=>`
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  `,formFieldHeader:({theme:e,customStyled:i})=>{var r,t,n;return`
    min-height: 20px;
    margin: 0;
    padding: 0;
    font-family: ${e.typography.paragraph.fontFamily};
    font-size: ${e.typography.p3.fontSize}px;
    line-height: ${e.typography.p3.lineHeight}px;
    font-style: normal;
    font-weight: 400;
    text-align: ${(r=i==null?void 0:i.textAlign)!=null?r:"left"};
    color: ${(t=i==null?void 0:i.color)!=null?t:e.palette.textPrimary.main};
    text-decoration-color: ${(n=i==null?void 0:i.color)!=null?n:e.palette.textPrimary.main};
  `},success:({theme:e})=>`
    color: ${e.palette.success.main};
    text-decoration-color: ${e.palette.success.main};
  `,warning:({theme:e})=>`
    color: ${e.palette.warning.main};
    text-decoration-color: ${e.palette.warning.main};
  `,error:({theme:e})=>`
    color: ${e.palette.error.main};
    text-decoration-color: ${e.palette.error.main};
`,uppercased:()=>`
    text-transform: uppercase;
  `,underlinedEffect:({theme:e})=>`
    letter-spacing: 1px;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
    padding-bottom: 5px;
    color: ${e.palette.textPrimary.main};
    text-decoration-color: ${e.palette.textPrimary.main};
    transition: all 250ms ease;
    position: relative;
    &:hover {
      letter-spacing: 2px;
      font-weight: 600;
      text-decoration-line: underline;
			text-underline-offset: 3px;
			text-decoration-thickness: 3px;
      text-decoration-color: ${e.palette.textPrimary.main};
      color: ${e.palette.textPrimary.main};
      transition: all 750ms ease;
    }
  `,underlined:({theme:e})=>`
    text-decoration-line: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
    text-decoration-color: ${e.palette.textPrimary.main};
    color: ${e.palette.textPrimary.main};
  `},f=a(a.label``).attrs(({customStyled:e})=>({style:e}))`
  width: 100%;
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.palette.textPrimary.main};

  ${({customModifiers:e})=>p.applyStyleModifiers({...s,...e})};
`,o=e=>{const{label:i}=e;return i?l(f,{...e,children:i}):null};o.defaultProps={label:""};o.__docgenInfo={description:`Props Description @function Label @typedef props:LabelProps
@param label - text string to render **{  string }**
@param customStyled -  client side style prop {@linkcode CSSObject }
@param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
@param modifiers - accessing style preset defined in MODIFIERS_CONFIG **{ string[] | string }**
@returns {JSX} JSX`,methods:[],displayName:"Label",props:{label:{defaultValue:{value:"''",computed:!1},required:!1,tsType:{name:"string"},description:""},customStyled:{required:!1,tsType:{name:"CSSObject"},description:""},customModifiers:{required:!1,tsType:{name:"ModifiersConfig"},description:""},modifiers:{required:!1,tsType:{name:"union",raw:"string[] | string",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"}]},description:""}}};export{o as L};
//# sourceMappingURL=Label.3fdd96d3.js.map
