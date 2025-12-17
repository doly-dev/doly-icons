import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-vr](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgM2ExIDEgMCAwIDEgMSAxdjhhMSAxIDAgMCAxLTEgMUgyYTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xek0yIDJhMiAyIDAgMCAwLTIgMnY4YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTJ6Ii8+CiAgPHBhdGggZD0iTTQuNTA4IDExaDEuNDI5bDEuOTktNS45OTlINi42MUw1LjI3NyA5LjcwOEg1LjIyTDMuODc1IDUuMDAxSDIuNXptNi4zODctNS45OTlIOC41VjExaDEuMTczVjguNzYzaDEuMDY0TDExLjc4NyAxMWgxLjMyN0wxMS45MSA4LjU4M0MxMi40NTUgOC4zNzMgMTMgNy43NzkgMTMgNi45YzAtMS4xNDctLjc3My0xLjktMi4xMDUtMS45em0tMS4yMjIgMi44N1Y1LjkzM2gxLjA1Yy42MyAwIDEuMDUuMzQ3IDEuMDUuOTg5IDAgLjYzMy0uNDA4Ljk1LTEuMDY3Ljk1eiIvPgo8L3N2Zz4=)*/
const BadgeVr: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-vr"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
  <path d="M4.508 11h1.429l1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5zm6.387-5.999H8.5V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9zm-1.222 2.87V5.933h1.05c.63 0 1.05.347 1.05.989 0 .633-.408.95-1.067.95z"/>
</svg>
      )}
    />
  );

export default BadgeVr;
