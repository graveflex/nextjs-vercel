import type { GroupField } from 'payload/types';

export const coreIcons = {
  // InsertIconName
  Login: {},
  Menu: {},
  Location: {},
  Calendar: {},
  PersonBust: {},
  Check: {},
  ArrowUp: {},
  ArrowLeft: {},
  ArrowRight: {},
  ArrowDown: {},
  CaretDown: {},
  CaretUp: {},
  CaretRight: {},
  CaretLeft: {},
  Close: {},
  DoubleCaretDown: {},
  DoubleCaretUp: {},
  DoubleCaretRight: {},
  DoubleCaretLeft: {},
  Error: {},
  LinkOut: {},
  MinusSign: {},
  Person: {},
  PlusSign: {},
  Quote: {},
  Search: {},
  Phone: {},
  Job: {},
  Email: {},
  SolidArrowDown: {},
  SolidArrowUp: {},
  SolidArrowRight: {},
  SolidArrowLeft: {},
  ArrowNesting: {}
};

function IconSelect({
  name,
  interfaceName,
  defaultValue
}: Partial<GroupField> = {}): GroupField {
  return {
    name: 'icon',
    interfaceName: interfaceName || 'IconSelect',
    type: 'group',
    fields: [
      {
        label: 'Icon Settings',
        type: 'collapsible',
        admin: {
          initCollapsed: true
        },
        fields: [
          {
            name: 'name',
            dbName: `${name?.toLowerCase()}_ic`,
            label: 'Icon Name',
            type: 'select',
            options: Object.keys(coreIcons).map((icon) => ({
              value: icon,
              label: icon
            })),
            defaultValue,
            admin: {
              isClearable: true
            }
          },
          {
            name: 'size',
            label: 'Icon Size (width/height)',
            type: 'select',
            dbName: `${name?.toLowerCase()}_iw`,
            options: [
              { value: '35', label: 'x-large (35px)' },
              { value: '30', label: 'large (30px)' },
              { value: '25', label: 'medium (25px)' },
              { value: '20', label: 'small (20px)' }
            ],
            defaultValue: '35',
            admin: {
              isClearable: false,
              description: 'Icon height/width in pixels - x-large is default.',
              condition: (siblingData) => {
                if (siblingData?.name === null) {
                  return false;
                }
                return true;
              }
            }
          },
          {
            name: 'color',
            label: 'Color',
            type: 'text',
            admin: {
              // future enhancement- select field with theme colors
              placeholder: '#0C0E0F'
            }
          }
        ]
      }
    ]
  };
}

export default IconSelect;
