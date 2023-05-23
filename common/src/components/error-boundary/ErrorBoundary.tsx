import { FC, PropsWithChildren } from 'react'
import {
  FallbackProps,
  ErrorBoundary as ReactErrorBoundary
} from 'react-error-boundary'

const ErrorBoundaryFallbackComponent: FC<FallbackProps> = ({
  error,
  resetErrorBoundary
}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export const ErrorBoundary: FC<PropsWithChildren<{}>> = ({ children }) => (
  <ReactErrorBoundary FallbackComponent={ErrorBoundaryFallbackComponent}>
    {children}
  </ReactErrorBoundary>
)
