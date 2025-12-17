import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![exclamation-triangle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC45ODIgMS41NjZhMS4xMyAxLjEzIDAgMCAwLTEuOTYgMEwuMTY1IDEzLjIzM2MtLjQ1Ny43NzguMDkxIDEuNzY3Ljk4IDEuNzY3aDEzLjcxM2MuODg5IDAgMS40MzgtLjk5Ljk4LTEuNzY3ek04IDVjLjUzNSAwIC45NTQuNDYyLjkuOTk1bC0uMzUgMy41MDdhLjU1Mi41NTIgMCAwIDEtMS4xIDBMNy4xIDUuOTk1QS45MDUuOTA1IDAgMCAxIDggNW0uMDAyIDZhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yIi8+Cjwvc3ZnPg==)*/
const ExclamationTriangleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="exclamation-triangle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
      )}
    />
  );

export default ExclamationTriangleFill;
