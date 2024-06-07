import type { File, Page, PayLoadLink } from '@mono/types/payload-types';

export const ctaEvalHref = (link: PayLoadLink) => {
  switch (link.type) {
    case 'internal':
      return (link.internalHref as Page)?.slug;
    case 'external':
      return link.externalHref;
    case 'email':
      return `mailto:${link.emailHref}`;
    case 'phone':
      return `tel:${link.phoneHref}`;
    case 'file':
      return (link.fileHref as File)?.url;
    default:
      return `/`;
  }
};
