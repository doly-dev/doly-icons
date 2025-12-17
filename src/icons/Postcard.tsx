import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![postcard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDJhMiAyIDAgMCAwLTIgMnY4YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTJ6TTEgNGExIDEgMCAwIDEgMS0xaDEyYTEgMSAwIDAgMSAxIDF2OGExIDEgMCAwIDEtMSAxSDJhMSAxIDAgMCAxLTEtMXptNy41LjVhLjUuNSAwIDAgMC0xIDB2N2EuNS41IDAgMCAwIDEgMHpNMiA1LjVhLjUuNSAwIDAgMSAuNS0uNUg2YS41LjUgMCAwIDEgMCAxSDIuNWEuNS41IDAgMCAxLS41LS41bTAgMmEuNS41IDAgMCAxIC41LS41SDZhLjUuNSAwIDAgMSAwIDFIMi41YS41LjUgMCAwIDEtLjUtLjVtMCAyYS41LjUgMCAwIDEgLjUtLjVINmEuNS41IDAgMCAxIDAgMUgyLjVhLjUuNSAwIDAgMS0uNS0uNU0xMC41IDVhLjUuNSAwIDAgMC0uNS41djNhLjUuNSAwIDAgMCAuNS41aDNhLjUuNSAwIDAgMCAuNS0uNXYtM2EuNS41IDAgMCAwLS41LS41ek0xMyA4aC0yVjZoMnoiLz4KPC9zdmc+)*/
const Postcard: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="postcard"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5M10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM13 8h-2V6h2z"/>
</svg>
      )}
    />
  );

export default Postcard;
