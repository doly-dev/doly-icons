import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![inboxes-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC45OCAxYS41LjUgMCAwIDAtLjM5LjE4OEwxLjU0IDVINmEuNS41IDAgMCAxIC41LjUgMS41IDEuNSAwIDAgMCAzIDBBLjUuNSAwIDAgMSAxMCA1aDQuNDZsLTMuMDUtMy44MTJBLjUuNSAwIDAgMCAxMS4wMiAxek0zLjgxLjU2M0ExLjUgMS41IDAgMCAxIDQuOTggMGg2LjA0YTEuNSAxLjUgMCAwIDEgMS4xNy41NjNsMy43IDQuNjI1YS41LjUgMCAwIDEgLjEwNi4zNzRsLS4zOSAzLjEyNEExLjUgMS41IDAgMCAxIDE0LjExNyAxMEgxLjg4M0ExLjUgMS41IDAgMCAxIC4zOTQgOC42ODZsLS4zOS0zLjEyNGEuNS41IDAgMCAxIC4xMDYtLjM3NHpNLjEyNSAxMS4xN0EuNS41IDAgMCAxIC41IDExSDZhLjUuNSAwIDAgMSAuNS41IDEuNSAxLjUgMCAwIDAgMyAwIC41LjUgMCAwIDEgLjUtLjVoNS41YS41LjUgMCAwIDEgLjQ5Ni41NjJsLS4zOSAzLjEyNEExLjUgMS41IDAgMCAxIDE0LjExNyAxNkgxLjg4M2ExLjUgMS41IDAgMCAxLTEuNDg5LTEuMzE0bC0uMzktMy4xMjRhLjUuNSAwIDAgMSAuMTIxLS4zOTN6Ii8+Cjwvc3ZnPg==)*/
const InboxesFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="inboxes-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z"/>
</svg>
      )}
    />
  );

export default InboxesFill;
