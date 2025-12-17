import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![exclamation-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy45MzggMi4wMTZBLjEzLjEzIDAgMCAxIDguMDAyIDJhLjEzLjEzIDAgMCAxIC4wNjMuMDE2LjE1LjE1IDAgMCAxIC4wNTQuMDU3bDYuODU3IDExLjY2N2MuMDM2LjA2LjAzNS4xMjQuMDAyLjE4M2EuMi4yIDAgMCAxLS4wNTQuMDYuMS4xIDAgMCAxLS4wNjYuMDE3SDEuMTQ2YS4xLjEgMCAwIDEtLjA2Ni0uMDE3LjIuMiAwIDAgMS0uMDU0LS4wNi4xOC4xOCAwIDAgMSAuMDAyLS4xODNMNy44ODQgMi4wNzNhLjE1LjE1IDAgMCAxIC4wNTQtLjA1N20xLjA0NC0uNDVhMS4xMyAxLjEzIDAgMCAwLTEuOTYgMEwuMTY1IDEzLjIzM2MtLjQ1Ny43NzguMDkxIDEuNzY3Ljk4IDEuNzY3aDEzLjcxM2MuODg5IDAgMS40MzgtLjk5Ljk4LTEuNzY3eiIvPgogIDxwYXRoIGQ9Ik03LjAwMiAxMmExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDBNNy4xIDUuOTk1YS45MDUuOTA1IDAgMSAxIDEuOCAwbC0uMzUgMy41MDdhLjU1Mi41NTIgMCAwIDEtMS4xIDB6Ii8+Cjwvc3ZnPg==)*/
const ExclamationTriangle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="exclamation-triangle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
</svg>
      )}
    />
  );

export default ExclamationTriangle;
