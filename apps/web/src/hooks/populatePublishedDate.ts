import type { BeforeChangeHook } from 'payload/dist/collections/config/types';

export const populatePublishedDate: BeforeChangeHook = async ({
  data,
  operation,
  req
}) => {
  const now = new Date();
  if (operation === 'create' || operation === 'update') {
    if (data && !data.publishedAt) {
      return {
        ...data,
        publishedAt: now
      };
    }
    if (new Date(data.publishedAt) <= now) {
      return data;
    }

    const results = await req.payload.findVersions({
      collection: 'pages',
      limit: 100,
      sort: '-version.createdAt'
    });

    const publishedDocs = results.docs.filter(
      (doc) =>
        doc.version.publishedAt && new Date(doc.version.publishedAt) <= now
    );

    if (publishedDocs.length === 0) {
      return null;
    }

    return {
      ...publishedDocs[0],
      ...publishedDocs[0].version
    };
  }
  return data;
};
