import { Container } from '@monorepo-ui/components'
import { useTokenChecker } from '@monorepo/common/hooks/useTokenChecker'

import { useNavigate } from '@tanstack/react-location'
import { FC, useRef } from 'react'

import style from './Main.module.scss'

export const Main: FC = () => {
  const navigate = useNavigate()

  useTokenChecker(() => navigate({ to: 'login', replace: true }))

  const iRef = useRef<HTMLIFrameElement | null>(null)

  return (
    <Container
      modifiers={['column', 'fullHeight', 'verticalSpaced', 'spacedEvenly']}
    >
      <div>Main Page app2</div>
      <div className={style.container}>{'Page content'}</div>
    </Container>
  )
}
