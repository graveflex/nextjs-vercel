/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MenuItems".
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
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  pageTitle: string;
  slug?: string | null;
  theme?: ('light' | 'dark') | null;
  seoConfig?: {
    title?: string | null;
    description?: string | null;
    keywords?: string | null;
  };
  publishedAt?: string | null;
  blocks?: (FAQBlockT | TextImageBlockT | HeroBlockT)[] | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FAQBlockT".
 */
export interface FAQBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
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
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TextImageBlockT".
 */
export interface TextImageBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
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
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images".
 */
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
    objectFit?: ('cover' | 'contain' | 'fill' | 'scale-down') | null;
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
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CTAType".
 */
export interface CTAType {
  label?: string | null;
  href?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlockT".
 */
export interface HeroBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
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
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "InputType".
 */
export interface InputType {
  placeholder?: string | null;
  type?: 'text' | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
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
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
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
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nav".
 */
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