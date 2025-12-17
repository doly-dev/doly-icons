import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stickies-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxLjVWMTNhMSAxIDAgMCAwIDEgMVYxLjVhLjUuNSAwIDAgMSAuNS0uNUgxNGExIDEgMCAwIDAtMS0xSDEuNUExLjUgMS41IDAgMCAwIDAgMS41Ii8+CiAgPHBhdGggZD0iTTMuNSAyQTEuNSAxLjUgMCAwIDAgMiAzLjV2MTFBMS41IDEuNSAwIDAgMCAzLjUgMTZoNi4wODZhMS41IDEuNSAwIDAgMCAxLjA2LS40NGw0LjkxNS00LjkxNEExLjUgMS41IDAgMCAwIDE2IDkuNTg2VjMuNUExLjUgMS41IDAgMCAwIDE0LjUgMnptNiA4LjVhMSAxIDAgMCAxIDEtMWg0LjM5NmEuMjUuMjUgMCAwIDEgLjE3Ny40MjdsLTUuMTQ2IDUuMTQ2YS4yNS4yNSAwIDAgMS0uNDI3LS4xNzd6Ii8+Cjwvc3ZnPg==)*/
const StickiesFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stickies-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5A1.5 1.5 0 0 0 0 1.5"/>
  <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z"/>
</svg>
      )}
    />
  );

export default StickiesFill;
