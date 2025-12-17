import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![toggles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC41IDlhMy41IDMuNSAwIDEgMCAwIDdoN2EzLjUgMy41IDAgMSAwIDAtN3ptNyA2YTIuNSAyLjUgMCAxIDEgMC01IDIuNSAyLjUgMCAwIDEgMCA1bS03LTE0YTIuNSAyLjUgMCAxIDAgMCA1IDIuNSAyLjUgMCAwIDAgMC01bTIuNDUgMEEzLjUgMy41IDAgMCAxIDggMy41IDMuNSAzLjUgMCAwIDEgNi45NSA2aDQuNTVhMi41IDIuNSAwIDAgMCAwLTV6TTQuNSAwaDdhMy41IDMuNSAwIDEgMSAwIDdoLTdhMy41IDMuNSAwIDEgMSAwLTciLz4KPC9zdmc+)*/
const Toggles: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="toggles"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m2.45 0A3.5 3.5 0 0 1 8 3.5 3.5 3.5 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7"/>
</svg>
      )}
    />
  );

export default Toggles;
