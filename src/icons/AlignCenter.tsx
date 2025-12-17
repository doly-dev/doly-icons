import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![align-center](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxYS41LjUgMCAwIDEgLjUuNVY2aC0xVjEuNUEuNS41IDAgMCAxIDggMW0wIDE0YS41LjUgMCAwIDEtLjUtLjVWMTBoMXY0LjVhLjUuNSAwIDAgMS0uNS41TTIgN2ExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMXoiLz4KPC9zdmc+)*/
const AlignCenter: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="align-center"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1m0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default AlignCenter;
