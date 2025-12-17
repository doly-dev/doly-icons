import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMC0yIDJ2OC4wMUEyIDIgMCAwIDAgMiAxNGg1LjVhLjUuNSAwIDAgMCAwLTFIMmExIDEgMCAwIDEtLjk2Ni0uNzQxbDUuNjQtMy40NzFMOCA5LjU4M2w3LTQuMlY4LjVhLjUuNSAwIDAgMCAxIDBWNGEyIDIgMCAwIDAtMi0yem0zLjcwOCA2LjIwOEwxIDExLjEwNVY1LjM4M3pNMSA0LjIxN1Y0YTEgMSAwIDAgMSAxLTFoMTJhMSAxIDAgMCAxIDEgMXYuMjE3bC03IDQuMnoiLz4KICA8cGF0aCBkPSJNMTYgMTIuNWEzLjUgMy41IDAgMSAxLTcgMCAzLjUgMy41IDAgMCAxIDcgMG0tNC44NTQtMS4zNTRhLjUuNSAwIDAgMCAwIC43MDhsLjY0Ny42NDYtLjY0Ny42NDZhLjUuNSAwIDAgMCAuNzA4LjcwOGwuNjQ2LS42NDcuNjQ2LjY0N2EuNS41IDAgMCAwIC43MDgtLjcwOGwtLjY0Ny0uNjQ2LjY0Ny0uNjQ2YS41LjUgMCAwIDAtLjcwOC0uNzA4bC0uNjQ2LjY0Ny0uNjQ2LS42NDdhLjUuNSAwIDAgMC0uNzA4IDAiLz4KPC9zdmc+)*/
const EnvelopeX: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-x"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-4.854-1.354a.5.5 0 0 0 0 .708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708l-.647-.646.647-.646a.5.5 0 0 0-.708-.708l-.646.647-.646-.647a.5.5 0 0 0-.708 0"/>
</svg>
      )}
    />
  );

export default EnvelopeX;
