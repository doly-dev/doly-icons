import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrows-fullscreen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjgyOCAxMC4xNzJhLjUuNSAwIDAgMC0uNzA3IDBsLTQuMDk2IDQuMDk2VjExLjVhLjUuNSAwIDAgMC0xIDB2My45NzVhLjUuNSAwIDAgMCAuNS41SDQuNWEuNS41IDAgMCAwIDAtMUgxLjczMmw0LjA5Ni00LjA5NmEuNS41IDAgMCAwIDAtLjcwN200LjM0NCAwYS41LjUgMCAwIDEgLjcwNyAwbDQuMDk2IDQuMDk2VjExLjVhLjUuNSAwIDEgMSAxIDB2My45NzVhLjUuNSAwIDAgMS0uNS41SDExLjVhLjUuNSAwIDAgMSAwLTFoMi43NjhsLTQuMDk2LTQuMDk2YS41LjUgMCAwIDEgMC0uNzA3bTAtNC4zNDRhLjUuNSAwIDAgMCAuNzA3IDBsNC4wOTYtNC4wOTZWNC41YS41LjUgMCAxIDAgMSAwVi41MjVhLjUuNSAwIDAgMC0uNS0uNUgxMS41YS41LjUgMCAwIDAgMCAxaDIuNzY4bC00LjA5NiA0LjA5NmEuNS41IDAgMCAwIDAgLjcwN20tNC4zNDQgMGEuNS41IDAgMCAxLS43MDcgMEwxLjAyNSAxLjczMlY0LjVhLjUuNSAwIDAgMS0xIDBWLjUyNWEuNS41IDAgMCAxIC41LS41SDQuNWEuNS41IDAgMCAxIDAgMUgxLjczMmw0LjA5NiA0LjA5NmEuNS41IDAgMCAxIDAgLjcwNyIvPgo8L3N2Zz4=)*/
const ArrowsFullscreen: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrows-fullscreen"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"/>
</svg>
      )}
    />
  );

export default ArrowsFullscreen;
