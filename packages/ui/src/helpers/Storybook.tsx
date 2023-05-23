import { FC, PropsWithChildren } from 'react'
import { ThemeProvider } from '../theme'
import {
  ElementWrapperContainer,
  RowContainer,
  StoryWrapperContainer
} from './Storybook.style'

export type StoryWrapperProps = PropsWithChildren<{ mode?: 'light' | 'dark' }>
export const StoryWrapper: FC<StoryWrapperProps> = ({ children, mode }) => (
  <ThemeProvider mode={mode}>
    <StoryWrapperContainer>{children}</StoryWrapperContainer>
  </ThemeProvider>
)

export type RowProps = PropsWithChildren<{ title?: string }>
export const Row: FC<RowProps> = ({ children, title }) => (
  <>
    <RowContainer>
      {title && <p className={'title'}>{title}</p>}
      <div className={'childrenContainer'}>{children}</div>
    </RowContainer>
  </>
)

export type ElementWrapperProps = PropsWithChildren<{
  title?: string
  description?: string
}>
export const ElementWrapper: FC<ElementWrapperProps> = ({
  children,
  title,
  description
}) => (
  <ElementWrapperContainer>
    {title && <p className={'title'}>{title}</p>}
    {children}
    {description && (
      <p className={'description'}>
        <small>{description}</small>
      </p>
    )}
  </ElementWrapperContainer>
)
