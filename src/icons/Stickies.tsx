import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stickies](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS41IDBBMS41IDEuNSAwIDAgMCAwIDEuNVYxM2ExIDEgMCAwIDAgMSAxVjEuNWEuNS41IDAgMCAxIC41LS41SDE0YTEgMSAwIDAgMC0xLTF6Ii8+CiAgPHBhdGggZD0iTTMuNSAyQTEuNSAxLjUgMCAwIDAgMiAzLjV2MTFBMS41IDEuNSAwIDAgMCAzLjUgMTZoNi4wODZhMS41IDEuNSAwIDAgMCAxLjA2LS40NGw0LjkxNS00LjkxNEExLjUgMS41IDAgMCAwIDE2IDkuNTg2VjMuNUExLjUgMS41IDAgMCAwIDE0LjUgMnpNMyAzLjVhLjUuNSAwIDAgMSAuNS0uNWgxMWEuNS41IDAgMCAxIC41LjVWOWgtNC41QTEuNSAxLjUgMCAwIDAgOSAxMC41VjE1SDMuNWEuNS41IDAgMCAxLS41LS41em03IDExLjI5M1YxMC41YS41LjUgMCAwIDEgLjUtLjVoNC4yOTN6Ii8+Cjwvc3ZnPg==)*/
const Stickies: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stickies"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1z"/>
  <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293z"/>
</svg>
      )}
    />
  );

export default Stickies;
