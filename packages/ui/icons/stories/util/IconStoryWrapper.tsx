import React from 'react';

interface T {
  icons: Record<string, Parameters<typeof React.createElement>[0]>;
  size?: string;
  group: string;
  color?: string;
}

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
    <div>
      <h3>{title}</h3>
      <p>These are project specific icons imported from designs.</p>
      <br />
      -- METHOD ONE
      <br />
      They can be imported & used just like normal React components.
      <code>
        {`import Quote from "@mono/ui/icons/core/Quote";`}
        <br />
        ... <br />
        {'<Quote />'}
        <br />
        {"<Quote height='20' width='20' color='red' />"}
      </code>
      <br />
      -- METHOD TWO
      <p>
        They can also be used with the RenderIcon component. To use it, pass in
        the icon name as a string and the component will render the
        corresponding icon, for example:
      </p>
      <code>
        {`import RenderIcon from '@mono/ui/components/RenderIcon';`}
        <br />
        ... <br />
        {`<RenderIcon name='${Object.keys(icons)?.[0]}'/>`}
        <br />
        {`<RenderIcon name='${
          Object.keys(icons)?.[0]
        }' height='20' width='20' color='red'/>`}
      </code>
      <div>
        {Object.entries(icons).map(([key, val]) => (
          <div key={`icon-${key}`}>
            <div>{React.createElement(val, options)}</div>
            <div>{key}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryContainer;
