'use client';

import type { ImageProps } from 'next/image';
import type React from 'react';
import { createContext, useContext } from 'react';

type TImagePriorityContext = {
  loading: ImageProps['loading'];
};

const ImagePriorityContext = createContext<TImagePriorityContext>({
  loading: 'lazy'
});

export function useImagePriorityContext() {
  return useContext(ImagePriorityContext);
}

interface ImagePriorityProviderProps {
  children: React.ReactNode;
  priority: ImageProps['loading'];
}

function ImagePriorityProvider({
  children,
  priority = 'lazy'
}: ImagePriorityProviderProps) {
  return (
    <ImagePriorityContext.Provider value={{ loading: priority }}>
      {children}
    </ImagePriorityContext.Provider>
  );
}

export default ImagePriorityProvider;
