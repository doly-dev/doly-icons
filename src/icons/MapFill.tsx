import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![map-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAuNWEuNS41IDAgMCAwLS41OTgtLjQ5TDEwLjUuOTkgNS41OTguMDFhLjUuNSAwIDAgMC0uMTk2IDBsLTUgMUEuNS41IDAgMCAwIDAgMS41djE0YS41LjUgMCAwIDAgLjU5OC40OWw0LjkwMi0uOTggNC45MDIuOThhLjUuNSAwIDAgMCAuMTk2IDBsNS0xQS41LjUgMCAwIDAgMTYgMTQuNXpNNSAxNC4wOVYxLjExbC41LS4xLjUuMXYxMi45OGwtLjQwMi0uMDhhLjUuNSAwIDAgMC0uMTk2IDB6bTUgLjhWMS45MWwuNDAyLjA4YS41LjUgMCAwIDAgLjE5NiAwTDExIDEuOTF2MTIuOThsLS41LjF6Ii8+Cjwvc3ZnPg==)*/
const MapFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="map-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.5.5 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.5.5 0 0 0-.196 0zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1z"/>
</svg>
      )}
    />
  );

export default MapFill;
