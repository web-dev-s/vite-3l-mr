import styled from 'styled-components'

import { ElementWrapperProps, RowProps, StoryWrapperProps } from './Storybook'

export const StoryWrapperContainer = styled.div<StoryWrapperProps>`
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

export const RowContainer = styled.div<RowProps>`
  margin-bottom: 40px;

  .title {
    font-size: 24px;
    color: white;
    margin-left: 24px;
  }
  .childrenContainer {
    display: flex;
    flex-wrap: wrap;
  }
`

export const ElementWrapperContainer = styled.div<ElementWrapperProps>`
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;

  .title {
    color: white;
  }
  .description {
    color: white;
    margin: 4px 0 0;
  }
`
