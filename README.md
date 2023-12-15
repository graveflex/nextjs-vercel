# NextJS and Payload Monorepo

monorepo for gfx projects that includes nextjs, payload cms, storybook, and refract. built to deploy directly to Vercel. 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgraveflex%2Fnextjs-vercel&stores=%5B%7B%22type%22%3A%20%22postgres%22%7D%5D&env=PAYLOAD_SECRET)

## getting started

- clone the repo by clicking the 'one-click' deploy button above.
- copy `.env.example` into `.env` and get copy of development environmental variables
- `yarn` to install dependencies
- `yarn dev` to run all apps in dev mode
- `yarn test` to run test
- `yarn test:coverage` to generate a new coverage report

### helpful scripts

- `reinstall` cleans out all `node_modules` and reinstalls all packages
- `clean` cleans out all build/dist directories

## apps

### docs

Storybook instance for frontend development and regression testing

### web

Next.js project with Payload CMS integrated

## packages

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


