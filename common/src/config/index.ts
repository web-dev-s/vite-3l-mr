const config = {
  api: {
    cmsURL: import.meta.env.VITE_CMS_URL,
    beApiURL: import.meta.env.VITE_BE_API_URL
  },
  aws: {
    region: import.meta.env.VITE_AWS_REGION,
    cognito: {
      usersPoolId: import.meta.env.VITE_AWS_COGNITO_USERS_POOL_ID,
      appClientId: import.meta.env.VITE_AWS_COGNITO_APP_CLIENT_ID
    }
  },
  google: {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET
  },
  env: import.meta.env
}

export default config
