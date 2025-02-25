import type React from 'react';
import type { ResponsivePayloadWrapperProps } from '../ResponsivePayloadImage';
import serializeText from './utils/serializeText';

export type SerializedPayloadNode = {
  children?: SerializedPayloadNode[];
  direction?: string;
  format?: number | string;
  indent?: string | number;
  type: string;
  version: number;
  style?: string;
  mode?: string;
  text?: string;
  fields?: {
    type: string;
    internalUrl?: {
      slug: string;
    };
    externalUrl?: string;
    emailUrl?: string;
    phoneUrl?: string;
    newTab?: boolean;
    file?: {
      id: string;
      url: string;
    };
  };
  tag?: string;
  value?: string | ResponsivePayloadWrapperProps;
};

type BaseRichTextProps = {
  className?: string;
};

export type PayloadRichTextProps =
  | {
      root: {
        children: SerializedPayloadNode[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        type: string;
        version: number;
      };
      [k: string]: unknown;
      className?: string;
      $isSubHeadSans?: boolean;
      $subHeadColor?: string;
    }
  | (null & BaseRichTextProps);

function RichText({
  className,
  ...content
}: PayloadRichTextProps): React.JSX.Element {
  return <div className={className}>{serializeText(content)}</div>;
}

export default RichText;
