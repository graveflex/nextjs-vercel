import type { GlobalBeforeReadHook } from 'payload';

import type Pages from '../collections/Pages';

export const globalPublishBeforeRead: GlobalBeforeReadHook = async ({
  doc,
  req
}) => {
  const now = new Date();

  if (req.user) {
    return doc;
  }

  // eslint-disable-next-line
  if (doc._status === 'published' && new Date(doc?.publishedAt) <= now) {
    return doc;
  }

  const results = await req.payload.db.findVersions<typeof Pages>({
    collection: 'pages',
    limit: 1,
    req,
    sort: '-version.createdAt',
    where: {
      and: [
        {
          'version.slug': { equals: doc.slug },
          'version._status': { equals: 'published' }
        },
        {
          or: [
            {
              'version.publishedAt': { less_than: now }
            },
            {
              'version.publishedAt': { equals: null }
            }
          ]
        }
      ]
    }
  });

  const latestPublishedVersion = results?.docs?.[0];

  return latestPublishedVersion;
};
