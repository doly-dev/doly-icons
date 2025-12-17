import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-down-short](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDRhLjUuNSAwIDAgMSAuNS41djUuNzkzbDIuMTQ2LTIuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTMgM2EuNS41IDAgMCAxLS43MDggMGwtMy0zYS41LjUgMCAxIDEgLjcwOC0uNzA4TDcuNSAxMC4yOTNWNC41QS41LjUgMCAwIDEgOCA0Ii8+Cjwvc3ZnPg==)*/
const ArrowDownShort: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-down-short"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
</svg>
      )}
    />
  );

export default ArrowDownShort;
