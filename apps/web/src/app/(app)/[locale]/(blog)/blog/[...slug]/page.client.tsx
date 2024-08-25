'use client';

import { WEB_URL } from '@mono/settings';
import type { Nav, Post } from '@mono/types/payload-types';
import BlogDetail from '@mono/ui/components/BlogDetail';
import Layout from '@mono/web/globals/Layout';
import useLivePreview from '@mono/web/hooks/useLivePreview';
import React from 'react';

function PageTemplate({ post, nav }: { post: Post; nav: Nav }) {
  const { data } = useLivePreview<Post>({
    initialData: post,
    serverURL: WEB_URL,
    depth: 1
  });

  return (
    <Layout {...nav}>
      <BlogDetail postData={data} />
    </Layout>
  );
}

export default PageTemplate;
