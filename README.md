# NextJS and Payload Monorepo

monorepo for gfx projects that includes nextjs, payload cms, storybook, and refract. built to deploy directly to Vercel. 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgraveflex%2Fnextjs-vercel&stores=%5B%7B%22type%22%3A%20%22postgres%22%7D%5D&env=PAYLOAD_SECRET)

# getting started

- clone the repo by clicking the 'one-click' deploy button above.
- copy `.env.example` into `.env` and get copy of development environmental variables
- `pnpm i` to install dependencies
- `pnpm dev` to run all apps in dev mode
- `pnpm test` to run test
- `pnpm test:coverage` to generate a new coverage report

## helpful scripts

- `pnpm reinstall` cleans out all `node_modules` and reinstalls all packages
- `pnpm clean` cleans out all build/dist directories
- `pnpm cicd` to run all CI checks (lint, types, coverage, build)

### payload scripts 
- `pnpm generate:types` uses the config files of payload components/blocks/globals to generate types in 
`packages/types/payload-types.ts` which can not be modified by hand. 

## hygen generators 
We use [Hygen](https://www.hygen.io/) to scaffold the following areas of the codebase:

- `pnpm create:component` creates new component boilerplate 
- `pnpm create:block` created new block in `apps/web` boilerplate, and the required imports 
- `pnpm create:package` creates a new package in `packages/ui`
- `pnpm create:icon` adds an Icon file to `packages/ui/icons` 

# apps

Using Next.js 14, [routing fundamentals](https://nextjs.org/docs/app/building-your-application/routing_)

## docs

Storybook instance for frontend development and regression testing, integrated with the refract theme stories. 

## web

Next.js project with Payload CMS integrated

### payload

#### payload migrations
Each time a change is made to a payload schema a corresponding migration must also be created to track the data mutations. 
Payload stores all created migrations in a folder that you can specify. By default, migrations are stored in `apps/web/src/migrations`.

[Migtation Commands](https://payloadcms.com/docs/database/migrations#commands)

run all exisiting migrations
```
pnpm payload migrate
``` 
creates a new migration
```
pnpm payload migrate:create
``` 


#### seeds 

There are several seed scripts used to populate the CMS data:
- Nav: seeds the basic nav / footer / and hompage data 
  ```
  pnpm seed:nav
  ``` 
- Blog: seeds images / authors / tags / and posts as well as the `/blog` page in the CMS for top level blocks 
  ```
  pnpm seed:blog 
  ```
- Kitchen Sink: seeds blocks and creates a new page `/kitchen-sink`
  ```
  pnpm seed:kitchenSink
  ``` 

To run all three seeds:
  ```
  pnpm seed:all
  ```


# packages

### eslint

Linting and prettier configuration

### settings

Configuration files and environmental variables shared between apps

### theme

Theme for `web` app. Also utilized in `ui`

### tsconfig

Typescript configuration shared among apps and packages

### ui

Hooks, components, and blocks for building `web` pages


