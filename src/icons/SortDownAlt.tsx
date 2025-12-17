import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sort-down-alt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDMuNWEuNS41IDAgMCAwLTEgMHY4Ljc5M2wtMS4xNDYtMS4xNDdhLjUuNSAwIDAgMC0uNzA4LjcwOGwyIDEuOTk5LjAwNy4wMDdhLjQ5Ny40OTcgMCAwIDAgLjctLjAwNmwyLTJhLjUuNSAwIDAgMC0uNzA3LS43MDhMMy41IDEyLjI5M3ptNCAuNWEuNS41IDAgMCAxIDAtMWgxYS41LjUgMCAwIDEgMCAxem0wIDNhLjUuNSAwIDAgMSAwLTFoM2EuNS41IDAgMCAxIDAgMXptMCAzYS41LjUgMCAwIDEgMC0xaDVhLjUuNSAwIDAgMSAwIDF6TTcgMTIuNWEuNS41IDAgMCAwIC41LjVoN2EuNS41IDAgMCAwIDAtMWgtN2EuNS41IDAgMCAwLS41LjUiLz4KPC9zdmc+)*/
const SortDownAlt: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sort-down-alt"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5"/>
</svg>
      )}
    />
  );

export default SortDownAlt;
