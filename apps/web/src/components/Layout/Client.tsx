'use client';

import React, { PropsWithChildren } from 'react';

import Footer from '@web/components/Footer';
import Header from '@web/components/Header';

interface IClient {
  navigation: object;
}

function Client({ navigation, children }: PropsWithChildren<IClient>) {
  return (
    <>
      <Header {...navigation} />
      {children}
      <Footer {...navigation} />
    </>
  );
}

export default Client;
