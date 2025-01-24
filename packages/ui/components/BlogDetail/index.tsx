import type { Author, Image, Post, Tag } from '@mono/types/payload-types';
import RenderIcon from '@mono/ui/components/RenderIcon';
import StaticTag from '@mono/ui/components/StaticTag';
import Wrapper from '@mono/ui/components/Wrapper';
import PayloadDate from '@mono/ui/components/primitives/PayloadDate';
import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/ui/components/primitives/RichText';
import React from 'react';

export type BlogDetailType = {
  postData: Post | Author;
};

function RowDateAuthor(date: string, authors: (Author | number)[]) {
  if (!date || !authors) {
    return null;
  }
  return (
    <div>
      <div>
        <RenderIcon name="ArrowRight" size="25" />
        <PayloadDate input={date} format="MM/dd/yyyy" />
      </div>
      {authors?.map((author, i) => {
        const { fullName, id } = author as Author;
        const key = `${id}-author-${i}`;

        return (
          <div key={key}>
            <RenderIcon name="Person" size="25" />
            <p>{fullName}</p>
          </div>
        );
      })}
    </div>
  );
}

function RowTags(tags: (Tag | number)[]) {
  if (!Array.isArray(tags)) {
    return null;
  }
  return (
    <div>
      {tags?.map((tag, i) => {
        const { label } = tag as Tag;
        const key = `${label}-tag-${i}`;

        return <StaticTag label={label} key={key} />;
      })}
    </div>
  );
}

const defaultImageProps = (coverImage: Image | number) => {
  if (typeof coverImage === 'number') {
    return coverImage;
  }

  return {
    ...coverImage,
    image: coverImage
  };
};

function BlogDetail({ postData }: BlogDetailType) {
  function Content(content: Post['content']) {
    if (!content) {
      return null;
    }

    return content?.map(({ content: c, id }) => {
      if (!c) {
        return null;
      }
      return (
        <div key={id}>
          <RichText {...c} />
        </div>
      );
    });
  }
  const { title, subTitle, date, authors, tags, coverImage, content } =
    (postData as Post) ?? {};

  return (
    <Wrapper contentWidth="full">
      <div>
        {title && <div>{title}</div>}
        {subTitle && <div>{subTitle}</div>}
        <div>
          {authors && RowDateAuthor(date, authors)}
          {tags && RowTags(tags)}
        </div>
      </div>
      {coverImage && (
        <ResponsivePayloadImage
          image={defaultImageProps(coverImage)}
          sizes="100%"
        />
      )}
      <div>{Content(content)}</div>
    </Wrapper>
  );
}

export default BlogDetail;
