import type {
  GroupField,
  RadioField,
  TextFieldSingleValidation,
  Field,
  CollectionSlug
} from 'payload';
import { validateUrl, type LinkFields } from '@payloadcms/richtext-lexical';

const enabledCollections = ['pages', 'files', 'posts'];

const baseFields: Field[] = [
  {
    name: 'text',
    type: 'text',
    label: ({ t }) => t('fields:textToDisplay'),
    required: true
  },
  {
    name: 'linkType',
    type: 'radio',
    admin: {
      description: ({ t }) => t('fields:chooseBetweenCustomTextOrDocument')
    },
    defaultValue: 'custom',
    label: ({ t }) => t('fields:linkType'),
    options: [
      {
        label: ({ t }) => t('fields:customURL'),
        value: 'custom'
      },
      {
        label: ({ t }) => t('fields:internalLink'),
        value: 'internal'
      }
    ],
    required: true
  } as RadioField,
  {
    name: 'url',
    type: 'text',
    admin: {
      condition: (_data, _siblingData) => {
        return _siblingData.linkType !== 'internal';
      }
    },
    hooks: {
      beforeChange: [
        ({ value }) => {
          if (!value) {
            return;
          }

          if (!validateUrl(value)) {
            return encodeURIComponent(value);
          }
          return value;
        }
      ]
    },
    label: ({ t }) => t('fields:enterURL'),
    required: true,
    validate: ((value: string, options) => {
      if ((options?.siblingData as LinkFields)?.linkType === 'internal') {
        return; // no validation needed, as no url should exist for internal links
      }
      if (!validateUrl(value)) {
        return 'Invalid URL';
      }
    }) as TextFieldSingleValidation
  },
  {
    name: 'doc',
    admin: {
      condition: (_data, _siblingData) => {
        return _siblingData.linkType === 'internal';
      }
    },
    // when admin.hidden is a function we need to dynamically call hidden with the user to know if the collection should be shown
    type: 'relationship',
    label: ({ t }) => t('fields:chooseDocumentToLink'),
    maxDepth: 1,
    relationTo: enabledCollections as CollectionSlug[],
    required: true
  },
  {
    name: 'newTab',
    type: 'checkbox',
    label: ({ t }) => t('fields:openInNewTab')
  }
];

function Link({
  name,
  interfaceName,
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'link',
    type: 'group',
    interfaceName: interfaceName || 'payLoadLink',
    fields: [...baseFields]
  };
}

export default Link;
