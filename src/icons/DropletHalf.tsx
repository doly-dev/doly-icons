import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![droplet-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjIxLjhDNy42OS4yOTUgOCAwIDggMHEuMTY0LjU0NC4zNzEgMS4wMzhjLjgxMiAxLjk0NiAyLjA3MyAzLjM1IDMuMTk3IDQuNkMxMi44NzggNy4wOTYgMTQgOC4zNDUgMTQgMTBhNiA2IDAgMCAxLTEyIDBDMiA2LjY2OCA1LjU4IDIuNTE3IDcuMjEuOG0uNDEzIDEuMDIxQTMxIDMxIDAgMCAwIDUuNzk0IDMuOTljLS43MjYuOTUtMS40MzYgMi4wMDgtMS45NiAzLjA3QzMuMzA0IDguMTMzIDMgOS4xMzggMyAxMGMwIDAgMi41IDEuNSA1IC41czUtLjUgNS0uNWMwLTEuMjAxLS43OTYtMi4xNTctMi4xODEtMy43bC0uMDMtLjAzMkM5Ljc1IDUuMTEgOC41IDMuNzIgNy42MjMgMS44MnoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjU1MyA3Ljc3NmMuODItMS42NDEgMS43MTctMi43NTMgMi4wOTMtMy4xM2wuNzA4LjcwOGMtLjI5LjI5LTEuMTI4IDEuMzExLTEuOTA3IDIuODd6Ii8+Cjwvc3ZnPg==)*/
const DropletHalf: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="droplet-half"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
  <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
</svg>
      )}
    />
  );

export default DropletHalf;
