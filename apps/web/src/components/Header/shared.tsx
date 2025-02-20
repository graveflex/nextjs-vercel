import type { ButtonProps } from '@mono/web/components/ui/Button';
export type Link = {
  label?: string | null;
  href?: string;
  separator?: boolean;
  links?: Link[];
  variant?: ButtonProps['variant'];
};
