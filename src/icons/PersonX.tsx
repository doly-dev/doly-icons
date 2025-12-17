import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDBNOCA3YTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNG0uMjU2IDdhNC41IDQuNSAwIDAgMS0uMjI5LTEuMDA0SDNjLjAwMS0uMjQ2LjE1NC0uOTg2LjgzMi0xLjY2NEM0LjQ4NCAxMC42OCA1LjcxMSAxMCA4IDEwcS4zOSAwIC43NC4wMjVjLjIyNi0uMzQxLjQ5Ni0uNjUuODA0LS45MThROC44NDQgOS4wMDIgOCA5Yy01IDAtNiAzLTYgNHMxIDEgMSAxeiIvPgogIDxwYXRoIGQ9Ik0xMi41IDE2YTMuNSAzLjUgMCAxIDAgMC03IDMuNSAzLjUgMCAwIDAgMCA3bS0uNjQ2LTQuODU0LjY0Ni42NDcuNjQ2LS42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtLjY0Ny42NDYuNjQ3LjY0NmEuNS41IDAgMCAxLS43MDguNzA4bC0uNjQ2LS42NDctLjY0Ni42NDdhLjUuNSAwIDAgMS0uNzA4LS43MDhsLjY0Ny0uNjQ2LS42NDctLjY0NmEuNS41IDAgMCAxIC43MDgtLjcwOCIvPgo8L3N2Zz4=)*/
const PersonX: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-x"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
</svg>
      )}
    />
  );

export default PersonX;
