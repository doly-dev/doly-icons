import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-fill-dash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNSAxNmEzLjUgMy41IDAgMSAwIDAtNyAzLjUgMy41IDAgMCAwIDAgN00xMSAxMmgzYS41LjUgMCAwIDEgMCAxaC0zYS41LjUgMCAwIDEgMC0xbTAtN2EzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDAiLz4KICA8cGF0aCBkPSJNMiAxM2MwIDEgMSAxIDEgMWg1LjI1NkE0LjUgNC41IDAgMCAxIDggMTIuNWE0LjUgNC41IDAgMCAxIDEuNTQ0LTMuMzkzUTguODQ0IDkuMDAyIDggOWMtNSAwLTYgMy02IDQiLz4KPC9zdmc+)*/
const PersonFillDash: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-fill-dash"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
</svg>
      )}
    />
  );

export default PersonFillDash;
