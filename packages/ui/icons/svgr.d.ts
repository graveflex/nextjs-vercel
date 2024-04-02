declare module '*.svg' {
  import React = require('react');

  interface Icon {
    height: string;
    width: string;
    viewBox: string;
    color: string;
  }

  const ReactComponent: React.FC<Icon>;
  export default ReactComponent;
}
