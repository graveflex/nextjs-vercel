'use client';

import React from 'react';
import { Controller } from 'react-hook-form';
import type { HeroBlockT as PayloadType } from '@mono/types/payload-types';
import CtaButton from '@mono/ui/components/CtaButton';
import FormWrapper from '@mono/ui/components/FormWrapper';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/ui/components/Wrapper';
import TextInput from '@refract-ui/hook-fields/TextInput';
import s, { css } from '@refract-ui/sc';

export type HeroBlockProps = Omit<PayloadType, 'blockType'>;

const InnerWrapper = s.div<{
  $hasImage: boolean;
  $layout: string;
}>`
  ${({ $layout, $hasImage, theme: { mq } }) => css`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 3rem;
    width: 100%;
    margin: auto;

    ${mq.lg`
      ${
        ($layout === 'contentLeft' || $layout === 'contentRight') &&
        $hasImage &&
        css`
          grid-template-columns: 1fr 1fr;
        `
      }
      ${
        $layout === 'contentCenter' &&
        !$hasImage &&
        css`
          grid-template-columns: 1fr;
        `
      }
    `}
  `}
`;

const Eyebrow = s.span({ t: 'h6', c: 'fg' })`
`;

const Content = s(RichText)<{ $hasImage: boolean }>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 2rem 0;
  }
`;

const ContentWrapper = s.div<{
  $isFullBleed: boolean;
  $hasImage: boolean;
  $contentAlign: string;
  $layout: string;
}>`
  ${({ $contentAlign, $isFullBleed, $hasImage, $layout, theme: { mq } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: ${$hasImage ? 'unset' : '80%'};
    order: 1;

    ${$contentAlign === 'center' &&
    css`
      text-align: center;
      margin: 0 auto;
    `}

    ${($contentAlign === 'left' || $contentAlign === 'right') &&
    css`
      margin: 0 auto 0 0;
    `}

    ${mq.lg`
      ${
        $layout === 'contentLeft' &&
        css`
          order: 0;
          margin: ${$hasImage ? '0 auto 0 0' : '0 auto 0 0'};
          padding: ${$isFullBleed ? '0 0 0 2rem' : '0'};
        `
      }

      ${
        $layout === 'contentRight' &&
        css`
          order: 1;
          margin: ${$hasImage ? '0 0 0 auto' : '0 0 0 auto'};
          padding: ${$isFullBleed ? '0 2rem 0 0' : '0'};
        `
      }

      ${
        ($layout === 'contentCenter' || $contentAlign === 'center') &&
        css`
          margin: 0 auto;
          padding: ${$isFullBleed ? '0 2rem' : '0'};
        `
      }
    `}
  `}
`;

const ImageWrapper = s(ResponsivePayloadImage)<{ $layout: string }>`
  ${({ $layout, theme: { mq, allColors } }) => css`
    img {
      max-width: 100%;
      min-width: 100%;
      height: auto;
    }

    margin: 0 auto;
    min-width: 100%;
    background-color: ${allColors.color4};
    min-height: 12rem;

    ${mq.md`
      min-height: 30rem;
    `}

    ${mq.lg`
      min-width: unset;

      ${
        $layout === 'contentLeft' &&
        css`
          margin: 0 auto 0 0;
          img {
            max-width: 35rem;
            width: 35rem;
          }
        `
      }
      ${
        $layout === 'contentRight' &&
        css`
          margin: 0 0 0 auto;
          img {
            max-width: 35rem;
            width: 35rem;
          }
        `
      }
    `}

    ${mq.xl`
       ${
         ($layout === 'contentLeft' || $layout === 'contentRight') &&
         css`
           min-width: unset;

           img {
             max-width: 40rem;
             width: 40rem;
           }
         `
       }
    `}
  `}
`;

const InputWrapper = s(FormWrapper)<{ $contentAlign: string }>`
  form {
    display: flex;
    justify-content: ${({ $contentAlign }) =>
      $contentAlign === 'center' ? 'center' : 'flex-start'};
    gap: 1.25rem;
    margin-top: 1rem;

    button { 
      height: fit-content;
      align-self: flex-end;
    }
  }
`;

const ButtonWrapper = s.div`
  gap: 1.25rem;
  margin-top: 1rem;
`;

function HeroBlock({
  eyebrow,
  content,
  form,
  cta,
  image,
  blockConfig,
  contentAlign,
  layout
}: HeroBlockProps) {
  const hasImage = typeof image !== 'undefined';

  const isFullBleed =
    typeof image === 'object' && typeof image?.imageProps?.fill === 'boolean'
      ? image?.imageProps?.fill
      : false;

  const contentPosition = layout || 'contentLeft';
  const alignText = contentAlign || 'left';

  return (
    <Wrapper
      {...blockConfig}
      gutter={isFullBleed ? false : 'blockH'}
      hidden={blockConfig?.hidden ?? false}
    >
      <InnerWrapper $layout={contentPosition} $hasImage={hasImage}>
        <ContentWrapper
          $layout={contentPosition}
          $isFullBleed={isFullBleed}
          $contentAlign={alignText}
          $hasImage={hasImage}
        >
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {content && <Content $hasImage={hasImage} {...content} />}
          {form?.textinput?.placeholder && form?.cta && (
            <InputWrapper
              onSubmit={(data) => console.info(data)}
              cta={form?.cta}
              $contentAlign={alignText}
            >
              <Controller
                name={form?.textinput?.name || 'name'}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextInput
                    label={form?.textinput?.label}
                    placeholder={form?.textinput?.placeholder || undefined}
                    helpText={form?.textinput?.helpText}
                    {...field}
                  />
                )}
              />
            </InputWrapper>
          )}
          {cta?.link?.label && (
            <ButtonWrapper>
              <CtaButton cta={cta} color="primary" />
            </ButtonWrapper>
          )}
        </ContentWrapper>
        <ImageWrapper image={image} $layout={contentPosition} />
      </InnerWrapper>
    </Wrapper>
  );
}

export default HeroBlock;
