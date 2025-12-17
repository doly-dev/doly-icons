import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hearts](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjkzMS40ODFjMS42MjctMS42NzEgNS42OTIgMS4yNTQgMCA1LjAxNS01LjY5Mi0zLjc2LTEuNjI2LTYuNjg2IDAtNS4wMTVtNi44NCAxLjc5NGMxLjA4NC0xLjExNCAzLjc5NS44MzYgMCAzLjM0My0zLjc5NS0yLjUwNy0xLjA4NC00LjQ1NyAwLTMuMzQzTTcuODQgNy42NDJjMi43MS0yLjc4NiA5LjQ4NiAyLjA5IDAgOC4zNTgtOS40ODctNi4yNjgtMi43MS0xMS4xNDQgMC04LjM1OCIvPgo8L3N2Zz4=)*/
const Hearts: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hearts"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"/>
</svg>
      )}
    />
  );

export default Hearts;
