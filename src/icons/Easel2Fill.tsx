import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![easel2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC40NDcuMjc2YS41LjUgMCAwIDAtLjg5NCAwTDcuMTkgMUgyLjVBMS41IDEuNSAwIDAgMCAxIDIuNVYxMGgxNFYyLjVBMS41IDEuNSAwIDAgMCAxMy41IDFIOC44MDl6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNLjUgMTFhLjUuNSAwIDAgMCAwIDFoMi44NmwtLjg0NSAzLjM3OWEuNS41IDAgMCAwIC45Ny4yNDJMMy44OSAxNGg4LjIybC40MDUgMS42MjFhLjUuNSAwIDAgMCAuOTctLjI0MkwxMi42NCAxMmgyLjg2YS41LjUgMCAwIDAgMC0xem0zLjY0IDIgLjI1LTFoNy4yMmwuMjUgMXoiLz4KPC9zdmc+)*/
const Easel2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="easel2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.447.276a.5.5 0 0 0-.894 0L7.19 1H2.5A1.5 1.5 0 0 0 1 2.5V10h14V2.5A1.5 1.5 0 0 0 13.5 1H8.809z"/>
  <path fillRule="evenodd" d="M.5 11a.5.5 0 0 0 0 1h2.86l-.845 3.379a.5.5 0 0 0 .97.242L3.89 14h8.22l.405 1.621a.5.5 0 0 0 .97-.242L12.64 12h2.86a.5.5 0 0 0 0-1zm3.64 2 .25-1h7.22l.25 1z"/>
</svg>
      )}
    />
  );

export default Easel2Fill;
