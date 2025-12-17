import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-up-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxNmEyIDIgMCAwIDEtMi0yVjJhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJ6bTYuNS00LjVWNS43MDdsMi4xNDYgMi4xNDdhLjUuNSAwIDAgMCAuNzA4LS43MDhsLTMtM2EuNS41IDAgMCAwLS43MDggMGwtMyAzYS41LjUgMCAxIDAgLjcwOC43MDhMNy41IDUuNzA3VjExLjVhLjUuNSAwIDAgMCAxIDAiLz4KPC9zdmc+)*/
const ArrowUpSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-up-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0"/>
</svg>
      )}
    />
  );

export default ArrowUpSquareFill;
