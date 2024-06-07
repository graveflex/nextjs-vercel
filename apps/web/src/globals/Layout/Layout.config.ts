import AdminRowLabel from '@mono/web/components/AdminRowLabel';
import CTA from '@mono/web/payload/fields/CTA';
import IconSelect from '@mono/web/payload/fields/IconSelect';
import Link from '@mono/web/payload/fields/Link';
import type { ArrayField, GlobalConfig, GroupField } from 'payload/types';

const banner: GroupField = {
  name: 'banner',
  label: 'Banner',
  type: 'group',
  interfaceName: 'BannerContent',
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'richText'
    },
    {
      name: 'background',
      label: 'Background Color',
      type: 'select',
      options: ['white', 'black', 'gray']
    }
  ]
};

const collapsibleMenu: GroupField = {
  name: 'collapsibleMenu',
  label: 'Collapsible Menu',
  type: 'group',
  fields: [
    {
      name: 'sections',
      label: 'Sections',
      type: 'array',
      localized: true,
      admin: {
        components: {
          RowLabel: AdminRowLabel
        }
      },
      fields: [
        {
          name: 'label',
          label: 'Dropdown Label',
          admin: {
            description: 'Label for menu item'
          },
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          label: 'Page Links',
          admin: {
            description: 'The pages that will be linked in this section',
            components: {
              RowLabel: AdminRowLabel
            }
          },
          type: 'array',
          fields: [Link()]
        }
      ]
    }
  ]
};

const flatMenu: ArrayField = {
  name: 'flatMenu',
  label: 'Flat Menu',
  type: 'array',
  admin: {
    description:
      'The pages that will be linked in this section will not have a dropdown',
    components: {
      RowLabel: AdminRowLabel
    }
  },
  fields: [
    Link()
  ]
};

const iconItems: ArrayField = {
  name: 'iconItems',
  label: 'Icon Items',
  type: 'array',
  admin: {
    description: 'Nav Items that are only displayed with an icon',
    components: {
      RowLabel: AdminRowLabel
    }
  },
  fields: [
    {
      name: 'href',
      label: 'Link',
      type: 'text'
    },
    {
      name: 'newTab',
      label: 'Open in new tab',
      type: 'checkbox',
      required: false
    },
    IconSelect({ name: 'iconNavItem' })
  ]
};

const Nav: GlobalConfig = {
  slug: 'nav',
  label: 'Header and Footer',
  admin: {
    group: 'Navigation'
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
          relationTo: 'images',
          admin: {
            description: 'Logo for header. Prefer `.svg`'
          }
        },
        banner,
        collapsibleMenu,
        flatMenu,
        iconItems,
        {
          name: 'hasCta',
          label: 'Has CTA Button',
          type: 'checkbox',
        },
        {
          name: 'ctaButton',
          label: 'CTA Button',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.hasCta,
            description: 'Call to Action Button'
          },
          fields: [CTA()]
        }
      ]
    },
    {
      name: 'footer',
      label: 'Footer',
      type: 'group',
      fields: [
        {
          name: 'footerLogo',
          label: 'Footer Logo',
          type: 'upload',
          relationTo: 'images',
          admin: {
            description: 'Logo for footer. Prefer `.svg`'
          }
        },
        {
          name: 'copyright',
          label: 'Copyright',
          type: 'richText'
        },
        {
          name: 'legalDisclaimer',
          label: 'Legal Disclaimer',
          type: 'richText'
        },
        {
          ...flatMenu,
          name: 'footerMenu',
          label: 'Footer Menu Links'
        }
      ]
    }
  ]
};

export default Nav;
