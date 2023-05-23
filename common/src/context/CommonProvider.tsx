import { StickyAlertProvider } from '@monorepo-ui/components'
import { ThemeProvider } from '@monorepo-ui/theme'
import { FC, PropsWithChildren } from 'react'

import { ErrorBoundary } from '../components/error-boundary'
import { useEventTheme } from '../services/api/cms/event'

export type CommonProviderProps = {
  eventThemeOverride?: boolean
}

export const CommonProvider: FC<PropsWithChildren<CommonProviderProps>> = ({
  children,
  eventThemeOverride
}) => {
  const { data: theme } = useEventTheme('event1')

  return (
    <ThemeProvider
      mode={eventThemeOverride ? theme?.mode : undefined}
      theme={
        eventThemeOverride
          ? { palette: { primary: { main: theme?.primaryColor } } }
          : undefined
      }
    >
      <StickyAlertProvider>
        <ErrorBoundary>{children}</ErrorBoundary>
      </StickyAlertProvider>
    </ThemeProvider>
  )
}
