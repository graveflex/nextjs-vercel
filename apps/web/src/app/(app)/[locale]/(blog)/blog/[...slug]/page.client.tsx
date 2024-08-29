'use client';

import type { Nav, Post } from '@mono/types/payload-types';
import BlogDetail from '@mono/ui/components/BlogDetail';
import Layout from '@mono/web/globals/Layout';
import React from 'react';

function PageTemplate({ post, nav }: { post: Post; nav: Nav }) {
  return (
    <Layout {...nav}>
      <BlogDetail postData={post} />
    </Layout>
  );
}

export default PageTemplate;
