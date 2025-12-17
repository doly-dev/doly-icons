import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-left-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgMTRhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWMmEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ6bS00LjUtNi41SDUuNzA3bDIuMTQ3LTIuMTQ2YS41LjUgMCAxIDAtLjcwOC0uNzA4bC0zIDNhLjUuNSAwIDAgMCAwIC43MDhsMyAzYS41LjUgMCAwIDAgLjcwOC0uNzA4TDUuNzA3IDguNUgxMS41YS41LjUgMCAwIDAgMC0xIi8+Cjwvc3ZnPg==)*/
const ArrowLeftSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-left-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
</svg>
      )}
    />
  );

export default ArrowLeftSquareFill;
