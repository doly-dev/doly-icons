import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![distribute-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC41IDFhLjUuNSAwIDAgMC0uNS41djEzYS41LjUgMCAwIDAgMSAwdi0xM2EuNS41IDAgMCAwLS41LS41bS0xMyAwYS41LjUgMCAwIDAtLjUuNXYxM2EuNS41IDAgMCAwIDEgMHYtMTNhLjUuNSAwIDAgMC0uNS0uNSIvPgogIDxwYXRoIGQ9Ik02IDEzYTEgMSAwIDAgMCAxIDFoMmExIDEgMCAwIDAgMS0xVjNhMSAxIDAgMCAwLTEtMUg3YTEgMSAwIDAgMC0xIDF6Ii8+Cjwvc3ZnPg==)*/
const DistributeHorizontal: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="distribute-horizontal"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5m-13 0a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5"/>
  <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/>
</svg>
      )}
    />
  );

export default DistributeHorizontal;
