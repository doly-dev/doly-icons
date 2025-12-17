import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![distribute-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDEuNWEuNS41IDAgMCAwIC41LjVoMTNhLjUuNSAwIDAgMCAwLTFoLTEzYS41LjUgMCAwIDAtLjUuNW0wIDEzYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIDAtMWgtMTNhLjUuNSAwIDAgMC0uNS41Ii8+CiAgPHBhdGggZD0iTTIgN2ExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMXoiLz4KPC9zdmc+)*/
const DistributeVertical: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="distribute-vertical"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5m0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5"/>
  <path d="M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default DistributeVertical;
