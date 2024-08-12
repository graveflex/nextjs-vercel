import { WEB_URL } from '@mono/settings';
import RichTextFields from '@mono/web/payload/fields/RichTextFields';
import type { CollectionConfig } from 'payload';

import { invalidateCache } from '../hooks/invalidateCache';
import { publishBeforeRead } from '../hooks/publishBeforeRead';
import CTA from '../payload/fields/CTA';

const cta = CTA({ name: 'card' });
const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: 'title',
    preview: (doc, { locale }) => {
      const { slug } = (doc as { slug: string }) || '/';

      if (slug) {
        // eslint-disable-next-line no-underscore-dangle
        const isDraft = !doc?._status || doc?._status === 'draft';
        return `${WEB_URL}/${slug}?locale=${locale}&draft=${isDraft}`;
      }
      return null;
    }
  },
  fields: [
    {
      name: 'title',
      label: 'Post Title',
      type: 'text',
      localized: true,
      required: true
    },
    {
      name: 'subTitle',
      label: 'Sub Title',
      type: 'textarea',
      localized: true,
      required: false
    },
    {
      name: 'date',
      label: 'Published At Date',
      type: 'date',
      required: true
    },
    {
      name: 'authors',
      label: 'Authors',
      type: 'relationship',
      relationTo: 'authors',
      hasMany: true
    },
    {
      name: 'tags',
      label: 'Tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true
    },
    {
      name: 'ctas',
      label: 'CTAs',
      type: 'array',
      fields: [cta]
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'upload',
      relationTo: 'images',
      required: true
    },
    {
      name: 'coverImage',
      label: 'Cover Image',
      type: 'upload',
      relationTo: 'images',
      required: true
    },
    {
      name: 'content',
      label: 'Content Blocks',
      type: 'array',
      required: true,
      fields: [...RichTextFields]
    },
    {
      name: 'slug',
      label: 'Blog Post Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'pathname for the blog deatail - do not inculde /.'
      }
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published At',
      admin: {
        description:
          'If the current time is before this date, the page will not render',
        date: {
          pickerAppearance: 'dayAndTime'
        },
        position: 'sidebar'
      },
      defaultValue: () => new Date().toJSON()
    }
  ],
  hooks: {
    beforeRead: [publishBeforeRead],
    afterChange: [invalidateCache]
  }
};

export default Posts;
