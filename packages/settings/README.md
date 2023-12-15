# settings

vite project for testing and generating `settings` for `apps`

## `index.ts`

Environmental variables are exported from this file. We generate an esm and commonjs version of this file at build/dev time so that it can be consumed by other packages in the monorepo

## `logSettingsPlugin`

A `vite` plugin that logs the variables used during build step

## `utils`

Utility function for generating higher order environmental variables
