import{s as f,C as d,S as h}from"./Storybook.b497f08e.js";import{L as r}from"./LinkButton.9e8059da.js";import{L as g}from"./Label.3fdd96d3.js";import{C as s}from"./Container.f6c04d3e.js";import{r as y}from"./index.59aa917f.js";import{S as p}from"./wordmark.f36ee391.js";import{l as k}from"./index.81122112.js";import{a as c,j as e}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./extends.842bf898.js";const b={row:()=>`
 	 flex-direction: row;
  `},x=f(f.div``).attrs(({customStyled:n})=>({style:{...n}}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 10px;

  background-image: url(${n=>n.backgroundImage});
  background-color: ${d.transparent};
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .ly-header {
    margin-top: 41px;
    padding: 28px;
  }

  .ly-wordmark {
    width: 187px;
    height: 32px;
    align-self: center;
    color: ${({theme:n})=>{var t;return(t=n.palette.highlighted.main)!=null?t:d.white}};
    fill: ${({theme:n})=>{var t;return(t=n.palette.highlighted.main)!=null?t:d.white}};
  }

  .ly-main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .ly-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .ly-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 28px;
  }

  ${({customModifiers:n})=>k.applyStyleModifiers({...b,...n})};
`,i=n=>{const{header:t,asideLeft:o,children:u,asideRight:m,footer:a,backgroundImage:l}=n;return c(x,{...n,backgroundImage:l!=null?l:"fallback from context or receied url storage",children:[t&&e("div",{className:"ly-header",children:typeof t=="function"?t():e(p,{className:"ly-wordmark"})}),c("main",{className:"ly-main",children:[o&&e("aside",{className:"ly-aside-left",children:o}),e("div",{className:"ly-content",children:u}),m&&e("aside",{className:"ly-aside-right",children:m})]}),a&&e("div",{className:"ly-footer",children:y.exports.isValidElement(a)?a:e(p,{className:"ly-wordmark"})})]})};i.displayName="AuthLayout";i.__docgenInfo={description:`Props Description @function AuthLayout @typedef props:AuthLayoutProps
@param header - function element for header area {@linkcode ReactNode | boolean   }
@param asideLeft - React node for aside left area {@linkcode React.ReactNode }
@param asideRight - React node for aside right area {@linkcode React.ReactNode }
@param footer - React node for bottom right  {@linkcode React.ReactNode }
@param backgroundImage - Alternative for contexted background value  **{string}**
@param customStyled -  client side style prop {@linkcode CSSObject }
@param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
@param modifiers - accessing style preset defined  **{ 'row' }**
@returns {JSX} JSX`,methods:[],displayName:"AuthLayout"};const P={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'
import { StoryWrapper } from '../../../helpers/Storybook'
import { LinkButton } from '../../button/LinkButton'
import { Label } from '../../label/Label'

import { Container } from '../container/Container'
import { AuthLayout, AuthLayoutProps } from './AuthLayout'

export default {
  title: 'Utility/Layout',
  component: AuthLayout,
  argTypes: {
    modifiers: {
      options: ['row'],
      control: { type: 'check' }
    },
    backgroundImage: { control: { type: 'text' } },
    header: { table: { disable: true } },
    footer: { table: { disable: true } },
    asideLeft: { table: { disable: true } },
    asideRight: { table: { disable: true } },
    customModifiers: { table: { disable: true } },
    customStyled: { control: { type: 'object' } }
  }
} as Meta

const Template: Story<AuthLayoutProps> = ({
  modifiers = [],
  backgroundImage,
  customStyled
}) => {
  return (
    <StoryWrapper>
      <AuthLayout
        backgroundImage={
          backgroundImage && backgroundImage?.length > 0
            ? backgroundImage
            : undefined
        }
        modifiers={[...modifiers]}
        header={() => (
          <Container modifiers={['column', 'centeredContent']}>
            <Label modifiers={['h4']} label={'header component'} />
          </Container>
        )}
        footer={
          <Container modifiers={['column', 'centeredContent']}>
            <LinkButton
              prefixedText={'Some footer link?'}
              linkModifiers={['centeredContent']}
              onClick={() => console.log('register')}
              text={'href'}
            />
            <LinkButton
              prefixedText={'Other footer link'}
              linkModifiers={['centeredContent']}
              onClick={() => console.log('login')}
              text={'another href redirect'}
            />
          </Container>
        }
        asideLeft={
          <LinkButton
            linkModifiers={['centeredContent']}
            onClick={() => console.log('aside left')}
            text={'aside left'}
          />
        }
        asideRight={
          <LinkButton
            linkModifiers={['centeredContent']}
            onClick={() => console.log('aside left')}
            text={'aside right'}
          />
        }
        customStyled={customStyled}
      >
        <Container modifiers={['authPageForm', 'round20']}>
          {'Content'}
        </Container>
      </AuthLayout>
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  modifiers: [],
  backgroundImage:
    'https://media-exp1.licdn.com/dms/image/C4D1BAQG6fM9IYFHgBg/company-background_10000/0/1597968200266?e=2147483647&v=beta&t=rZqN8rLdii7rxwwf1fnkF-z-jcQzEPYZCbLP9k7VOk4'
}
`,locationsMap:{default:{startLoc:{col:41,line:27},endLoc:{col:1,line:84},startBody:{col:41,line:27},endBody:{col:1,line:84}}}}},title:"Utility/Layout",component:i,argTypes:{modifiers:{options:["row"],control:{type:"check"}},backgroundImage:{control:{type:"text"}},header:{table:{disable:!0}},footer:{table:{disable:!0}},asideLeft:{table:{disable:!0}},asideRight:{table:{disable:!0}},customModifiers:{table:{disable:!0}},customStyled:{control:{type:"object"}}}},C=({modifiers:n=[],backgroundImage:t,customStyled:o})=>e(h,{children:e(i,{backgroundImage:t&&(t==null?void 0:t.length)>0?t:void 0,modifiers:[...n],header:()=>e(s,{modifiers:["column","centeredContent"],children:e(g,{modifiers:["h4"],label:"header component"})}),footer:c(s,{modifiers:["column","centeredContent"],children:[e(r,{prefixedText:"Some footer link?",linkModifiers:["centeredContent"],onClick:()=>console.log("register"),text:"href"}),e(r,{prefixedText:"Other footer link",linkModifiers:["centeredContent"],onClick:()=>console.log("login"),text:"another href redirect"})]}),asideLeft:e(r,{linkModifiers:["centeredContent"],onClick:()=>console.log("aside left"),text:"aside left"}),asideRight:e(r,{linkModifiers:["centeredContent"],onClick:()=>console.log("aside left"),text:"aside right"}),customStyled:o,children:e(s,{modifiers:["authPageForm","round20"],children:"Content"})})}),L=C.bind({});L.args={modifiers:[],backgroundImage:"https://media-exp1.licdn.com/dms/image/C4D1BAQG6fM9IYFHgBg/company-background_10000/0/1597968200266?e=2147483647&v=beta&t=rZqN8rLdii7rxwwf1fnkF-z-jcQzEPYZCbLP9k7VOk4"};const T=["Default"];export{L as Default,T as __namedExportsOrder,P as default};
//# sourceMappingURL=AuthLayout.stories.a05d4734.js.map
