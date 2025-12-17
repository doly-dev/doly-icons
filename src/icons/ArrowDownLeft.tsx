import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDEzLjVhLjUuNSAwIDAgMCAuNS41aDZhLjUuNSAwIDAgMCAwLTFIMy43MDdMMTMuODU0IDIuODU0YS41LjUgMCAwIDAtLjcwOC0uNzA4TDMgMTIuMjkzVjcuNWEuNS41IDAgMCAwLTEgMHoiLz4KPC9zdmc+)*/
const ArrowDownLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-down-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0z"/>
</svg>
      )}
    />
  );

export default ArrowDownLeft;
