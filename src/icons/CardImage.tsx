import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![card-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi4wMDIgNS41YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwIi8+CiAgPHBhdGggZD0iTTEuNSAyQTEuNSAxLjUgMCAwIDAgMCAzLjV2OUExLjUgMS41IDAgMCAwIDEuNSAxNGgxM2ExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTlBMS41IDEuNSAwIDAgMCAxNC41IDJ6bTEzIDFhLjUuNSAwIDAgMSAuNS41djZsLTMuNzc1LTEuOTQ3YS41LjUgMCAwIDAtLjU3Ny4wOTNsLTMuNzEgMy43MS0yLjY2LTEuNzcyYS41LjUgMCAwIDAtLjYzLjA2MkwxLjAwMiAxMnYuNTRMMSAxMi41di05YS41LjUgMCAwIDEgLjUtLjV6Ii8+Cjwvc3ZnPg==)*/
const CardImage: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="card-image"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
</svg>
      )}
    />
  );

export default CardImage;
