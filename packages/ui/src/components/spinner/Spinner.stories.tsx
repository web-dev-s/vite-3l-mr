import { Meta, Story } from '@storybook/react'
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
