import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMC0yIDJ2OC4wMUEyIDIgMCAwIDAgMiAxNGg1LjVhLjUuNSAwIDAgMCAwLTFIMmExIDEgMCAwIDEtLjk2Ni0uNzQxbDUuNjQtMy40NzFMOCA5LjU4M2w3LTQuMlY4LjVhLjUuNSAwIDAgMCAxIDBWNGEyIDIgMCAwIDAtMi0yem0zLjcwOCA2LjIwOEwxIDExLjEwNVY1LjM4M3pNMSA0LjIxN1Y0YTEgMSAwIDAgMSAxLTFoMTJhMSAxIDAgMCAxIDEgMXYuMjE3bC03IDQuMnoiLz4KICA8cGF0aCBkPSJNMTIuNSAxNmEzLjUgMy41IDAgMSAwIDAtNyAzLjUgMy41IDAgMCAwIDAgN20uNS01djEuNWEuNS41IDAgMCAxLTEgMFYxMWEuNS41IDAgMCAxIDEgMG0wIDNhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDAiLz4KPC9zdmc+)*/
const EnvelopeExclamation: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-exclamation"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0m0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
      )}
    />
  );

export default EnvelopeExclamation;
