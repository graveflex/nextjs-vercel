import config from '@payload-config';
import type { MetadataRoute } from 'next';
import { getPayload } from 'payload';

export const dynamic = 'force-static';
export const revalidate = 60;

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config });
  const [postData, pageData] = await Promise.all([
    payload.find({
      collection: 'posts',
      limit: 0
    }),
    payload.find({
      collection: 'pages',
      limit: 0
    })
  ]);

  if ('error' in postData || 'error' in pageData) {
    return [];
  }

  const postDocs = postData.docs;
  const pageDocs = pageData.docs;

  const pagesAndPosts = () => {
    const sitemap: MetadataRoute.Sitemap = [];

    pageDocs.map((item) => {
      if (item.slug !== '/') {
        sitemap.push({
          changeFrequency: 'weekly',
          lastModified: item.updatedAt,
          priority: 1,
          url: `/${item.slug}`,
          alternates: {
            languages: {
              en: `/en-us/${item.slug}`,
              es: `/es-us/${item.slug}`
            }
          }
        });
      }
      return sitemap;
    });

    postDocs.map((item) => {
      sitemap.push({
        changeFrequency: 'weekly',
        lastModified: item.updatedAt,
        priority: 1,
        url: `/blog/${item.slug}`,
        alternates: {
          languages: {
            en: `/en-us/blog/${item.slug}`,
            es: `/es-us/blog/${item.slug}`
          }
        }
      });

      return sitemap;
    });
    return sitemap;
  };

  return [
    ...pagesAndPosts(),
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: `/en-us/`,
          es: `/es-us/`
        }
      }
    }
  ];
}
