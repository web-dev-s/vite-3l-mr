import Cookies from 'js-cookie'

export const COOKIE_COGNITO_KEY = 'AWS_JWT_AUTH_TOKEN'

export const setCookie = (cookieData: { key: string; token: string }) => {
  if (!cookieData.key) {
    return
  }

  sessionStorage?.setItem(cookieData.key, cookieData.token)

  Cookies.set(cookieData.key, cookieData.token, {
    Secure: true,
    sameSite: 'None',
    path: '/',
    domain:
      '.' +
      document?.location?.hostname.replace('app2.', '').replace('app1.', '')
  })
}

export const getCookie = (cookieData: { key: string }) => {
  if (!cookieData.key) {
    return null
  }

  return Cookies.get(cookieData.key)
}
