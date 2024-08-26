'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalResets = createGlobalStyle`
  button {
    -webkit-appearance: none;
    border-radius: 0;
    text-align: inherit;
    background: none;
    box-shadow: none;
    padding: 0;
    cursor: pointer;
    border: none;
    color: inherit;
    font: inherit;
  }

  a.button {
    text-decoration: none;
  }
`;

export default GlobalResets;
