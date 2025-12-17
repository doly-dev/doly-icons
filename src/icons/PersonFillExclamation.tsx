import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-fill-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDBtLTkgOGMwIDEgMSAxIDEgMWg1LjI1NkE0LjUgNC41IDAgMCAxIDggMTIuNWE0LjUgNC41IDAgMCAxIDEuNTQ0LTMuMzkzUTguODQ0IDkuMDAyIDggOWMtNSAwLTYgMy02IDQiLz4KICA8cGF0aCBkPSJNMTYgMTIuNWEzLjUgMy41IDAgMSAxLTcgMCAzLjUgMy41IDAgMCAxIDcgMG0tMy41LTJhLjUuNSAwIDAgMC0uNS41djEuNWEuNS41IDAgMCAwIDEgMFYxMWEuNS41IDAgMCAwLS41LS41bTAgNGEuNS41IDAgMSAwIDAtMSAuNS41IDAgMCAwIDAgMSIvPgo8L3N2Zz4=)*/
const PersonFillExclamation: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-fill-exclamation"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5m0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
</svg>
      )}
    />
  );

export default PersonFillExclamation;
