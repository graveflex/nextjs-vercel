import React from 'react';
import s, { css } from '@refract-ui/sc';
import { type DefaultTheme } from 'styled-components';

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
      $subHeadColor?: keyof DefaultTheme['colorTokens'];
    }
  | (null & BaseRichTextProps);

const RichTextWrapper = s.div`
  ${({ theme: { box } }) => css`
    h1 {
      ${box.t('h1')};
    }

    h2 {
      ${box.t('h2')};
    }

    h3 {
      ${box.t('h3')};
    }

    h4 {
      ${box.t('h4')};
    }

    h5 {
      ${box.t('h5')};
    }

    h6 {
      ${box.t('h6')};
    }
  `}
  

  //Picture scales with container maintaining aspect ratio
  picture {
    img {
      max-width: 100%;
      width: 100%;
      height: auto;
      margin: 1rem 0;
    }
  }
`;

function RichText({
  className,
  ...content
}: PayloadRichTextProps): React.JSX.Element {
  return (
    <RichTextWrapper className={className}>
      {serializeText(content)}
    </RichTextWrapper>
  );
}

export default RichText;
