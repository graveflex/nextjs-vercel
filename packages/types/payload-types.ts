/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FlatMenu".
 */
export type FlatMenu =
  | {
      link?: PayLoadLink;
      id?: string | null;
    }[]
  | null;
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "IconNavItems".
 */
export type IconNavItems =
  | {
      href?: string | null;
      newTab?: boolean | null;
      icon?: IconSelect;
      id?: string | null;
    }[]
  | null;

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    pages: Page;
    posts: Post;
    authors: Author;
    tags: Tag;
    files: File;
    images: Image;
    videos: Video;
    users: User;
    redirects: Redirect;
    forms: Form;
    'form-submissions': FormSubmission;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    nav: Nav;
    'four-oh-four': FourOhFour;
  };
  locale: 'en-US' | 'es-US';
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
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
  blocks?:
    | (
        | FullBleedImageBlockT
        | IframeBlockT
        | IconGridBlockT
        | SectionHeaderBlockT
        | GalleryGridBlockT
        | VideoBlockT
        | FormBlockT
        | CardGridBlockT
        | MarkdownBlockT
        | FAQBlockT
        | TextImageBlockT
        | HeroBlockT
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FullBleedImageBlockT".
 */
export interface FullBleedImageBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
    backgroundColor?: ('fg' | 'neutral' | 'blue' | 'indigo' | 'purple') | null;
    backgroundImage?: number | Image | null;
    hidden?: boolean | null;
    contentWidth?: ('full' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') | null;
    p?: {
      xs?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      md?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      lg?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      xl?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
    };
  };
  image: number | Image;
  mobileImage?: number | Image | null;
  isBackground?: boolean | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'fullBleedImageBlock';
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
    objectFit?: ('cover' | 'contain' | 'fill' | 'scale-down') | null;
    isRounded?: boolean | null;
    aspectRatio?: ('1/1' | '3/2' | '4/3' | '6/7' | '16/9' | 'initial') | null;
  };
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
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
 * via the `definition` "IframeBlockT".
 */
export interface IframeBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
    backgroundColor?: ('fg' | 'neutral' | 'blue' | 'indigo' | 'purple') | null;
    backgroundImage?: number | Image | null;
    hidden?: boolean | null;
    contentWidth?: ('full' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') | null;
    p?: {
      xs?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      md?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      lg?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      xl?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
    };
  };
  title?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  iframe: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'iframeBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "IconGridBlockT".
 */
export interface IconGridBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
    backgroundColor?: ('fg' | 'neutral' | 'blue' | 'indigo' | 'purple') | null;
    backgroundImage?: number | Image | null;
    hidden?: boolean | null;
    contentWidth?: ('full' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') | null;
    p?: {
      xs?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      md?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      lg?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      xl?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
    };
  };
  layout?: ('horizontal' | 'vertical') | null;
  items?:
    | {
        image: number | Image;
        content: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        };
        cta?: CTAType;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'iconGridBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CTAType".
 */
export interface CTAType {
  link?: PayLoadLink;
  variant?: ('outline' | 'solid' | 'link') | null;
  color?: ('lightTheme' | 'darkTheme' | 'contrast') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payLoadLink".
 */
export interface PayLoadLink {
  type?: ('internal' | 'external' | 'email' | 'phone' | 'file') | null;
  label?: string | null;
  internalHref?: (number | null) | Page;
  externalHref?: string | null;
  emailHref?: string | null;
  phoneHref?: string | null;
  fileHref?: number | File | null;
  newTab?: boolean | null;
  icon?: IconSelect;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "files".
 */
export interface File {
  id: number;
  title: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "IconSelect".
 */
export interface IconSelect {
  name?:
    | (
        | 'Hamburger'
        | 'Check'
        | 'ArrowUp'
        | 'ArrowLeft'
        | 'ArrowRight'
        | 'ArrowDown'
        | 'CaretDown'
        | 'CaretUp'
        | 'CaretRight'
        | 'CaretLeft'
        | 'Close'
        | 'DoubleCaretDown'
        | 'DoubleCaretUp'
        | 'DoubleCaretRight'
        | 'DoubleCaretLeft'
        | 'Error'
        | 'LinkOut'
        | 'MinusSign'
        | 'Person'
        | 'PlusSign'
        | 'Quote'
        | 'Search'
        | 'SolidArrowDown'
        | 'SolidArrowUp'
        | 'SolidArrowRight'
        | 'SolidArrowLeft'
        | 'ArrowNesting'
      )
    | null;
  size?: ('35' | '30' | '25' | '20') | null;
  color?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SectionHeaderBlockT".
 */
export interface SectionHeaderBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
    backgroundColor?: ('fg' | 'neutral' | 'blue' | 'indigo' | 'purple') | null;
    backgroundImage?: number | Image | null;
    hidden?: boolean | null;
    contentWidth?: ('full' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') | null;
    p?: {
      xs?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      md?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      lg?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      xl?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
    };
  };
  eyebrow?: string | null;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  alignment?: ('center' | 'left' | 'right') | null;
  cta?: CTAType;
  id?: string | null;
  blockName?: string | null;
  blockType: 'sectionHeaderBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "GalleryGridBlockT".
 */
export interface GalleryGridBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
    backgroundColor?: ('fg' | 'neutral' | 'blue' | 'indigo' | 'purple') | null;
    backgroundImage?: number | Image | null;
    hidden?: boolean | null;
    contentWidth?: ('full' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') | null;
    p?: {
      xs?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      md?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      lg?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      xl?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
    };
  };
  galleryImages?:
    | {
        image?: number | Image | null;
        id?: string | null;
      }[]
    | null;
  cta?: CTAType;
  id?: string | null;
  blockName?: string | null;
  blockType: 'galleryGridBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "VideoBlockT".
 */
export interface VideoBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
    backgroundColor?: ('fg' | 'neutral' | 'blue' | 'indigo' | 'purple') | null;
    backgroundImage?: number | Image | null;
    hidden?: boolean | null;
    contentWidth?: ('full' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') | null;
    p?: {
      xs?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      md?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      lg?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      xl?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
    };
  };
  video?: number | Video | null;
  caption?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'videoBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "videos".
 */
export interface Video {
  id: number;
  title?: string | null;
  description?: string | null;
  publishedDate?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FormBlockT".
 */
export interface FormBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
    backgroundColor?: ('fg' | 'neutral' | 'blue' | 'indigo' | 'purple') | null;
    backgroundImage?: number | Image | null;
    hidden?: boolean | null;
    contentWidth?: ('full' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') | null;
    p?: {
      xs?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      md?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      lg?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      xl?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
    };
  };
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  form: number | Form;
  id?: string | null;
  blockName?: string | null;
  blockType: 'formBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
  id: number;
  title: string;
  fields?:
    | (
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            options?:
              | {
                  label: string;
                  value: string;
                  id?: string | null;
                }[]
              | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'select';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'text';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'textarea';
          }
      )[]
    | null;
  submitButtonLabel?: string | null;
  confirmationType?: ('message' | 'redirect') | null;
  confirmationMessage?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  redirect?: {
    url: string;
  };
  emails?:
    | {
        emailTo?: string | null;
        cc?: string | null;
        bcc?: string | null;
        replyTo?: string | null;
        emailFrom?: string | null;
        subject: string;
        message?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CardGridBlockT".
 */
export interface CardGridBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
    backgroundColor?: ('fg' | 'neutral' | 'blue' | 'indigo' | 'purple') | null;
    backgroundImage?: number | Image | null;
    hidden?: boolean | null;
    contentWidth?: ('full' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') | null;
    p?: {
      xs?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      md?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      lg?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      xl?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
    };
  };
  cards?:
    | {
        card: CardType;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'cardGridBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CardType".
 */
export interface CardType {
  image?: number | Image | null;
  eyebrow?: string | null;
  headline: string;
  subHead?: string | null;
  date?: string | null;
  ctas?:
    | {
        cta?: CTAType;
        id?: string | null;
      }[]
    | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MarkdownBlockT".
 */
export interface MarkdownBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
    backgroundColor?: ('fg' | 'neutral' | 'blue' | 'indigo' | 'purple') | null;
    backgroundImage?: number | Image | null;
    hidden?: boolean | null;
    contentWidth?: ('full' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') | null;
    p?: {
      xs?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      md?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      lg?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      xl?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
    };
  };
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  maxWidth?: ('1440px' | '1280px' | '992px' | '768px' | '576px' | '320px' | 'unset') | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'markdownBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FAQBlockT".
 */
export interface FAQBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
    backgroundColor?: ('fg' | 'neutral' | 'blue' | 'indigo' | 'purple') | null;
    backgroundImage?: number | Image | null;
    hidden?: boolean | null;
    contentWidth?: ('full' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') | null;
    p?: {
      xs?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      md?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      lg?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      xl?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
    };
  };
  header?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  textAlignment?: ('left' | 'center' | 'right') | null;
  items?:
    | {
        title?: string | null;
        content?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
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
    backgroundColor?: ('fg' | 'neutral' | 'blue' | 'indigo' | 'purple') | null;
    backgroundImage?: number | Image | null;
    hidden?: boolean | null;
    contentWidth?: ('full' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') | null;
    p?: {
      xs?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      md?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      lg?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      xl?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
    };
  };
  layout?: ('imgRight' | 'imgLeft') | null;
  image?: number | Image | null;
  video?: number | Video | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  items?:
    | {
        cta?: CTAType;
        id?: string | null;
      }[]
    | null;
  form?: {
    textinput?: TextInputType;
    cta?: CTAType;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: 'textImageBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TextInputType".
 */
export interface TextInputType {
  name?: string | null;
  placeholder?: string | null;
  helpText?: string | null;
  label?: string | null;
  required?: boolean | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlockT".
 */
export interface HeroBlockT {
  blockConfig?: {
    theme?: ('_' | 'light' | 'dark') | null;
    backgroundColor?: ('fg' | 'neutral' | 'blue' | 'indigo' | 'purple') | null;
    backgroundImage?: number | Image | null;
    hidden?: boolean | null;
    contentWidth?: ('full' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs') | null;
    p?: {
      xs?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      md?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      lg?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
      xl?: {
        paddingTop?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
        paddingBottom?: ('9.375rem' | '7.5rem' | '3.75rem' | '2.25rem' | '1.125rem' | 'unset') | null;
      };
    };
  };
  image?: number | Image | null;
  eyebrow?: string | null;
  layout?: ('contentRight' | 'contentLeft' | 'contentCenter') | null;
  contentAlign?: ('right' | 'left' | 'center') | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  form?: {
    textinput?: TextInputType;
    cta?: CTAType;
  };
  cta?: CTAType;
  id?: string | null;
  blockName?: string | null;
  blockType: 'heroBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: number;
  title: string;
  subTitle?: string | null;
  date: string;
  authors?: (number | Author)[] | null;
  tags?: (number | Tag)[] | null;
  ctas?:
    | {
        cta?: CTAType;
        id?: string | null;
      }[]
    | null;
  thumbnail: number | Image;
  coverImage: number | Image;
  content: {
    content?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    id?: string | null;
  }[];
  seoConfig?: {
    title?: string | null;
    description?: string | null;
    keywords?: string | null;
  };
  slug?: string | null;
  publishedAt?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "authors".
 */
export interface Author {
  id: number;
  slug?: string | null;
  fullName: string;
  image?: number | Image | null;
  jobTitle: string;
  bio?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: number;
  label: string;
  updatedAt: string;
  createdAt: string;
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
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects".
 */
export interface Redirect {
  id: number;
  from: string;
  to?: {
    type?: ('reference' | 'custom') | null;
    reference?:
      | ({
          relationTo: 'pages';
          value: number | Page;
        } | null)
      | ({
          relationTo: 'posts';
          value: number | Post;
        } | null);
    url?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
  id: number;
  form: number | Form;
  submissionData?:
    | {
        field: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
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
    banner?: BannerContent;
    collapsibleMenu?: CollapsibleMenu;
    flatMenu?: FlatMenu;
    iconItems?: IconNavItems;
    hasCta?: boolean | null;
    ctaButton?: {
      cta?: CTAType;
    };
  };
  footer?: {
    footerItems?: FooterItems;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BannerContent".
 */
export interface BannerContent {
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  background?: ('white' | 'black' | 'gray') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CollapsibleMenu".
 */
export interface CollapsibleMenu {
  sections?:
    | {
        label: string;
        links?:
          | {
              link?: PayLoadLink;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FooterItems".
 */
export interface FooterItems {
  footerLogo?: number | Image | null;
  copyright?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  legalDisclaimer?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  footerMenu?: FlatMenu;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "four-oh-four".
 */
export interface FourOhFour {
  id: number;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}