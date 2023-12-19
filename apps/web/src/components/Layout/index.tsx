/* eslint-disable @next/next/no-async-client-component */

'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';
import { styled } from "styled-components";

import Footer from 'ui/components/Footer'; // TODO: make local component
import Header from 'ui/components/Header'; // TODO: make local component

import fetchPayloadData from '@web/lib/fetchPayloadData';

export type LayoutType = {};
// TODO: refactor to have `navigation` global
const Container = styled.div``;

async function Layout({ children }: PropsWithChildren<LayoutType>) {
  const [headerData, footerData] = await Promise.all([
    fetchPayloadData((client) => client.findGlobal({ slug: 'header' })),
    fetchPayloadData((client) => client.findGlobal({ slug: 'footer' }))
  ]);

  if ('error' in headerData || 'error' in footerData) {
    return null;
  }

  return (
    <Container>
      <Header {...headerData} />
      {children}
      <Footer {...footerData} />
    </Container>
  );
}

export default Layout;
