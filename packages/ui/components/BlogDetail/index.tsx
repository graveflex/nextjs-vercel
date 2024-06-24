'use client';

import React from 'react';
import type { Author, Image, Post, Tag } from '@mono/types/payload-types';
import PayloadDate from '@mono/ui/components/primitives/PayloadDate';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import RenderIcon from '@mono/ui/components/RenderIcon';
import Wrapper from '@mono/ui/components/Wrapper';
import StaticTag from "@mono/ui/components/StaticTag";
import styled, { css } from '@refract-ui/sc';

/* Figma 2/3 of container */
const commonWidth = css`
  ${({ theme: { mq } }) => mq.lg`
    width: calc(100% * 2 / 3);
  `}
`;

const IconText = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  line-height: 1;

  ${({ theme: { spacing } }) => css`
    gap: ${spacing[2]}rem;
  `}
`;

const JobText = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;

  ${({ theme: { spacing } }) => css`
    gap: ${spacing[2]}rem;
  `}
`;

const SubTitle = styled.h2({ c: 'primary' })`
  font-size: 1.625rem;
  margin: 0;
  ${commonWidth};
`;

const Title = styled.h1({ c: 'secondary' })`
  margin: 0;
  letter-spacing: 1.65px;
  text-transform: uppercase;
`;

const RowContainer = styled.div`
  display: flex;

  ${({ theme: { spacing } }) => css`
    gap: ${spacing[9]}rem;
  `}
`;

const RowContainerTags = styled(RowContainer)`
  ${({ theme: { spacing } }) => css`
    gap: ${spacing[3]}rem;
  `}
`;

const InfoWrapper = styled.div`
  display: grid;

  ${({ theme: { spacing } }) => css`
    gap: ${spacing[5]}rem;
  `}
`;

const BlogHeader = styled.div`
  display: grid;
  ${commonWidth};

  ${({ theme: { spacing } }) => css`
    margin-bottom: ${spacing[9]}rem;
    gap: ${spacing[9]}rem 0;
  `}
`;

const ContentWrapper = styled.div`
  ${commonWidth};
  margin-bottom: 3.75rem;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0 0 2.125rem;
  }
`;

const ImageStyled = styled(ResponsivePayloadImage)`
  object-fit: cover;
  margin-bottom: 3.75rem;

  img {
    border-radius: 2.125rem;
    width: 100%;
  }

  &.staff-image {
    max-width: 360px;
  }
`;

export type BlogDetailType = {
  postData: Post | Author;
};

function RowDateAuthor(date: string, authors: (Author | number)[]) {
  if (!date || !authors) {
    return null;
  }
  return (
    <RowContainer>
      <IconText>
        <RenderIcon name="ArrowRight" size="25" />
        <PayloadDate input={date} format="MM/dd/yyyy" />
      </IconText>
      {authors?.map((author, i) => {
        const { fullName, id } = author as Author;
        const key = `${id}-author-${i}`;

        return (
          <IconText key={key}>
            <RenderIcon name="Person" size="25" />
            <p>{fullName}</p>
          </IconText>
        );
      })}
    </RowContainer>
  );
}

function RowTags(tags: (Tag | number)[]) {
  if (!Array.isArray(tags)) {
    return null;
  }
  return (
    <RowContainerTags>
      {tags?.map((tag, i) => {
        const { label } = tag as Tag;
        const key = `${label}-tag-${i}`;

        return <StaticTag label={label} key={key} />;
      })}
    </RowContainerTags>
  );
}

const defaultImageProps = (coverImage: Image | number) => {
  if (typeof coverImage === 'number') {
    return coverImage;
  }

  return {
    ...coverImage,
    image: coverImage,
    imageProps: {
      fill: true,
      priority: true
    }
  };
};

function BlogDetail({ postData }: BlogDetailType) {
  function Content(content: Post['content']) {
    if (!content) {
      return null;
    }

    return content?.map(
      ({ content: c, id }) => {
        if (!c) {
          return null;
        }
        return (
          <div key={id}>
            <RichText {...c} />
          </div>
        );
      }
    );
  }
  const { title, subTitle, date, authors, tags, coverImage, content } =
      (postData as Post) ?? {};

    return (
      <Wrapper contentWidth="xxl">
        <BlogHeader>
          {title && <Title>{title}</Title>}
          {subTitle && <SubTitle>{subTitle}</SubTitle>}
          <InfoWrapper>
            {authors && RowDateAuthor(date, authors)}
            {tags && RowTags(tags)}
          </InfoWrapper>
        </BlogHeader>
        {coverImage && <ImageStyled image={defaultImageProps(coverImage)} />}
        <ContentWrapper>{Content(content)}</ContentWrapper>
      </Wrapper>
    );
}

export default BlogDetail;
