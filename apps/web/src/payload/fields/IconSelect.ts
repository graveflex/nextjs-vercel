import type { GroupField } from 'payload/types';

const coreIcons = {
  // InsertIconName
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
  SolidArrowDown: {},
  SolidArrowUp: {},
  SolidArrowRight: {},
  SolidArrowLeft: {},
  ArrowNesting: {}
};

function IconSelect({
  interfaceName,
  defaultValue
}: Partial<GroupField> = {}): GroupField {
  return {
    name: 'icon',
    interfaceName: interfaceName || 'IconSelect',
    type: 'group',
    fields: [
      {
        name: 'name',
        label: 'Icon Name',
        type: 'select',
        options: Object.keys(coreIcons).map((icon) => ({
          value: icon,
          label: icon
        })),
        defaultValue: defaultValue || 'Check',
        admin: {
          isClearable: true
        }
      },
      {
        name: 'width',
        label: 'Width',
        type: 'text',
        admin: {
          placeholder: '35'
        }
      },
      {
        name: 'height',
        label: 'Height',
        type: 'text',
        admin: {
          placeholder: '35'
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
  };
}

export default IconSelect;
