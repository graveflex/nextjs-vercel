import type { ArrayField, GlobalConfig } from 'payload/types';

const menu: ArrayField = {
  name: 'main',
  label: 'Main navigation',
  type: 'array',
  admin: {
    initCollapsed: true
  },
  fields: [
    {
      name: 'label',
      label: 'Label',
      admin: {
        description: 'Label for menu item'
      },
      type: 'text',
      required: true,
      localized: true
    },
    {
      name: 'slug',
      label: 'Route',
      admin: {
        description: 'Slug for page'
      },
      type: 'text',
      required: true
    },
    {
      name: 'type',
      label: 'Link Type',
      admin: {
        description: 'Choose one of "button" or "link"'
      },
      type: 'select',
      options: ['link', 'button']
    }
  ]
};

const Nav: GlobalConfig = {
  slug: 'nav',
  label: 'Navigation',
  admin: {
    group: 'Navigation and Layout'
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'header',
      label: 'Header',
      type: 'group',
      fields: [
        {
          name: 'logo',
          label: 'Logo',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Logo for header. Prefer `.svg`'
          }
        },
        menu
      ]
    },
    {
      name: 'footer',
      label: 'Footer',
      type: 'group',
      fields: [
        {
          name: 'copyright',
          label: 'Copyright',
          type: 'text'
        },
        {
          ...menu,
          name: 'secondary',
          label: 'Secondary navigation'
        }
      ]
    }
  ]
};

export default Nav;
