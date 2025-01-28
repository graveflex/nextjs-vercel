import type { Field, GroupField, Option } from 'payload';

const themeOptions = [
  { label: 'Inherit', value: '_' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' }
];

const paddingLabels = [
  'default',
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
] as const;
const paddingValues = [null, 0, 2, 4, 6, 8, 10] as const;

const genPaddingOptions = (prefix: 'pt' | 'pb') =>
  paddingLabels.map((label, idx) => {
    const value = paddingValues[idx];
    if (value === null) {
      return { label, value };
    }

    return {
      label,
      value: `${prefix}-${value}` as const
    };
  });

const paddingTopOptions = genPaddingOptions('pt');
const paddingBottomOptions = genPaddingOptions('pb');

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
    options: paddingTopOptions as Option[]
  },
  {
    name: 'paddingBottom',
    dbName: 'b',
    label: 'Padding Bottom',
    required: false,
    type: 'select',
    options: paddingBottomOptions as Option[]
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
        fields: [
          {
            name: 'theme',
            label: 'Theme',
            type: 'select',
            required: false,
            options: themeOptions
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
            name: 'paddingXs',
            label: 'Padding',
            type: 'group',
            fields: [...paddingOptions],
            defaultValue: defaultPadding || {
              paddingTop: 'pt-4',
              paddingBottom: 'pt-4'
            }
          },

          {
            label: 'Advanced Padding',
            type: 'collapsible',
            admin: {
              initCollapsed: true
            },
            fields: [
              {
                label: 'Responsive Padding Settings',
                type: 'collapsible',
                admin: {
                  initCollapsed: true
                },
                fields: [
                  {
                    name: 'paddingMd',
                    label: 'Tablet and above',
                    type: 'group',
                    fields: [...paddingOptions]
                  },
                  {
                    name: 'paddingLg',
                    label: 'Destkop and above',
                    type: 'group',
                    fields: [...paddingOptions]
                  },
                  {
                    name: 'paddingXl',
                    label: 'XL Desktop and above',
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
