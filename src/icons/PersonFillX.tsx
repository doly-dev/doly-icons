import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-fill-x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDBtLTkgOGMwIDEgMSAxIDEgMWg1LjI1NkE0LjUgNC41IDAgMCAxIDggMTIuNWE0LjUgNC41IDAgMCAxIDEuNTQ0LTMuMzkzUTguODQ0IDkuMDAyIDggOWMtNSAwLTYgMy02IDQiLz4KICA8cGF0aCBkPSJNMTIuNSAxNmEzLjUgMy41IDAgMSAwIDAtNyAzLjUgMy41IDAgMCAwIDAgN20tLjY0Ni00Ljg1NC42NDYuNjQ3LjY0Ni0uNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLS42NDcuNjQ2LjY0Ny42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtLjY0Ni0uNjQ3LS42NDYuNjQ3YS41LjUgMCAwIDEtLjcwOC0uNzA4bC42NDctLjY0Ni0uNjQ3LS42NDZhLjUuNSAwIDAgMSAuNzA4LS43MDgiLz4KPC9zdmc+)*/
const PersonFillX: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-fill-x"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
</svg>
      )}
    />
  );

export default PersonFillX;
