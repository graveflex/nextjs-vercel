# PR Deploy Test

# NextJS and Payload Monorepo

monorepo for gfx projects that includes nextjs, payload cms, storybook, and refract. built to deploy directly to Vercel. 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgraveflex%2Fnextjs-vercel&stores=%5B%7B%22type%22%3A%20%22postgres%22%7D%5D&env=PAYLOAD_SECRET)

The repo is divided into two apps
Using Next.js 14, [routing fundamentals](https://nextjs.org/docs/app/building-your-application/routing_):

- `docs`: 📖 [Storybook](https://storybook.js.org/docs) — UI component environment powered by Vite
- `web`: 🏎 The [NextJS](https://nextjs.org/docs) project + the [Payload CMS](https://payloadcms.com/docs/getting-started/what-is-payload) 

The repo also includes a few packages:

- `selint-config-custom`: A shared `eslint` config
- `settings`: A package that controls both the testing via vitest as well as exports a `settings` package that's used to keep environmental variables in sync across apps
- `theme`: Theme value declarations using [Refract-Ui](https://github.com/graveflex/refract) - consumed by `web`, `docs` and `packages/ui`
- `tsconfig`: A set of `tsconfig` bases for various packages
- `types`: Houses the `payload-types.ts` to be shared cross app/package
- `ui`: The ui/component library that is consumed by `web`

## Getting Started

- clone the repo by clicking the 'one-click' deploy button above.
- copy `.env.example` into `.env` and get copy of development environmental variables
- `pnpm i` to install dependencies
- `pnpm dev` to run all apps in dev mode
- `pnpm test` to run test
- `pnpm test:coverage` to generate a new coverage report

### First Time Setup

Go to `http://localhost:3000`. By default, this page should return a 404. This is because we're trying to fetch data from the CMS when the CMS has not been initialized

Two paths to initialization: 
1. Go to `http://localhost:3000/admin` and login with the local test user defined in `apps/web/payload.config.ts`
```
  email: 'dev@payloadcms.com',
  password: 'test'
```
4. You will be routed to the Payload CMS dashboard. Create a `test` page with a test block.
5. Return to the index page. You'll see some data about the page you've created, signalling that `web` can request data from `cms`

--or-- 

1. in your terminal 
```
cd apps/web
```

2. run one or all the seeds to populate test data 
```
pnpm seed:all
```
3. Return to the index page. You'll see a template nav and homepage, signalling that `web` can request data from `cms`

## Helpful Scripts

- `pnpm reinstall` cleans out all `node_modules` and reinstalls all packages
- `pnpm clean` cleans out all build/dist directories
- `pnpm cicd` to run all CI checks (lint, types, coverage, build)

### Payload Scripts 
- `pnpm generate:types` uses the config files of payload components/blocks/globals to generate types in 
`packages/types/payload-types.ts` which can not be modified by hand. 

## Hygen Generators 
We use [Hygen](https://www.hygen.io/) to scaffold the following areas of the codebase:

- `pnpm create:component` creates new component boilerplate 
- `pnpm create:block` created new block in `apps/web` boilerplate, and the required imports 
- `pnpm create:package` creates a new package in `packages/ui`
- `pnpm create:icon` adds an Icon file to `packages/ui/icons` 


## Payload

### Payload Migrations
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

### Pulling down CMS data

Rather than recreating the CMS data from scratch, it's much better to sync your local database with either the staging or production database.

To sync your local dev environment with the staging CMS database, run the following command from `apps/web` 

```sh
./bin/sync_db.sh 
```

**Note**: make sure the `REMOTE_DATABASE_URL` ENV var has been set in your `.env.local` file to point the neon database URL for prod. 

### CMS Seeds 

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

  ### Form Builder

  A form can be created in the `forms` collection within the Payload CMS:
  - Define the inputs to be used on the form (TextInput, Checkbox, Select, etc.)
  - Optionally define an email to be sent when the form is submitted, using data from the form.
    - Email credentials are defined in `payload.config.ts` under the `nodemailerAdapter` with the `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASS` environment variables.
    - SMTP is a universal protocol for email transfers. It can be integrated with many commonly used mailing services, such as SendGrid, GMail, and MailChimp.

  After a form is created, it can be displayed on the front end with the `FormBlock`
  - Create a page and place a `FormBlock`
  - In the fields for the `FormBlock` one of the previously created forms can be selected.

  When a form is submitted it will be sent to the `formSubmissions` collection
  - Data from form submissions can be viewed & stored in the CMS
  - Payload collection hooks can be injected in `formSubmissionOverrides` in the email adapter. This would allow the use of a `beforeChange` hook to further process the data/send to another endpoint after being submitted.



