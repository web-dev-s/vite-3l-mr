import { useState, useEffect } from 'react'
import { COOKIE_COGNITO_KEY, getCookie } from '../utility/cookie-set'

export const useTokenChecker = (callback: () => void) => {
  const [hasToken, setHasToken] = useState<boolean>(false)

  useEffect(() => {
    const timerId = setInterval(() => {
      const token = getCookie({ key: COOKIE_COGNITO_KEY })

      if (!token) {
        setHasToken(false)
        callback?.()
        console.log('missing token in cookies: ', token)
      } else {
        setHasToken(true)
      }
    }, 5000)

    return () => {
      clearInterval(timerId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { hasToken, setHasToken }
}
