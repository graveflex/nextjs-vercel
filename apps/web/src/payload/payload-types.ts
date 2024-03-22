/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export type MenuItems =
  | {
      label: string;
      slug: string;
      type?: ('link' | 'button') | null;
      id?: string | null;
    }[]
  | null;

export interface Config {
  collections: {
    pages: Page;
    users: User;
    images: Image;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    nav: Nav;
  };
}
export interface Page {
  id: number;
  seoConfig?: {
    title?: string | null;
    description?: string | null;
    keywords?: string | null;
  };
  pageConfig: PageConfigType;
  blocks?: (FAQBlockT | TextImageBlockT | HeroBlockT)[] | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface PageConfigType {
  slug: string;
  theme?: ('light' | 'dark') | null;
}
export interface FAQBlockT {
  blockConfig?: {
    theme?: ('light' | 'dark') | null;
    hidden?: boolean | null;
  };
  title?: string | null;
  subTitle?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  items?:
    | {
        title?: string | null;
        subTitle?: {
          root: {
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            type: string;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'faqBlock';
}
export interface TextImageBlockT {
  blockConfig?: {
    theme?: ('light' | 'dark') | null;
    hidden?: boolean | null;
    layout?: ('imgRight' | 'imgLeft') | null;
  };
  title?: string | null;
  content?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  image?: number | Image | null;
  cta?: CTAType;
  id?: string | null;
  blockName?: string | null;
  blockType: 'textImageBlock';
}
export interface Image {
  id: number;
  alt?: string | null;
  imageProps?: {
    fill?: boolean | null;
    priority?: boolean | null;
    quality?: number | null;
  };
  additionalProps?: {
    style?: string | null;
    isRounded?: boolean | null;
    aspectRatio?: ('6/7' | '7/6' | '1/1' | '3/2' | '16/9' | 'initial') | null;
  };
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    mobile?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    desktop?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    ultrawide?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
export interface CTAType {
  label?: string | null;
  href?: string | null;
}
export interface HeroBlockT {
  blockConfig?: {
    theme?: ('light' | 'dark') | null;
    hidden?: boolean | null;
    layout?: ('bg' | 'imgRight' | 'imgLeft' | 'imgRightFull' | 'imgLeftFull') | null;
  };
  image?: number | Image | null;
  eyebrow?: string | null;
  title?: string | null;
  subTitle?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  input?: InputType;
  cta?: CTAType;
  id?: string | null;
  blockName?: string | null;
  blockType: 'heroBlock';
}
export interface InputType {
  placeholder?: string | null;
  type?: 'text' | null;
}
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface Nav {
  id: number;
  header?: {
    logo?: number | Image | null;
    main?: MenuItems;
  };
  footer?: {
    copyright?: string | null;
    secondary?: MenuItems;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}