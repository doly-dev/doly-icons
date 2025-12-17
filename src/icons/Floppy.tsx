import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![floppy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgMkg5djNoMnoiLz4KICA8cGF0aCBkPSJNMS41IDBoMTEuNTg2YTEuNSAxLjUgMCAwIDEgMS4wNi40NGwxLjQxNSAxLjQxNEExLjUgMS41IDAgMCAxIDE2IDIuOTE0VjE0LjVhMS41IDEuNSAwIDAgMS0xLjUgMS41aC0xM0ExLjUgMS41IDAgMCAxIDAgMTQuNXYtMTNBMS41IDEuNSAwIDAgMSAxLjUgME0xIDEuNXYxM2EuNS41IDAgMCAwIC41LjVIMnYtNC41QTEuNSAxLjUgMCAwIDEgMy41IDloOWExLjUgMS41IDAgMCAxIDEuNSAxLjVWMTVoLjVhLjUuNSAwIDAgMCAuNS0uNVYyLjkxNGEuNS41IDAgMCAwLS4xNDYtLjM1M2wtMS40MTUtMS40MTVBLjUuNSAwIDAgMCAxMy4wODYgMUgxM3Y0LjVBMS41IDEuNSAwIDAgMSAxMS41IDdoLTdBMS41IDEuNSAwIDAgMSAzIDUuNVYxSDEuNWEuNS41IDAgMCAwLS41LjVtMyA0YS41LjUgMCAwIDAgLjUuNWg3YS41LjUgMCAwIDAgLjUtLjVWMUg0ek0zIDE1aDEwdi00LjVhLjUuNSAwIDAgMC0uNS0uNWgtOWEuNS41IDAgMCAwLS41LjV6Ii8+Cjwvc3ZnPg==)*/
const Floppy: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="floppy"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 2H9v3h2z"/>
  <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
</svg>
      )}
    />
  );

export default Floppy;
