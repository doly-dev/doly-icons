import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![suitcase2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi41IDBhLjUuNSAwIDAgMC0uNS41VjNINC41QTEuNSAxLjUgMCAwIDAgMyA0LjV2OWExLjUgMS41IDAgMCAwIDEuMDAzIDEuNDE2QTEgMSAwIDEgMCA2IDE1aDRhMSAxIDAgMSAwIDEuOTk2LS4wODRBMS41IDEuNSAwIDAgMCAxMyAxMy41di05QTEuNSAxLjUgMCAwIDAgMTEuNSAzSDEwVi41YS41LjUgMCAwIDAtLjUtLjV6TTkgM0g3VjFoMnpNNCA3VjZoOHYxeiIvPgo8L3N2Zz4=)*/
const Suitcase2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="suitcase2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.5 0a.5.5 0 0 0-.5.5V3H4.5A1.5 1.5 0 0 0 3 4.5v9a1.5 1.5 0 0 0 1.003 1.416A1 1 0 1 0 6 15h4a1 1 0 1 0 1.996-.084A1.5 1.5 0 0 0 13 13.5v-9A1.5 1.5 0 0 0 11.5 3H10V.5a.5.5 0 0 0-.5-.5zM9 3H7V1h2zM4 7V6h8v1z"/>
</svg>
      )}
    />
  );

export default Suitcase2Fill;
