import type { MetadataRoute } from 'next';
import { WEB_URL } from '@mono/settings';
import type { Page, Post } from '@mono/types/payload-types';
import fetchPayloadDataRest from '@mono/web/lib/fetchPayloadDataRest';
import type { PaginatedDocs } from 'payload';

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postData, pageData] = await Promise.all([
    fetchPayloadDataRest<PaginatedDocs<Post>>({
      endpoint: '/api/posts',
      params: {
        limit: 0
      }
    }),
    fetchPayloadDataRest<PaginatedDocs<Page>>({
      endpoint: '/api/pages',
      params: {
        limit: 0
      }
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
