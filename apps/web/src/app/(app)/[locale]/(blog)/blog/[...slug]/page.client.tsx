import type { Post } from '@mono/types/payload-types';
import BlogDetail from '@mono/ui/components/BlogDetail';
import React from 'react';

function PageTemplate({ post }: { post: Post }) {
  return (
      <BlogDetail postData={post} />
  );
}

export default PageTemplate;
