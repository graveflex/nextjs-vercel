import { WEB_URL } from '@mono/web/lib/constants';
import RichTextFields from '@mono/web/payload/fields/RichTextFields';
import type { CollectionConfig, Field } from 'payload';

import { invalidateCache } from '@mono/web/hooks/invalidateCache';
import { publishBeforeRead } from '../hooks/publishBeforeRead';
import CTA from '../payload/fields/CTA';

const cta = CTA({ name: 'card' });
const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true
  },
  versions: {
    drafts: {
      autosave: true
    }
  },
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: (doc) => {
        const {
          data: { slug },
          locale: { code }
        } = doc;
        return `${WEB_URL}/${code}/draft/blog/${slug}`;
      }
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
      unique: true,
      validate: (value: string) => {
        const regex = /[!@#$%^*[()+=.]/;
        if (regex.test(value)) {
          return 'Slug cannot contain special characters !@]{${%^*()[+= or .';
        }
        if (value === 'admin') {
          return 'Slug cannot be admin';
        }
        if (value === 'api') {
          return 'Slug cannot be api';
        }
        return true;
      },
      admin: {
        position: 'sidebar',
        description: 'pathname for the blog deatail - do not inculde /.'
      }
    } as Field,
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
