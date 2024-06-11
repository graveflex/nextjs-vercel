import genRichText from '@mono/ui/utils/genRichText';
import path from 'path';
import { getPayload } from 'payload';
import { importConfig } from 'payload/node';
import { PayLoadLink, CTAType, IconSelect} from '@mono/types/payload-types';
import type { BasePayload, GeneratedTypes } from 'payload';

interface SeedFnProps {
  payload: BasePayload<GeneratedTypes>;
}

type linkEnum = PayLoadLink['type'];
type variantEnum = CTAType['variant'];
type iconEnum = IconSelect['name'];


const flatMenu = [
  {
    id: "666726dc5d637954321c2673",
    link: {
      type: "external" as linkEnum,
      label: "What we do",
      externalHref: "/about",
    }
  },
  {
    id: "666726dc5d637954321c2601",
    link: {
      type: "external" as linkEnum,
      label: "Services",
      externalHref: "/about",
    }
  },
  {
    id: "666726dc5d637954321c2605",
    link: {
      type: "external" as linkEnum,
      label: "Contact",
      externalHref: "/about",
    }
  },
  {
    id: "666726dc5d637954321c2609",
    link: {
      type: "external" as linkEnum,
      label: "Prices",
      externalHref: "/about",
    }
  }
];

const footerItems = [
  {
    id: "6667294f5d637954321c267a",
    link: {
      type: "external" as linkEnum,
      label: "Privacy Policy",
      externalHref: "/policy",
    }
  },
  {
    id: "6667295e5d637954321c267c",
    link: {
      type: "external" as linkEnum,
      label: "legal",
      externalHref: "/legal",
    }
  },
  {
    id: "6667296b5d637954321c267e",
    link: {
      type: "external" as linkEnum,
      label: "Terms of Service",
      externalHref: "/terms",
    }
  }
]

const cta = {
  cta: {
    link: {
      type: "external" as linkEnum,
      label: "Get a Demo",
      externalHref: "/demo",
    },
    variant: "rounded-outline" as variantEnum,
  }
};

const iconItems = [
  {
    id: "66686fc350e70cef0fbda9b4",
    href: "/shop",
    newTab: null,
    icon: {
      name: "Person" as iconEnum,
      size: "25" as IconSelect['size'],
      color: null
    }
  },
  {
    id: "66686fad50e70cef0fbda9b3",
    href: "/test",
    newTab: null,
    icon: {
      name: "Search" as iconEnum,
      size: "25" as IconSelect['size'],
      color: null
    }
  }
] 

const seedNavUsingPayload = async ({ payload }: SeedFnProps) => {
  console.info(`@-->seeding nav using payload!`);
  await payload.updateGlobal({
    slug: 'nav', // required
    data: {
      header: {
        flatMenu: flatMenu,
        hasCta: true,
        ctaButton: cta,
        iconItems: iconItems,
        banner: {
          content: {...genRichText([ { type: 'paragraph', text: 'Welcome to our Demo Repo' } ])},
          background: "black"
        },
      },
      footer: {
        footerItems: {
          copyright: {...genRichText([
            { type: 'paragraph', text: '© 2024 Mono. All rights reserved.'}
          ])},
          footerMenu: footerItems
        }
      }
    },
    depth: 2,
  })
};

const seed = async (): Promise<void> => {
  const configPath = path.resolve(__dirname, '../payload.config.ts');
  const config = await importConfig(configPath);
  const payload = await getPayload({ config });
  await seedNavUsingPayload({ payload });
  console.info('@-->successfully seeded the nav!');

  process.exit(0);
};

export default seed();
