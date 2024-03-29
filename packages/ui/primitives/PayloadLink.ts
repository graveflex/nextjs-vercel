import type { PayloadButtonProps } from './PayloadButton';

export type PayloadLinkProps = {
  href?: string;
  text: string;
  style?: Partial<PayloadButtonProps>;
  newTab?: boolean;
  linkType?: string;
};
