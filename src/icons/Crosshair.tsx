import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![crosshair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41LjVhLjUuNSAwIDAgMC0xIDB2LjUxOEE3IDcgMCAwIDAgMS4wMTggNy41SC41YS41LjUgMCAwIDAgMCAxaC41MThBNyA3IDAgMCAwIDcuNSAxNC45ODJ2LjUxOGEuNS41IDAgMCAwIDEgMHYtLjUxOEE3IDcgMCAwIDAgMTQuOTgyIDguNWguNTE4YS41LjUgMCAwIDAgMC0xaC0uNTE4QTcgNyAwIDAgMCA4LjUgMS4wMTh6bS02LjQ4IDdBNiA2IDAgMCAxIDcuNSAyLjAydi40OGEuNS41IDAgMCAwIDEgMHYtLjQ4YTYgNiAwIDAgMSA1LjQ4IDUuNDhoLS40OGEuNS41IDAgMCAwIDAgMWguNDhhNiA2IDAgMCAxLTUuNDggNS40OHYtLjQ4YS41LjUgMCAwIDAtMSAwdi40OEE2IDYgMCAwIDEgMi4wMiA4LjVoLjQ4YS41LjUgMCAwIDAgMC0xek04IDEwYTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNCIvPgo8L3N2Zz4=)*/
const Crosshair: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="crosshair"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
</svg>
      )}
    />
  );

export default Crosshair;
