import type { BeforeReadHook } from 'payload/dist/collections/config/types';

export const publishBeforeRead: BeforeReadHook = async ({
  doc,
  req,
  query,
  ...props
}) => {
  const now = new Date();

  if (new Date(doc.publishedAt) <= now) {
    return doc;
  }

  const results = await req.payload.findVersions({
    collection: 'pages',
    limit: 100,
    sort: '-version.createdAt'
  });

  const publishedDocs = results.docs.filter(
    (versionData) =>
      versionData.version.publishedAt &&
      new Date(doc.version.publishedAt) <= now
  );

  console.log('version results log', publishedDocs[0].version);
  console.log('docs log', doc);

  if (publishedDocs.length !== 0) {
    return {
      ...publishedDocs[0],
      ...publishedDocs[0].version
    };
  }

  return doc;
};
