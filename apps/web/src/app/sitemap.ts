import { WEB_URL } from '@mono/settings';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import type { MetadataRoute } from 'next';

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayloadHMR({ config });
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
          url: `${WEB_URL}/${item.slug}`,
          alternates: {
            languages: {
              en: `${WEB_URL}/en-us/${item.slug}`,
              es: `${WEB_URL}/es-us/${item.slug}`
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
        url: `${WEB_URL}/blog/${item.slug}`,
        alternates: {
          languages: {
            en: `${WEB_URL}/en-us/blog/${item.slug}`,
            es: `${WEB_URL}/es-us/blog/${item.slug}`
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
      url: WEB_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: `${WEB_URL}/en-us/`,
          es: `${WEB_URL}/es-us/`
        }
      }
    }
  ];
}
