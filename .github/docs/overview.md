---
title: repo overview
---

# Repo Overview

This stack is a NextJS project backed by a PayloadCMS server. It is directly deployed to Vercel with Payload integrated.

The repo is divided into two base apps:

- `docs`: A StorybookJS instance
- `web`: A Next JS project that holds the Payload CMS and the web application. 

The repo also includes a few packages:

- `selint-config-custom`: A shared `eslint` config
- `settings`: A package that controls both the testing via vitest as well as exports a `settings` package that's used to keep environmental variables in sync across apps
- `theme`: A `styled-components` theme backed by `refract-ui`
- `tsconfig`: A set of `tsconfig` bases for various packages
- `ui`: The ui/component library that is consumed by `web`

## Getting Started

1. copy the `.env.example` into `.env`
2. update `PROJECT_NAME` to be the dash-cased name of the project. additionally, update the `name` in the root `package.json`.
3. local postgres database creation: 
    1. If not already done, install postgres onto your local machine by running `brew install postgresql` and then start postgres by running `brew services start postgresql`
    2. Get into the Postgres shell by running `psql postgres`
    3. Run this query to create a new database `CREATE DATABASE [DATABASE_NAME];`
    4. Verify database creation by running `\l`
3. update `POSTGRES_URL` to point to a new Postgres instance that was created in the previous step (local or remote)
    1. Example: `POSTGRES_URL=postgresql://postgres:@localhost:5432/[DATABASE_NAME]`
4. update the `PAYLOAD_SECRET` to any uuid
5. install deps using `yarn` from the root
6. run `yarn dev` to start the project

### First Time Setup

1. Go to `http://localhost:3000`. By default, this page should return a 404. This is because we're trying to fetch data from the CMS when the CMS has not been initialized
2. Go to `http://localhost:3000/admin` to get to the Payload admin. Create the first user
3. Once you've created a user, you will be sent to the Payload CMS dashboard
4. Return to the index page. You'll see some data about the user you've created, signalling that `web` can request data from the Payload CMS server. 

### General Commands

- `yarn dev`: spins up both the NextJS and Payload projects, as well as starts the storybook instance. You can access the NextJS project on the `NEXT_PORT` and Payload at `http://localhost:${NEXT_PORT}/admin`. (see `rewrites.js` file)
- `yarn build`: builds all projects, including storybook instance
- `yarn test`: runs the test suite
    - `yarn test:watch`: runs the test suite in watch mode
    - `yarn test:coverage`: runs the test suite and reports coverage
- `yarn lint`: lints all packages and apps
- `yarn clean`: "cleans" all packages and apps by removing their build artifacts
- `yarn reinstall`: deletes all `node_modules` folders and reinstalls all deps from the root
- `yarn create:component`: creates a new component either in `ui` or in `web`
- `yarn create:package`: creates a new package in the `packages` folder

## Deployment

This stack is best directly deployed to Vercel. To deploy, do the following:

1. Click the 'Deploy with Vercel' button located within the project's README.md
    1. Be sure to configure the Postgres database extension on Vercel.
2. In Vercel, add the following environmental variables:
    1. `PROJECT_NAME` as your project name
    2. `PAYLOAD_SECRET` as your payload secret uuid


This enables both PR and Branch deploys
