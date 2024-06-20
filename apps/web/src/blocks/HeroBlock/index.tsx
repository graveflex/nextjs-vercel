'use client';

import React from 'react';
import type { HeroBlockT as PayloadType } from '@mono/types/payload-types';
import FormWrapper from '@mono/ui/components/FormWrapper';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/ui/components/Wrapper';
import TextInput from '@refract-ui/hook-fields/TextInput';
import s, { css } from '@refract-ui/sc';

export type HeroBlockProps = Omit<PayloadType, 'blockType'>;

const StyledWrapper = s(Wrapper)``;

const InnerWrapper = s.div<{ $isFullBleed: boolean; $layout: string }>`
  ${({ $layout, $isFullBleed, theme: { mq } }) => css`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 3rem;
    width: 100%;
    z-index: 1;
    overflow: hidden;
    margin: auto;

    ${mq.lg`
      padding: ${$isFullBleed ? '0' : '0 3.125rem'};
      ${
        ($layout === 'contentLeft' || $layout == 'contentRight') &&
        css`
          grid-template-columns: 1fr 1fr;
        `
      }
      ${
        $layout === 'contentCenter' &&
        css`
          grid-template-columns: 1fr;
        `
      }
    `};
  `}
`;

const Eyebrow = s.span({ t: 'h6', c: 'fg' })`
`;

const Title = s.h1({ t: 'h1' })`
  margin: 0 0 1.25rem;
`;

const SubTitle = s(RichText)`
`;

const ContentWrapper = s.div<{
  $isFullBleed: boolean;
  $contentAlign: string;
  $layout: string;
}>`
  ${({ $contentAlign, $isFullBleed, $layout, theme: { mq } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 33.75rem;
    padding: 0 2rem;
    order: 1;

    ${$contentAlign === 'center' &&
    css`
      text-align: center;
      margin: 0 auto;
    `}

    ${($contentAlign === 'left' || $contentAlign == 'right') &&
    css`
      margin: 0 auto 0 0;
    `}

      ${mq.lg`
      ${
        $layout === 'contentLeft' &&
        css`
          order: 0;
          margin: 0 0 0 auto;
          padding: ${$isFullBleed ? '0 0 0 2rem' : '0'};
        `
      }

      ${
        $layout === 'contentRight' &&
        css`
          order: 1;
          margin: 0 auto 0 0;
          padding: ${$isFullBleed ? '0 2rem 0 0' : '0'};
        `
      }

      ${
        $layout === 'contentCenter' &&
        css`
          margin: 0 auto;
          padding: ${$isFullBleed ? '0 2rem' : '0'};
        `
      }
    `};
  `}
`;

const ImageWrapper = s(ResponsivePayloadImage)<{ $layout: string }>`
  ${({ $layout, theme: { mq } }) => css`
    img {
      max-width: 100%;
      min-width: 100%;
      height: auto;
    }

    margin: 0 auto;
    min-width: 100%;

    ${mq.lg`
      min-width: unset;
        ${
          $layout === 'contentLeft' &&
          css`
            margin: 0 auto 0 0;
          `
        }
        ${
          $layout === 'contentLeft' &&
          css`
            margin: 0 0 0 auto;
          `
        }
    `};
  `}
`;

const InputWrapper = s.div<{ $contentAlign: string }>`
  form {
  display: flex;
  justify-content: ${({ $contentAlign }) => ($contentAlign === 'center' ? 'center' : 'flex-start')};
  gap: 20px;
  margin-top: 1rem;
    button { 
      height: fit-content;
      align-self: flex-end;
    }
  }
`;

function HeroBlock({
  eyebrow,
  title,
  subTitle,
  cta,
  textinput,
  image,
  blockConfig,
  contentAlign,
  layout
}: HeroBlockProps) {
  const isFullBleed =
    typeof image === 'object' ? image?.imageProps?.fill : false;

  const contentPosition = layout || 'contentLeft';
  const alignText = contentAlign || 'left';

  return (
    <StyledWrapper
      gutter={false}
      {...blockConfig}
      hidden={blockConfig?.hidden ?? false}
    >
      <InnerWrapper
        $layout={contentPosition}
        $isFullBleed={isFullBleed || false}
      >
        <ContentWrapper
          $layout={contentPosition}
          $isFullBleed={isFullBleed || false}
          $contentAlign={alignText}
        >
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && <Title>{title}</Title>}
          {subTitle && <SubTitle {...subTitle} />}
          {textinput && cta && (
            <InputWrapper $contentAlign={alignText}>
              <FormWrapper onSubmit={(data) => console.log(data)} cta={cta}>
                <TextInput
                  {...textinput}
                  name="TextInput"
                  label="Label"
                  placeholder="Placeholder"
                />
              </FormWrapper>
            </InputWrapper>
          )}
        </ContentWrapper>
        <ImageWrapper image={image} $layout={contentPosition} />
      </InnerWrapper>
    </StyledWrapper>
  );
}

export default HeroBlock;
