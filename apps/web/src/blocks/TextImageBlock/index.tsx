'use client';

import type {
  Image,
  TextImageBlockT as PayloadType
} from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import FormWrapper from '@mono/ui/components/FormWrapper';
import Video from '@mono/ui/components/Video';
import Wrapper from '@mono/ui/components/Wrapper';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import TextInput from '@refract-ui/hook-fields/TextInput';
import s, { css } from '@refract-ui/sc';
import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';

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

    ${
      $layout === 'imgLeftCenter' &&
      css`
      gap: 0;
    `
    }

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


  ${mq.lg`
      ${
        ($layout === 'imgLeftCenter' || $layout === 'imgLeft') &&
        css`
          margin-left: auto;
        `
      }

      ${
        $layout === 'imgRight' &&
        css`
          margin-right: auto;
        `
      }
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

    ${
      $layout === 'imgLeftCenter' &&
      css`
      text-align: center;
      margin: auto;
      max-width: 24rem;

      ${mq.lg`
        text-align: left;
        max-width: unset;
      `}
    `
    }

    ${
      ($layout === 'imgLeft' || $layout === 'imgRight') &&
      css`
      text-align: left;
    `
    }
  `}
`;

const ImageWrapper = s(ResponsivePayloadImage)<{ $layout: string }>`
  ${({ $layout, theme: { mq, allColors } }) => css`
    grid-area: image;
    overflow: hidden;
    align-self: center;
    background-color: ${allColors.color4};
    min-height: 12rem;
    border: 2px solid green;

    img {
      max-width: 100%;
      height: auto;
    }

    ${mq.md`
      border: 2px solid yellow;
      min-height: 30rem;

      img {
        max-width: 100%;
        height: auto;
      } 
    `}

    ${mq.lg`
      border: 2px solid blue;
      min-height: 22rem;
      img {
        max-width: 35rem
        height: 35rem;
      }

      ${
        ($layout === 'imgLeftCenter' || $layout === 'imgLeft') &&
        css`
          margin-right: auto;
        `
      }

      ${
        $layout === 'imgRight' &&
        css`
          margin-left: auto;
        `
      }
    `}
    ${mq.xl`
      border: 2px solid red;
      min-width: unset;
      min-height: 30rem;

      img {
        max-width: 40rem;
        width: 40rem;
      }
    `}
  `}
`;

const VideoWrapper = s.div<{ $layout: string }>`
  ${({ $layout }) => css`
    display: flex;
    grid-area: image;
    overflow: hidden;
    align-self: center;

    ${
      ($layout === 'imgLeftCenter' || $layout === 'imgLeft') &&
      css`
      margin-left: auto;
    `
    }

    ${
      $layout === 'imgRight' &&
      css`
      margin-right: auto;
    `
    }
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
    image
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

    return items.map(({ cta, id }) => {
      if (!cta) {
        return null;
      }
      return (
        <span key={id}>
          {cta?.link?.label && <CtaButton cta={cta} color="primary" />}
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
          {form?.textinput?.placeholder && form?.cta && (
            <InputWrapper
              onSubmit={(data) => console.info(data)}
              cta={form?.cta}
            >
              <Controller
                name={form?.textinput?.name || 'textInput'}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextInput
                    label={form?.textinput?.label || undefined}
                    placeholder={form?.textinput?.placeholder || undefined}
                    helpText={form?.textinput?.helpText}
                    {...field}
                  />
                )}
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
