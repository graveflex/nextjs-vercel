// import coreIcons from '@mono/ui/icons/core';
import type { GroupField } from 'payload/types';

const coreIcons = {
  ArrowUp: {},
  ArrowLeft: {},
  ArrowRight: {},
  Quote: {},
}

function IconSelect({
  name,
  interfaceName
}: {
  name?: string;
  interfaceName?: string;
}): GroupField {
  return {
    name: name || 'icon',
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
        admin: {
          isClearable: true,
          isSortable: true
        }
      },
      {
        name: 'width',
        label: 'Width',
        type: 'text',
        defaultValue: '35'
      },
      {
        name: 'height',
        label: 'Height',
        type: 'text',
        defaultValue: '35'
      },
      {
        name: 'color',
        label: 'Color',
        type: 'text',
        defaultValue: '#0C0E0F'
      }
    ]
  };
}

export default IconSelect;
