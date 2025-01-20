import type { FormBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import RichText from '@mono/ui/components/primitives/RichText';
import type React from 'react';

export type FormBlockProps = Omit<PayloadType, 'blockType'>;

export type Value = unknown;

export interface Property {
  [key: string]: Value;
}

export interface Data {
  [key: string]: Value | Property | Property[];
}

function FormBlock({ blockConfig, content }: FormBlockProps) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <div>{content && <RichText {...content} />}</div>
    </Wrapper>
  );
}

export default FormBlock;
