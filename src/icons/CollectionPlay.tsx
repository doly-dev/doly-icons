import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![collection-play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAzYS41LjUgMCAwIDAgLjUuNWgxMWEuNS41IDAgMCAwIDAtMWgtMTFBLjUuNSAwIDAgMCAyIDNtMi0yYS41LjUgMCAwIDAgLjUuNWg3YS41LjUgMCAwIDAgMC0xaC03QS41LjUgMCAwIDAgNCAxbTIuNzY1IDUuNTc2QS41LjUgMCAwIDAgNiA3djVhLjUuNSAwIDAgMCAuNzY1LjQyNGw0LTIuNWEuNS41IDAgMCAwIDAtLjg0OHoiLz4KICA8cGF0aCBkPSJNMS41IDE0LjVBMS41IDEuNSAwIDAgMSAwIDEzVjZhMS41IDEuNSAwIDAgMSAxLjUtMS41aDEzQTEuNSAxLjUgMCAwIDEgMTYgNnY3YTEuNSAxLjUgMCAwIDEtMS41IDEuNXptMTMtMWEuNS41IDAgMCAwIC41LS41VjZhLjUuNSAwIDAgMC0uNS0uNWgtMTNBLjUuNSAwIDAgMCAxIDZ2N2EuNS41IDAgMCAwIC41LjV6Ii8+Cjwvc3ZnPg==)*/
const CollectionPlay: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="collection-play"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1m2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848z"/>
  <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5z"/>
</svg>
      )}
    />
  );

export default CollectionPlay;
