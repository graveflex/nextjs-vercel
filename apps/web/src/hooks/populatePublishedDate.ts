import type { BeforeChangeHook } from 'payload/dist/collections/config/types'

export const populatePublishedDate: BeforeChangeHook = async ({ data, operation, req }) => {
  const now = new Date()
  const results = await req.payload.findVersions({
    collection: 'pages',
    limit: 3,
    sort: '-publishedAt',
  });
  console.log("RESULTS", results)
  // use results to pull the latesst version with a publishedAt date and use that as the default if the most current version has a publishedAt date in the future. 

  if (operation === 'create' || operation === 'update') {
    if (data && !data.publishedAt) {
      console.log("NOW", now)
      return {
        ...data,
        publishedAt: now,
      }
    }
  }

  return data
}