'use client';

import React, { useMemo } from 'react';
import type {
  Image,
  TextImageBlockT as PayloadType
} from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import FormWrapper from '@mono/ui/components/FormWrapper';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import Video from '@mono/ui/components/Video';
import Wrapper from '@mono/ui/components/Wrapper';
import TextInput from '@refract-ui/hook-fields/TextInput';
import s, { css } from '@refract-ui/sc';

export type TextImageBlockType = Omit<PayloadType, 'blockType'>;

const BlockWrapper = s.div<{ $layout: string }>`
  ${({ $layout, theme: { mq } }) => css`
    display: grid;
    justify-self: center;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-areas:
      'image'
      'content';
    gap: 2rem;

    ${$layout === 'imgLeftCenter' &&
    css`
      gap: 0;
    `}

    ${mq.lg`
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      ${
        $layout === 'imgLeft' &&
        css`
          grid-template-areas: 'image content';
        `
      }

      ${
        $layout === 'imgRight' &&
        css`
          grid-template-areas: 'content image';
        `
      }
    `}
  `};
`;

const ContentWrapper = s.div<{ $hasButton: boolean; $layout: string }>`
  ${({ $layout, $hasButton, theme: { mq } }) => css`
    grid-area: content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;

    ${!$hasButton && 'margin-top: auto; gap: 0;'}

    ${$hasButton && 'align-self: center;'}

    ${($layout === 'imgLeftCenter' || $layout === 'imgLeft') &&
    css`
      margin-right: auto;
    `}

    ${$layout === 'imgRight' &&
    css`
      margin-left: auto;
    `}

    ${mq.lg`
      max-width: 70%
    `}
  `}
`;

const Content = s(RichText)<{ $layout: string }>`
  ${({ $layout, theme: { mq } }) => css`
    & > * {
      margin: 0;
    }

    h1,
    h2,
    h3 {
      margin-bottom: 1rem;
    }

    ${$layout === 'imgLeftCenter' &&
    css`
      text-align: center;
      margin: auto;
      max-width: 24rem;

      ${mq.lg`
        text-align: left;
        max-width: unset;
      `}
    `}

    ${($layout === 'imgLeft' || $layout === 'imgRight') &&
    css`
      text-align: left;
    `}
  `}
`;

const ImageWrapper = s(ResponsivePayloadImage)<{ $layout: string }>`
  ${({ $layout }) => css`
    grid-area: image;
    overflow: hidden;
    align-self: center;
    img {
      max-width: 100%;
      height: auto;
    }

    ${($layout === 'imgLeftCenter' || $layout === 'imgLeft') &&
    css`
      margin-left: auto;
    `}

    ${$layout === 'imgRight' &&
    css`
      margin-right: auto;
    `}
  `}
`;

const VideoWrapper = s.div<{ $layout: string }>`
  ${({ $layout }) => css`
    display: flex;
    grid-area: image;
    overflow: hidden;
    align-self: center;
    ${($layout === 'imgLeftCenter' || $layout === 'imgLeft') &&
    css`
      margin-left: auto;
    `}

    ${$layout === 'imgRight' &&
    css`
      margin-right: auto;
    `}
  `}
`;

const ButtonWrapper = s.div`
  display: flex;
  gap: 1rem;
`;

const InputWrapper = s(FormWrapper)`
  form {
    display: flex;
    gap: 1rem;
    button { 
      height: fit-content;
      align-self: flex-end;
    }
  }
`;

const defaultImageProps = (image: Image | number) => {
  if (typeof image === 'number') {
    return image;
  }

  return {
    ...image,
    image,
    imageProps: {
      fill: false
    }
  };
};

function TextImageBlock({
  content,
  layout,
  image,
  items,
  blockConfig,
  form,
  video
}: TextImageBlockType) {
  const buttonLayout = !!items?.length || !!form?.cta || false;
  const imgLayout = layout || 'imgRight';

  const Items = useMemo(() => {
    if (!items || !items.length) {
      return null;
    }

    return items.map(({ cta: t, id }) => {
      if (!t) {
        return null;
      }
      return (
        <span key={id}>
          {t?.link?.label && <CtaButton cta={t} color="primary" />}
        </span>
      );
    });
  }, [items]);
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <BlockWrapper $layout={imgLayout}>
        <ContentWrapper $hasButton={buttonLayout || false} $layout={imgLayout}>
          {content && <Content $layout={imgLayout} {...content} />}
          {items && <ButtonWrapper>{Items}</ButtonWrapper>}
          {form?.textinput && form?.cta && (
            <InputWrapper
              onSubmit={(data) => console.log(data)}
              cta={form?.cta}
            >
              <TextInput
                {...form?.textinput}
                name="TextInput"
                label="Label"
                placeholder="Placeholder"
              />
            </InputWrapper>
          )}
        </ContentWrapper>
        {image && !video && (
          <ImageWrapper $layout={imgLayout} image={defaultImageProps(image)} />
        )}
        {video && (
          <VideoWrapper $layout={imgLayout}>
            <Video video={video} />
          </VideoWrapper>
        )}
      </BlockWrapper>
    </Wrapper>
  );
}

export default TextImageBlock;
