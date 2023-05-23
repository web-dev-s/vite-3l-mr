import { Auth as LoginComponent } from '@monorepo/common/components/auth'
import { useNavigate } from '@tanstack/react-location'
import { FC } from 'react'

export const Login: FC = () => {
  const navigate = useNavigate()
  return (
    <LoginComponent
      eventTitle={'App 1'}
      navigateAtRoot={() => {
        navigate({ to: '/', replace: true })
      }}
    />
  )
}
