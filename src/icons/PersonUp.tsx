import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNSAxNmEzLjUgMy41IDAgMSAwIDAtNyAzLjUgMy41IDAgMCAwIDAgN20uMzU0LTUuODU0IDEuNSAxLjVhLjUuNSAwIDAgMS0uNzA4LjcwOEwxMyAxMS43MDdWMTQuNWEuNS41IDAgMCAxLTEgMHYtMi43OTNsLS42NDYuNjQ3YS41LjUgMCAwIDEtLjcwOC0uNzA4bDEuNS0xLjVhLjUuNSAwIDAgMSAuNzA4IDBNMTEgNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDBNOCA3YTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNCIvPgogIDxwYXRoIGQ9Ik04LjI1NiAxNGE0LjUgNC41IDAgMCAxLS4yMjktMS4wMDRIM2MuMDAxLS4yNDYuMTU0LS45ODYuODMyLTEuNjY0QzQuNDg0IDEwLjY4IDUuNzExIDEwIDggMTBxLjM5IDAgLjc0LjAyNWMuMjI2LS4zNDEuNDk2LS42NS44MDQtLjkxOFE4Ljg0NCA5LjAwMiA4IDljLTUgMC02IDMtNiA0czEgMSAxIDF6Ii8+Cjwvc3ZnPg==)*/
const PersonUp: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-up"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
</svg>
      )}
    />
  );

export default PersonUp;
