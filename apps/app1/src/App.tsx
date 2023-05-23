import { CommonProvider } from '@monorepo/common/context'
import { FC } from 'react'
import { Routes } from './routes'

export const App: FC = () => {
  return (
    <CommonProvider eventThemeOverride>
      <Routes />
    </CommonProvider>
  )
}

export default App
