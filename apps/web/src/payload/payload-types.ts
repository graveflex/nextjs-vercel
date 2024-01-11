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
  pageConfig?: PageConfigType;
  blocks?: HeroBlockT[] | null;
  updatedAt: string;
  createdAt: string;
}
export interface PageConfigType {
  slug?: string | null;
}
export interface HeroBlockT {
  title?: string | null;
  subTitle?: string | null;
  cta: CTAType;
  background?: number | Image | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'heroBlock';
}
export interface CTAType {
  label: string;
  href: string;
}
export interface Image {
  id: number;
  alt?: string | null;
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