import { Meta, Story } from '@storybook/react'
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
