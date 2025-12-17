import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-up-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDAgMCA4YTggOCAwIDAgMCAxNiAwbS03LjUgMy41YS41LjUgMCAwIDEtMSAwVjUuNzA3TDUuMzU0IDcuODU0YS41LjUgMCAxIDEtLjcwOC0uNzA4bDMtM2EuNS41IDAgMCAxIC43MDggMGwzIDNhLjUuNSAwIDAgMS0uNzA4LjcwOEw4LjUgNS43MDd6Ii8+Cjwvc3ZnPg==)*/
const ArrowUpCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-up-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
</svg>
      )}
    />
  );

export default ArrowUpCircleFill;
