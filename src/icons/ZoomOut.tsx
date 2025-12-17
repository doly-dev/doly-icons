import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![zoom-out](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjUgMTJhNS41IDUuNSAwIDEgMCAwLTExIDUuNSA1LjUgMCAwIDAgMCAxMU0xMyA2LjVhNi41IDYuNSAwIDEgMS0xMyAwIDYuNSA2LjUgMCAwIDEgMTMgMCIvPgogIDxwYXRoIGQ9Ik0xMC4zNDQgMTEuNzQycS4wNDQuMDYuMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMSAxIDAgMCAwLS4xMTUtLjEgNi41IDYuNSAwIDAgMS0xLjM5OCAxLjR6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyA2LjVhLjUuNSAwIDAgMSAuNS0uNWg2YS41LjUgMCAwIDEgMCAxaC02YS41LjUgMCAwIDEtLjUtLjUiLz4KPC9zdmc+)*/
const ZoomOut: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="zoom-out"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
  <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
  <path fillRule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default ZoomOut;
