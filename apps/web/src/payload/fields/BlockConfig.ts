import type { CollapsibleField, GroupField } from 'payload/types';

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' }
];

const breakpoints: [string, number][] = [
  ['xxs', 0],
  ['xs', 320],
  ['sm', 576],
  ['md', 768],
  ['lg', 992],
  ['xl', 1280],
  ['xxl', 1440]
];
const paddingOptions = [
  { label: 'xxs - 0px', value: '0px' },
  { label: 'xs - 10px', value: '10px' },
  { label: 'sm - 20px', value: '20px' },
  { label: 'md - 40px', value: '40px' },
  { label: 'lg - 60px', value: '60px' },
  { label: 'xl - 80px', value: '80px' },
  { label: 'xxl - 100px', value: '100px' }
];

const breakpointFields: CollapsibleField[] = breakpoints.map(
  ([label, value]) => ({
    type: 'collapsible',
    label: `${label} - ${value}px`,
    admin: {
      initCollapsed: true
    },
    fields: [
      {
        name: label,
        label,
        type: 'group',
        admin: {
          hideGutter: true
        },
        fields: [
          {
            name: 'paddingTop',
            type: 'select',
            options: paddingOptions
          },
          {
            name: 'paddingBottom',
            type: 'select',
            options: paddingOptions
          }
        ]
      }
    ]
  })
);

const responsiveStyles: CollapsibleField = {
  type: 'collapsible',
  label: 'Responsive Styles',
  admin: {
    initCollapsed: true
  },
  fields: [
    {
      name: 'responsiveStyles',
      type: 'group',
      fields: breakpointFields
    }
  ]
};

function BlockConfig({
  name,
  label,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'blockConfig',
    label: label || 'Block Configuration',
    type: 'group',
    fields: [
      {
        name: 'theme',
        label: 'Theme',
        type: 'select',
        required: false,
        options: themeOptions
      },
      {
        name: 'hidden',
        label: 'Hide Block',
        admin: {
          description: 'Block will not appear on page'
        },
        type: 'checkbox',
        defaultValue: false
      },
      responsiveStyles,
      ...fields
    ]
  };
}

export default BlockConfig;
