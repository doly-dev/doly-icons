import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![check2-all](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuMzU0IDQuMzU0YS41LjUgMCAwIDAtLjcwOC0uNzA4TDUgMTAuMjkzIDEuODU0IDcuMTQ2YS41LjUgMCAxIDAtLjcwOC43MDhsMy41IDMuNWEuNS41IDAgMCAwIC43MDggMHptLTQuMjA4IDctLjg5Ni0uODk3LjcwNy0uNzA3LjU0My41NDMgNi42NDYtNi42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNyA3YS41LjUgMCAwIDEtLjcwOCAwIi8+CiAgPHBhdGggZD0ibTUuMzU0IDcuMTQ2Ljg5Ni44OTctLjcwNy43MDctLjg5Ny0uODk2YS41LjUgMCAxIDEgLjcwOC0uNzA4Ii8+Cjwvc3ZnPg==)*/
const Check2All: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="check2-all"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
</svg>
      )}
    />
  );

export default Check2All;
