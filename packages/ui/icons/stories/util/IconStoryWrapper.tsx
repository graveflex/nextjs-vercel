'use client';

import React from 'react';
import styled, { css } from 'styled-components';

interface T {
  icons: Record<string, Parameters<typeof React.createElement>[0]>;
  size?: string;
  group: string;
  color?: string;
}

const Container = styled.div`
  max-width: 850px;
  margin: auto;
  padding: 20px;
`;

const Code = styled.code`
  ${({ theme: { themeColors } }) => css`
    background: #f4f4f4 !important;
    border-left: 3px solid ${themeColors.secondary};
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
  `}
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-gap: 0.5rem;
  margin-top: 3rem;
`;

const Card = styled.div`
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  background-color: #f7f7f7;
  width: 107px;
  height: 107px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h6`
  color: rgb(96, 95, 96);
  font-size: 1rem !important;
  padding: 0;
  margin: 10px 0 0 0;
`;

const Name = styled.p`
  color: rgb(33, 33, 33);
  padding: 0 !important;
  margin: 0 !important;
  font-size: 0.8rem;
`;

const StoryContainer: React.FC<T> = ({ icons, size, group, color }) => {
  let options = {};
  if (size) {
    options = {
      height: size,
      width: size,
      color
    };
  }

  let title = `${group} icons`;
  if (size) {
    title += `: ${size}px`;
  }

  return (
    <Container>
      <h3>{title}</h3>
      <p>
        These are project specific icons to be used on the site, and in other
        electronic media such as email.
      </p>
      <p>
        These icon components were auto-generated to match their base level svg
        files via the @svgr/cli package. They can be imported & used just like
        normal React components.
      </p>
      <Code>
        -- Example Usage
        <br />
        {`import Quote from "@mono/ui/icons/core/Quote";`}
        <br />
        ... <br />
        <br />
        {'<Quote />'}
        <br />
        {"<Quote height='20' width='20' viewBox='0 0 20 20' color='red' />"}
      </Code>
      <p>
        They can also be used with the RenderIcon component. To use it, pass in
        the icon name and group name as strings and the component will render
        the corresponding icon, for example:
      </p>
      <Code>
        {`import RenderIcon from '@mono/ui/components/RenderIcon';`}
        <br />
        ... <br />
        {`<RenderIcon name='${Object.keys(icons)?.[0]}'/>`}
      </Code>
      <Content>
        {Object.entries(icons).map(([key, val]) => (
          <Card key={`icon-${key}`}>
            <IconContainer>{React.createElement(val, options)}</IconContainer>
            <Heading>Name</Heading>
            <Name>{key}</Name>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default StoryContainer;
