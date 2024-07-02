import type { Field, GroupField } from 'payload';

const themeOptions = [
  { label: 'Inherit', value: '_' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' }
];

// UPDATE WITH THEME COLORS
const colorOptions = [
  { label: 'Foreground', value: 'fg' },
  { label: 'Light Background', value: 'neutral' },
  { label: 'Blue', value: 'blue' },
  { label: 'Indigo', value: 'indigo' },
  { label: 'Purple', value: 'purple' }
];

const paddingValues = [
  {
    label: 'xl',
    value: '9.375rem'
  },
  {
    label: 'lg',
    value: '7.5rem'
  },
  {
    label: 'md',
    value: '3.75rem'
  },
  {
    label: 'sm',
    value: '2.25rem'
  },
  {
    label: 'xs',
    value: '1.125rem'
  },
  { label: 'unset', value: 'unset' }
];

const contentWidthValues = [
  { label: 'full', value: 'full' },
  { label: 'xxl', value: 'xxl' },
  { label: 'xl', value: 'xl' },
  { label: 'lg', value: 'lg' },
  { label: 'md', value: 'md' },
  { label: 'sm', value: 'sm' },
  { label: 'xs', value: 'xs' }
];

const paddingOptions: Array<Field> = [
  {
    name: 'paddingTop',
    dbName: 't',
    label: 'Padding Top',
    required: false,
    type: 'select',
    options: paddingValues
  },
  {
    name: 'paddingBottom',
    dbName: 'b',
    label: 'Padding Bottom',
    required: false,
    type: 'select',
    options: paddingValues
  }
];

function BlockConfig({
  name,
  label,
  fields = [],
  defaultWidth,
  defaultPadding
}: Partial<GroupField> & {
  defaultPadding?: {
    paddingTop: string;
    paddingBottom: string;
  };
  defaultWidth?: string;
} = {}): GroupField {
  return {
    name: name || 'blockConfig',
    label: label || 'Block Configuration',
    type: 'group',
    fields: [
      {
        label: 'Block Settings',
        type: 'collapsible',
        admin: {
          initCollapsed: true
        },
        fields: [
          {
            name: 'theme',
            label: 'Theme',
            type: 'select',
            required: false,
            options: themeOptions
          },
          {
            name: 'backgroundColor',
            dbName: 'bgColor',
            label: 'Block Background Color',
            type: 'select',
            required: false,
            options: colorOptions
          },
          {
            name: 'backgroundImage',
            label: 'BackgroundImage',
            type: 'upload',
            relationTo: 'images',
            required: false
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
          {
            name: 'contentWidth',
            dbName: 'cw',
            label: 'Content Width',
            type: 'select',
            required: false,
            options: contentWidthValues,
            defaultValue: defaultWidth || 'xl'
          },
          {
            name: 'p',
            label: 'Padding',
            type: 'group',
            fields: [
              {
                label: 'Breakpoints',
                type: 'collapsible',
                admin: {
                  initCollapsed: true
                },
                fields: [
                  {
                    name: 'xs',
                    label: 'Mobile',
                    type: 'group',
                    fields: [...paddingOptions],
                    defaultValue: defaultPadding || {
                      paddingTop: '3.75rem',
                      paddingBottom: '3.75rem'
                    }
                  },
                  {
                    name: 'md',
                    label: 'Tablet',
                    type: 'group',
                    fields: [...paddingOptions]
                  },
                  {
                    name: 'lg',
                    label: 'Destkop',
                    type: 'group',
                    fields: [...paddingOptions]
                  },
                  {
                    name: 'xl',
                    label: 'XL Destkop',
                    type: 'group',
                    fields: [...paddingOptions]
                  }
                ]
              }
            ]
          }
        ]
      },
      ...fields
    ]
  };
}

export default BlockConfig;
