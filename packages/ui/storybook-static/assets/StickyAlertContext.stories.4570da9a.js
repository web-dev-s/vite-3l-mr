import{s as u,l as f,S as x,R as A}from"./Storybook.b497f08e.js";import{B as m}from"./Button.138387bf.js";import"./LinkButton.9e8059da.js";import{C}from"./Container.f6c04d3e.js";import{r as d}from"./index.59aa917f.js";import{S as g}from"./StickyAlert.c9894ab7.js";import{l as k}from"./index.81122112.js";import{j as s,a as p}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./Spinner.1d54eade.js";import"./objectWithoutPropertiesLoose.b60bc317.js";import"./extends.842bf898.js";import"./index.ecef2a71.js";import"./check.5c4d4aa8.js";import"./close.8612aa39.js";import"./information.c69ae277.js";const b=u(u.div``).attrs(({customStyled:t})=>({style:t}))`
  position: absolute;
  top: 10px;
  right: 0;

  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100vh;

  .alert-wrapper {
    position: relative;
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    width: auto;
  }

  ${({customModifiers:t})=>k.applyStyleModifiers({...t})};
`,y=d.exports.createContext({}),S=({children:t,...e})=>{const[o,n]=d.exports.useState([]),c=l=>{n(r=>r.filter(a=>a.id!==l))};return p(y.Provider,{value:{alerts:o,setAlerts:n},children:[t,(o==null?void 0:o.length)>0&&s(b,{...e,children:o.map(l=>s(h,{...l,removeAlert:c},l.id))})]})},h=d.exports.memo(t=>{const{id:e,children:o,onClose:n,removeAlert:c}=t;return s("div",{className:"alert-wrapper",children:s(g,{...f.exports.omit(t,["removeAlert"]),onClose:()=>{n==null||n(),c(e)},children:o})})},(t,e)=>t.id===e.id&&t.children===e.children);h.displayName="RenderAlert";function P(t){const{setAlerts:e}=d.exports.useContext(y),{autoDispose:o=!1,tickSecInterval:n=2}=t!=null?t:{},c=r=>{e==null||e(a=>{var i;return[...a,{...r,timeout:(i=r==null?void 0:r.timeout)!=null?i:5}]})},l=()=>{e==null||e(r=>[...r==null?void 0:r.slice(0,-1)])};return d.exports.useEffect(()=>{const r=o?setInterval(()=>{e(a=>a.filter(i=>Number(i==null?void 0:i.timeout)>0).map(i=>({...i,timeout:Number(i==null?void 0:i.timeout)-n})))},n*1e3):void 0;return()=>r&&clearInterval(r)},[]),{addAlert:c,clearLastAlert:l}}S.__docgenInfo={description:"",methods:[],displayName:"StickyAlertProvider"};const v=t=>{const{autoDispose:e,tickSecInterval:o,timeoutWarning:n,timeoutSuccess:c,timeoutError:l}=t,{addAlert:r}=P({autoDispose:e,tickSecInterval:o});return p(C,{modifiers:["column","v20"],children:[s(m,{modifiers:["primary","v24"],text:"Add warning alert",onClick:()=>r({id:Math.random().toString(),isVisible:!0,timeout:n!=null?n:3,children:"This is a warning alert",type:"warning"})}),s(m,{modifiers:["primary","v24"],text:"Add success alert",onClick:()=>r({id:Math.random().toString(),isVisible:!0,timeout:c!=null?c:5,children:"This is a success alert",type:"success"})}),s(m,{modifiers:["primary","v24"],text:"Add error alert",onClick:()=>r({id:Math.random().toString(),isVisible:!0,timeout:l!=null?l:8,children:"This is an error alert",type:"error"})})]})},z={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'
import { FC, PropsWithChildren } from 'react'
import { StoryWrapper, Row } from '../../helpers/Storybook'
import { Button } from '../button'
import { Container } from '../utility/container/Container'
import {
  StickyAlertProvider,
  StickyAlertProviderProps,
  useStickyAlertContext
} from './StickyAlertContext'

type AlertProviderChildProps = {
  autoDispose: boolean
  tickSecInterval: number
  timeoutWarning: number
  timeoutSuccess: number
  timeoutError: number
}

const AlertProviderChild: FC<AlertProviderChildProps> = (props) => {
  const {
    autoDispose,
    tickSecInterval,
    timeoutWarning,
    timeoutSuccess,
    timeoutError
  } = props
  const { addAlert } = useStickyAlertContext({
    autoDispose: autoDispose,
    tickSecInterval: tickSecInterval
  })

  return (
    <Container modifiers={['column', 'v20']}>
      <Button
        modifiers={['primary', 'v24']}
        text={'Add warning alert'}
        onClick={() =>
          addAlert({
            id: Math.random().toString(),
            isVisible: true,
            timeout: timeoutWarning ?? 3,
            children: 'This is a warning alert',
            type: 'warning'
          })
        }
      />
      <Button
        modifiers={['primary', 'v24']}
        text={'Add success alert'}
        onClick={() =>
          addAlert({
            id: Math.random().toString(),
            isVisible: true,
            timeout: timeoutSuccess ?? 5,
            children: 'This is a success alert',
            type: 'success'
          })
        }
      />
      <Button
        modifiers={['primary', 'v24']}
        text={'Add error alert'}
        onClick={() =>
          addAlert({
            id: Math.random().toString(),
            isVisible: true,
            timeout: timeoutError ?? 8,
            children: 'This is an error alert',
            type: 'error'
          })
        }
      />
    </Container>
  )
}

export default {
  title: 'Primitives/Alerts/StickyAlertContext',
  component: AlertProviderChild,
  argTypes: {
    autoDispose: { control: { type: 'boolean' } },
    timeoutWarning: { control: { type: 'number' } },
    timeoutSuccess: { control: { type: 'number' } },
    timeoutError: { control: { type: 'number' } },
    customStyled: { control: 'object' }
  }
} as Meta

const TemplateContext: Story<
  PropsWithChildren<AlertProviderChildProps & StickyAlertProviderProps>
> = ({ customStyled, ...rest }) => {
  return (
    <StoryWrapper>
      <StickyAlertProvider customStyled={customStyled}>
        <Row title="Alerts triggers">
          <AlertProviderChild {...rest} />
        </Row>
      </StickyAlertProvider>
    </StoryWrapper>
  )
}

export const Default = TemplateContext.bind({})
Default.args = {
  autoDispose: true,
  tickSecInterval: 2,
  timeoutWarning: 3,
  timeoutSuccess: 5,
  timeoutError: 8,
  customStyled: {}
}
`,locationsMap:{default:{startLoc:{col:4,line:92},endLoc:{col:1,line:102},startBody:{col:4,line:92},endBody:{col:1,line:102}}}}},title:"Primitives/Alerts/StickyAlertContext",component:v,argTypes:{autoDispose:{control:{type:"boolean"}},timeoutWarning:{control:{type:"number"}},timeoutSuccess:{control:{type:"number"}},timeoutError:{control:{type:"number"}},customStyled:{control:"object"}}},w=({customStyled:t,...e})=>s(x,{children:s(S,{customStyled:t,children:s(A,{title:"Alerts triggers",children:s(v,{...e})})})}),D=w.bind({});D.args={autoDispose:!0,tickSecInterval:2,timeoutWarning:3,timeoutSuccess:5,timeoutError:8,customStyled:{}};const G=["Default"];export{D as Default,G as __namedExportsOrder,z as default};
//# sourceMappingURL=StickyAlertContext.stories.4570da9a.js.map
