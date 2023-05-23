import { Outlet, ReactLocation, Router } from '@tanstack/react-location'
import { Login } from 'apps/app2/src/pages/auth/login'
import { Main } from 'apps/app2/src/pages/main'

const location = new ReactLocation()

export const Routes = () => {
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
