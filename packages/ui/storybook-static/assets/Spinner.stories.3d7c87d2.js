import{S as o,R as t,C as p}from"./Storybook.b497f08e.js";import{C as i}from"./Container.f6c04d3e.js";import{S as r}from"./Spinner.1d54eade.js";import{a,j as e}from"./jsx-runtime.2eaea906.js";import"./iframe.1b5ca124.js";import"./index.59aa917f.js";import"./index.81122112.js";import"./extends.842bf898.js";const v={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'
import { Row, StoryWrapper } from '../../helpers/Storybook'
import { Colors } from '../../theme'
import { Container } from '../utility/container/Container'
import { Spinner, SpinnerProps } from './Spinner'

export default {
  title: 'Primitives/Spinner',
  component: Spinner
} as Meta

const TemplateBasic: Story<SpinnerProps> = (args) => (
  <StoryWrapper>
    <Row title="Rings">
      <Container modifiers={['row', 'spacedEvenly']}>
        <Spinner {...args} type={'watch'} radius={45} />
        <Spinner
          {...args}
          type={'revolvingDot'}
          radius={5}
          width={100}
          height={100}
          wrapperStyle={{ transform: 'scale(0.55)' }}
        />

        <Spinner {...args} type={'tailsSpin'} radius={2} />
        <Spinner {...args} type={'oval'} />
        <Spinner {...args} type={'puff'} radius={6} />
      </Container>
    </Row>
    <Row title="Bars and Squares">
      <Container modifiers={['row', 'spacedEvenly']}>
        <Spinner {...args} type={'audio'} />
        <Spinner {...args} type={'bars'} />
        <Spinner {...args} type={'lineWave'} height={100} />
        <Spinner {...args} type={'rotatingSquare'} radius={6} />
      </Container>
    </Row>
    <Row title="Dots">
      <Container modifiers={['row', 'spacedEvenly']}>
        <Spinner {...args} type={'threeDots'} radius={6} />
        <Spinner {...args} type={'grid'} radius={6} />
        <Spinner
          {...args}
          type={'mutatingDots'}
          radius={10}
          width={100}
          height={100}
        />
        <Spinner {...args} type={'rings'} radius={6} />
      </Container>
    </Row>
    <Row title="Composed">
      <Container modifiers={['row', 'verticalSpaced', 'spacedEvenly']}>
        <Spinner {...args} type={'threeCircles'} radius={6} />
        <Spinner {...args} type={'circles'} radius={6} />
        <Spinner {...args} type={'circlesWithBar'} radius={6} />
        <Spinner {...args} type={'triangle'} radius={6} />
        <Spinner {...args} type={'ballTriangle'} radius={6} />
      </Container>
    </Row>
  </StoryWrapper>
)

export const BasicLoaders = TemplateBasic.bind({})
BasicLoaders.args = {
  width: 50,
  height: 50
}

const TemplateExtra: Story<SpinnerProps> = (args) => (
  <StoryWrapper>
    <Row title="Perpetuum">
      <Container modifiers={['row', 'spacedEvenly']}>
        <Spinner
          {...args}
          type={'cradleLoader'}
          wrapperStyle={{
            opacity: '0.6',
            backgroundColor: Colors.monorepo,
            borderRadius: '50%',
            padding: '100px'
          }}
        />
      </Container>
    </Row>
    <Row title="Hearts">
      <Container modifiers={['row', 'spacedEvenly']}>
        <Spinner {...args} type={'hearts'} height={50} width={150} />
      </Container>
    </Row>
    <Row title="Plane">
      <Container modifiers={['row', 'spacedEvenly']}>
        <Spinner
          {...args}
          type={'plane'}
          wrapperStyle={{ transform: 'scale(0.5)' }}
        />
      </Container>
    </Row>
  </StoryWrapper>
)

export const Extravagants = TemplateExtra.bind({})
Extravagants.args = {
  type: 'audio',
  width: 50,
  height: 50
}
`,locationsMap:{"basic-loaders":{startLoc:{col:43,line:12},endLoc:{col:1,line:63},startBody:{col:43,line:12},endBody:{col:1,line:63}},extravagants:{startLoc:{col:43,line:71},endLoc:{col:1,line:102},startBody:{col:43,line:71},endBody:{col:1,line:102}}}}},title:"Primitives/Spinner",component:r},s=n=>a(o,{children:[e(t,{title:"Rings",children:a(i,{modifiers:["row","spacedEvenly"],children:[e(r,{...n,type:"watch",radius:45}),e(r,{...n,type:"revolvingDot",radius:5,width:100,height:100,wrapperStyle:{transform:"scale(0.55)"}}),e(r,{...n,type:"tailsSpin",radius:2}),e(r,{...n,type:"oval"}),e(r,{...n,type:"puff",radius:6})]})}),e(t,{title:"Bars and Squares",children:a(i,{modifiers:["row","spacedEvenly"],children:[e(r,{...n,type:"audio"}),e(r,{...n,type:"bars"}),e(r,{...n,type:"lineWave",height:100}),e(r,{...n,type:"rotatingSquare",radius:6})]})}),e(t,{title:"Dots",children:a(i,{modifiers:["row","spacedEvenly"],children:[e(r,{...n,type:"threeDots",radius:6}),e(r,{...n,type:"grid",radius:6}),e(r,{...n,type:"mutatingDots",radius:10,width:100,height:100}),e(r,{...n,type:"rings",radius:6})]})}),e(t,{title:"Composed",children:a(i,{modifiers:["row","verticalSpaced","spacedEvenly"],children:[e(r,{...n,type:"threeCircles",radius:6}),e(r,{...n,type:"circles",radius:6}),e(r,{...n,type:"circlesWithBar",radius:6}),e(r,{...n,type:"triangle",radius:6}),e(r,{...n,type:"ballTriangle",radius:6})]})})]}),d=s.bind({});d.args={width:50,height:50};const l=n=>a(o,{children:[e(t,{title:"Perpetuum",children:e(i,{modifiers:["row","spacedEvenly"],children:e(r,{...n,type:"cradleLoader",wrapperStyle:{opacity:"0.6",backgroundColor:p.monorepo,borderRadius:"50%",padding:"100px"}})})}),e(t,{title:"Hearts",children:e(i,{modifiers:["row","spacedEvenly"],children:e(r,{...n,type:"hearts",height:50,width:150})})}),e(t,{title:"Plane",children:e(i,{modifiers:["row","spacedEvenly"],children:e(r,{...n,type:"plane",wrapperStyle:{transform:"scale(0.5)"}})})})]}),c=l.bind({});c.args={type:"audio",width:50,height:50};const C=["BasicLoaders","Extravagants"];export{d as BasicLoaders,c as Extravagants,C as __namedExportsOrder,v as default};
//# sourceMappingURL=Spinner.stories.3d7c87d2.js.map
