# vite-monorepo

Demo of vite monorepo with 3 architectural layers (packages, common, apps) and aws amplify authentication

# How to start it:

- Install pnpm: https://pnpm.io/installation;
- Setup has https support implementation for localhost (requested by aws login setups),
  therefore [edit system's .host file](https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/)

  ```
    macOs : `/etc/hosts`;
    windows 10 server: `C:\Windows\System32\drivers\etc\hosts`
  ```

  by adding:

  ```
  > 127.0.0.1       app1.local.com
  > 127.0.0.1       app2.local.com
  ```

- on Windows if you are getting something like

```
apps/app2 dev: error when starting dev server:
 apps/app2 dev: Error: Command failed: "C:\Users\user\.vite-plugin-m
 kcert\mkcert.exe" -install -key-file "C:\Users\user\.vite-plugin-mk
 cert\certs\dev.key" -cert-file "C:\Users\user\.vite-plugin-mkcert\c
 erts\dev.pem" localhost 10.200.7.215 127.0.0.1 app2.local.com
 apps/app2 dev: The process cannot access the file because it is being used by an
 other process.
 apps/app2 dev:     at ChildProcess.exithandler (node:child_process:419:12)
 apps/app2 dev:     at ChildProcess.emit (node:events:513:28)
 apps/app2 dev:     at maybeClose (node:internal/child_process:1091:16)
 apps/app2 dev:     at ChildProcess._handle.onexit (node:internal/child_process:3)
```

ack that node is single thread and paralell run can execute locked processes
just run first app1 with `>pnpm dev:app1` then app 2 with `>pnpm dev:app2` for permitting mkcert to create local https certificate without entering in race condition.

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

```
"dev:app1", "dev:app2", "dev:app", "dev:ui";
"build:app1","build:app2", "build:app","build:ui";
"preview:app1","preview:app2", "preview:app", "preview:ui";
"lint:app1", "lint:app2" ,"lint:app" , "lint:common" , "lint:ui";
```

### Demo login:

```
email: nickfor@edusmart.website
password: Password1!
```

- Have fun and forget webpack's loading time!
