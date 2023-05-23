import { FC, PropsWithChildren } from 'react'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { StyledContainer } from './Container.style'

export type ContainerProps = {
  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
  modifiers?: string[] | string
}

/**
 * Description @function Container @typedef props:ContainerProps
 * @param customStyled - client side style prop {@linkcode CSSObject }
 * @param customModifiers - client modifiers config {@linkcode ModifiersConfig }
 * @param modifiers - accessing style preset defined **['authPageForm','row','column','centeredContent','spacedEvenly','inlineGap8','maxH45vh','round20','top8','v20','h20','fullWidth']**
 * @returns {JSX} JSX
 */
export const Container: FC<PropsWithChildren<ContainerProps>> = (props) => {
  const { children } = props

  return <StyledContainer {...props}>{children}</StyledContainer>
}
