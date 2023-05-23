import { APIProvider } from '@monorepo/common/services/api/context'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<></>}>
      <APIProvider>
        <App />
      </APIProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
