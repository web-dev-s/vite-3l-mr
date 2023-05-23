# vite-monorepo

Demo of vite monorepo with 3 architectural layers (packages, common, apps) and aws amplify authentication

### Demo login:

email: nickfor@edusmart.website
password: Password1!

# How to run it:

- Install pnpm: https://pnpm.io/installation;
- Setup has https support implementation for localhost (requested by aws login setups),
  therefore edit system's .host file
  (
  macOs : `/etc/hosts`;
  windows: `C:\Windows\System32\drivers\etc)\hosts`
  )[https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/]
  by adding: > 127.0.0.1 app1.local.com > 127.0.0.1 app2.local.com

- Open terminal in rooot folder

  - run all apps on dev:

    > pnpm dev

  - make production build:

    > pnpm build

  - run all apps in live mode:

    > pnpm preview

  - reveal lint issues:

    > pnpm lint

  - try fixing autofixable lint issues:

    > pnpm lint:fix

  - autoformat code:

    > pnpm format

  - generate icon's assets indexed imports from folder inside packages/ui/icons:
    > pnpm gen-icons misc

Also commands are available for individual apps or layers and a list of them can be found in root package.json scripts :
"dev:app1", "dev:app2", "dev:app", "dev:ui",
"build:app1","build:app2", "build:app","build:ui",
"preview:app1","preview:app2", "preview:app", "preview:ui"
"lint:app1", "lint:app2" ,"lint:app" , "lint:common" , "lint:ui",

- Have fun and forget webpack's loading time!
