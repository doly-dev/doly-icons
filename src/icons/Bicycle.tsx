import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bicycle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCA0LjVhLjUuNSAwIDAgMSAuNS0uNUg2YS41LjUgMCAwIDEgMCAxdi41aDQuMTRsLjM4Ni0xLjE1OEEuNS41IDAgMCAxIDExIDRoMWEuNS41IDAgMCAxIDAgMWgtLjY0bC0uMzExLjkzNS44MDcgMS4yOWEzIDMgMCAxIDEtLjg0OC41M2wtLjUwOC0uODEyLTIuMDc2IDMuMzIyQS41LjUgMCAwIDEgOCAxMC41SDUuOTU5YTMgMyAwIDEgMS0xLjgxNS0zLjI3NEw1IDUuODU2VjVoLS41YS41LjUgMCAwIDEtLjUtLjVtMS41IDIuNDQzLS41MDguODE0Yy41LjQ0NC44NSAxLjA1NC45NjcgMS43NDNoMS4xMzl6TTggOS4wNTcgOS41OTggNi41SDYuNDAyek00LjkzNyA5LjVhMiAyIDAgMCAwLS40ODctLjg3N2wtLjU0OC44Nzd6TTMuNjAzIDguMDkyQTIgMiAwIDEgMCA0LjkzNyAxMC41SDNhLjUuNSAwIDAgMS0uNDI0LS43NjV6bTcuOTQ3LjUzYTIgMiAwIDEgMCAuODQ4LS41M2wxLjAyNiAxLjY0M2EuNS41IDAgMSAxLS44NDguNTN6Ii8+Cjwvc3ZnPg==)*/
const Bicycle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bicycle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z"/>
</svg>
      )}
    />
  );

export default Bicycle;
