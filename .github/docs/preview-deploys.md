---
title: Preview Deploys Overview
---

# Preview Deploys

Because we cannot create new databases using Vercel's cli, we've offloaded the creation of preview databases to [Neon](https://neon.tech).

## Overview

When a new PR is created, the following happens:

1. the `open-pr` action is run
2. the workflow determines the PR base (ex. `develop`, `feat/some-feat`)
3. the workflow creates a new database in Neon
4. the workflow copies the database from the PR base environment into the new database
5. the workflow triggers a build in vercel, supplying the new `POSTGRES_URL` and setting the `IS_PREVIEW` flag

On subsequent pushes to the PR, only the build will run

When a PR is closed, the following happens:

1. the `close-pr` action runs
2. the workflow determines the name of the database based on the branch name
3. the workflow deletes the database

## Set Up

Because we're interacting with both Vercel and Neon's clis, we'll need to provision the following secrets in github:

``` bash
VERCEL_ORG_ID=""
VERCEL_PROJECT_ID=""
VERCEL_TOKEN=""
NEON_API_KEY=""
NEON_PROJECT_ID=""
NEON_BASE_URL="" # this includes the user/password for the URL
```
