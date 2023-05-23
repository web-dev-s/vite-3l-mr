/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_CMS_URL: string
  readonly VITE_LOAD_BALANCER_URL: string

  readonly VITE_AWS_REGION: string
  readonly VITE_AWS_COGNITO_USERS_POOL_ID: string
  readonly VITE_AWS_COGNITO_APP_CLIENT_ID: string

  readonly VITE_GOOGLE_CLIENT_ID: string
  readonly VITE_GOOGLE_CLIENT_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
