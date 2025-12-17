import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMC0yIDJ2OC4wMUEyIDIgMCAwIDAgMiAxNGg1LjVhLjUuNSAwIDAgMCAwLTFIMmExIDEgMCAwIDEtLjk2Ni0uNzQxbDUuNjQtMy40NzFMOCA5LjU4M2w3LTQuMlY4LjVhLjUuNSAwIDAgMCAxIDBWNGEyIDIgMCAwIDAtMi0yem0zLjcwOCA2LjIwOEwxIDExLjEwNVY1LjM4M3pNMSA0LjIxN1Y0YTEgMSAwIDAgMSAxLTFoMTJhMSAxIDAgMCAxIDEgMXYuMjE3bC03IDQuMnoiLz4KICA8cGF0aCBkPSJNMTQuOTc1IDEwLjAyNWEzLjUgMy41IDAgMSAwLTQuOTUgNC45NSAzLjUgMy41IDAgMCAwIDQuOTUtNC45NW0tNC4yNDMuNzA3YTIuNSAyLjUgMCAwIDEgMy4xNDctLjMxOGwtMy40NjUgMy40NjVhMi41IDIuNSAwIDAgMSAuMzE4LTMuMTQ3bS4zOSAzLjg1NCAzLjQ2NC0zLjQ2NWEyLjUwMSAyLjUwMSAwIDAgMS0zLjQ2NSAzLjQ2NVoiLz4KPC9zdmc+)*/
const EnvelopeSlash: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-slash"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M14.975 10.025a3.5 3.5 0 1 0-4.95 4.95 3.5 3.5 0 0 0 4.95-4.95m-4.243.707a2.5 2.5 0 0 1 3.147-.318l-3.465 3.465a2.5 2.5 0 0 1 .318-3.147m.39 3.854 3.464-3.465a2.501 2.501 0 0 1-3.465 3.465Z"/>
</svg>
      )}
    />
  );

export default EnvelopeSlash;
