import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![handbag-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxYTIgMiAwIDAgMC0yIDJ2Mkg1VjNhMyAzIDAgMSAxIDYgMHYyaC0xVjNhMiAyIDAgMCAwLTItMk01IDVIMy4zNmExLjUgMS41IDAgMCAwLTEuNDgzIDEuMjc3TC44NSAxMy4xM0EyLjUgMi41IDAgMCAwIDMuMzIyIDE2aDkuMzU1YTIuNSAyLjUgMCAwIDAgMi40NzMtMi44N2wtMS4wMjgtNi44NTNBMS41IDEuNSAwIDAgMCAxMi42NCA1SDExdjEuNWEuNS41IDAgMCAxLTEgMFY1SDZ2MS41YS41LjUgMCAwIDEtMSAweiIvPgo8L3N2Zz4=)*/
const HandbagFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="handbag-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"/>
</svg>
      )}
    />
  );

export default HandbagFill;
