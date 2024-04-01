import type { LinkProps } from 'next/link';

export type PayloadLinkProps = LinkProps & {
  text: string;
  newTab?: boolean;
  linkType?: string;
};
