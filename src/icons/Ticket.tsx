import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![ticket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA0LjVBMS41IDEuNSAwIDAgMSAxLjUgM2gxM0ExLjUgMS41IDAgMCAxIDE2IDQuNVY2YS41LjUgMCAwIDEtLjUuNSAxLjUgMS41IDAgMCAwIDAgMyAuNS41IDAgMCAxIC41LjV2MS41YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMTNBMS41IDEuNSAwIDAgMSAwIDExLjVWMTBhLjUuNSAwIDAgMSAuNS0uNSAxLjUgMS41IDAgMSAwIDAtM0EuNS41IDAgMCAxIDAgNnpNMS41IDRhLjUuNSAwIDAgMC0uNS41djEuMDVhMi41IDIuNSAwIDAgMSAwIDQuOXYxLjA1YS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41di0xLjA1YTIuNSAyLjUgMCAwIDEgMC00LjlWNC41YS41LjUgMCAwIDAtLjUtLjV6Ii8+Cjwvc3ZnPg==)*/
const Ticket: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="ticket"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z"/>
</svg>
      )}
    />
  );

export default Ticket;
