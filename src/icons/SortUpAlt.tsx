import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sort-up-alt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDEzLjVhLjUuNSAwIDAgMS0xIDBWNC43MDdMMS4zNTQgNS44NTRhLjUuNSAwIDEgMS0uNzA4LS43MDhsMi0xLjk5OS4wMDctLjAwN2EuNS41IDAgMCAxIC43LjAwNmwyIDJhLjUuNSAwIDEgMS0uNzA3LjcwOEwzLjUgNC43MDd6bTQtOS41YS41LjUgMCAwIDEgMC0xaDFhLjUuNSAwIDAgMSAwIDF6bTAgM2EuNS41IDAgMCAxIDAtMWgzYS41LjUgMCAwIDEgMCAxem0wIDNhLjUuNSAwIDAgMSAwLTFoNWEuNS41IDAgMCAxIDAgMXpNNyAxMi41YS41LjUgMCAwIDAgLjUuNWg3YS41LjUgMCAwIDAgMC0xaC03YS41LjUgMCAwIDAtLjUuNSIvPgo8L3N2Zz4=)*/
const SortUpAlt: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sort-up-alt"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5"/>
</svg>
      )}
    />
  );

export default SortUpAlt;
