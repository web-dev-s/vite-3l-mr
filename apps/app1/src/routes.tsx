import { Outlet, ReactLocation, Router } from '@tanstack/react-location'
import { Login } from 'apps/app1/src/pages/auth/login'
import { Main } from 'apps/app1/src/pages/main'
import { FC } from 'react'

const location = new ReactLocation()

export const Routes: FC = () => {
  return (
    <Router
      location={location}
      routes={[
        { path: '/', element: <Main /> },
        {
          path: 'login',
          element: <Login />
        }
      ]}
    >
      <Outlet />
    </Router>
  )
}
