import type { CollapsibleField, GroupField } from 'payload/types';

function SEOConfig({
  name,
  label,
  fields = []
}: Partial<GroupField> = {}): CollapsibleField {
  return {
    label: label || 'SEO Configuration',
    type: 'collapsible',
    admin: {
      initCollapsed: true
    },
    fields: [
      {
        name: name || 'seoConfig',
        label: 'SEO',
        type: 'group',
        fields: [
          {
            name: 'title',
            label: 'Title',
            type: 'text'
          },
          {
            name: 'description',
            label: 'Description',
            type: 'textarea'
          },
          {
            name: 'keywords',
            label: 'Keywords',
            type: 'text'
          },
          ...fields
        ]
      }
    ]
  };
}

export default SEOConfig;
