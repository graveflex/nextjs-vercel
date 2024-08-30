'use client';

import React from 'react';
import styled, { css } from '@refract-ui/sc';

interface T {
  icons: Record<string, Parameters<typeof React.createElement>[0]>;
  size?: string;
  group: string;
  color?: string;
}

const Container = styled.div`
  max-width: 850px;
  margin: auto;
  padding: 1.25rem;
`;

const Code = styled.code`
  ${({ theme: { themeColors } }) => css`
    background: #f4f4f4 !important;
    border-left: 3px solid ${themeColors.secondary};
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 1rem;
    line-height: 1.6;
    max-width: 100%;
    overflow: auto;
    padding: 1rem 1.5rem;
    display: block;
    margin-top: 1.5rem;
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
  margin-bottom: 1.25rem;
`;

const IconContainer = styled.div`
  background-color: #f7f7f7;
  width: 6.5rem;
  height: 6.5rem;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h6`
  color: rgb(96, 95, 96);
  font-size: 0.75rem;
  padding: 0;
  margin: 0.5rem 0 0 0;
`;

function StoryContainer({ icons, size, group, color }: T) {
  let options = {};
  if (size) {
    options = {
      height: size,
      width: size,
      color
    };
  }

  let title = `${group.toUpperCase()} ICONS`;
  if (size) {
    title += `: ${size}px`;
  }

  return (
    <Container>
      <h3>{title}</h3>
      <p>These are project specific icons imported from designs.</p>
      <br />
      -- METHOD ONE
      <br />
      They can be imported & used just like normal React components.
      <Code>
        {`import Quote from "@mono/ui/icons/core/Quote";`}
        <br />
        ... <br />
        {'<Quote />'}
        <br />
        {"<Quote height='20' width='20' color='red' />"}
      </Code>
      <br />
      -- METHOD TWO
      <p>
        They can also be used with the RenderIcon component. To use it, pass in
        the icon name as a string and the component will render the
        corresponding icon, for example:
      </p>
      <Code>
        {`import RenderIcon from '@mono/ui/components/RenderIcon';`}
        <br />
        ... <br />
        {`<RenderIcon name='${Object.keys(icons)?.[0]}'/>`}
        <br />
        {`<RenderIcon name='${
          Object.keys(icons)?.[0]
        }' height='20' width='20' color='red'/>`}
      </Code>
      <Content>
        {Object.entries(icons).map(([key, val]) => (
          <Card key={`icon-${key}`}>
            <IconContainer>{React.createElement(val, options)}</IconContainer>
            <Name>{key}</Name>
          </Card>
        ))}
      </Content>
    </Container>
  );
}

export default StoryContainer;
