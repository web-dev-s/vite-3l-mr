import { cleanup, render } from '@testing-library/react'

import { ThemeProvider, ThemeProviderProps } from '../theme'

export type customRenderOptionsType = {
  theme?: ThemeProviderProps['theme']
  mode?: ThemeProviderProps['mode']
}

const customRender = (
  ui: React.ReactElement,
  options?: customRenderOptionsType
) => {
  const { mode } = options ?? {}
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => (
      <ThemeProvider mode={mode ?? 'dark'}>{children}</ThemeProvider>
    ),
    ...options
  })
}

export * from 'vitest'
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render, cleanup }
