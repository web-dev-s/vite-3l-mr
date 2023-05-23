import{l as r,c as p}from"./index.81122112.js";import{s as o}from"./Storybook.b497f08e.js";import{a,j as e}from"./jsx-runtime.2eaea906.js";const n={large:({theme:t})=>`
    --comp-text-font-size: ${t.typography.h1.fontSize}px;
    --comp-text-line-height: ${t.typography.h1.lineHeight}px;
    --comp-text-striketrough-size: 8px;
  `,medium:({theme:t})=>`
    --comp-text-font-size: ${t.typography.h5.fontSize}px;
    --comp-text-line-height: ${t.typography.h5.lineHeight}px;
    --comp-text-striketrough-size: 3px;
  `,small:({theme:t})=>`
    --comp-text-font-size: ${t.typography.p2.fontSize}px;
    --comp-text-line-height: ${t.typography.p2.lineHeight}px;
    --comp-text-striketrough-size: 1px;
  `,v40:()=>`
    padding-top: clamp(40px, 0.9em, 1.2em);
    padding-bottom: clamp(40px, 0.9em, 1.2em);
  `,v20:()=>`
    padding-top: clamp(20px, 0.9em, 1.2em);
    padding-bottom: clamp(20px, 0.9em, 1.2em);
  `,bottom8:()=>"margin-bottom: 8px",bottom24:()=>"margin-bottom: 24px",striketrouhOnly:({theme:t})=>`
    --comp-striketrough-color: ${p(.8,t.palette.background.main)};
    -webkit-font-smoothing: pixel-antialiased;
    margin: 30px 0 15px 0;
    .text {
      display: none;
    }
  `},m=o(o.div``).attrs(({customStyled:t})=>({style:{...t}}))`
  --comp-text-color: ${({theme:t})=>t.palette.textPrimary.main};
  --comp-striketrough-color: ${({theme:t})=>t.palette.unfocused.main};
  --comp-text-font-size: ${({theme:t})=>t.typography.h5.fontSize}px;
  --comp-text-line-height: ${({theme:t})=>t.typography.h5.lineHeight}px;
  --comp-text-striketrough-size: 3px;
  --comp-text-font-family: ${({theme:t})=>t.typography.paragraph.fontFamily};

  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;

  .text {
    object-fit: contain;
    padding: 0 16px;
    font-family: var(--comp-text-font-family);
    font-style: normal;
    font-weight: 400;
    font-size: var(--comp-text-font-size);
    line-height: var(--comp-text-line-height);
    color: var(--comp-text-color);
  }
  .striketrough {
    flex: 1;
    width: 100%;
    height: 100%;
    position: relative;
    &:after {
      background-color: var(--comp-striketrough-color);
      height: var(--comp-text-striketrough-size);
      content: '';
      display: block;
      position: absolute;
      inset: 50% 0px 0px;
      width: 100%;
    }
  }
  ${({customModifiers:t})=>r.applyStyleModifiers({...n,...t})};
`,s=t=>{const{text:i}=t;return a(m,{...t,children:[e("div",{className:"striketrough"}),i&&e("span",{className:"text",children:i}),e("div",{className:"striketrough"})]})};s.__docgenInfo={description:`Description @function Delimiter @typedef props:DelimiterProps
@param text - delimiter text **{string}**
@param striketroughOnly - delimiter without text, only with a striketrough line **{boolean}**
@param customStyled -  client side style prop {@linkcode CSSObject }
@param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
@param modifiers - accessing style preset **{ 'large', 'medium', 'small', 'bottom8', 'v40', 'v20', 'bottom8', 'striketrouhOnly' }**
@returns {JSX} JSX
@example  <Delimiter modifiers={['verticalPadded20']} text={'texted delimiter'} />`,methods:[],displayName:"Delimiter"};export{s as D};
//# sourceMappingURL=Delimiter.530c85e5.js.map
