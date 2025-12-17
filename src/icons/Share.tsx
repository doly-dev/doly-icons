import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![share](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMuNSAxYTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zTTExIDIuNWEyLjUgMi41IDAgMSAxIC42MDMgMS42MjhsLTYuNzE4IDMuMTJhMi41IDIuNSAwIDAgMSAwIDEuNTA0bDYuNzE4IDMuMTJhMi41IDIuNSAwIDEgMS0uNDg4Ljg3NmwtNi43MTgtMy4xMmEyLjUgMi41IDAgMSAxIDAtMy4yNTZsNi43MTgtMy4xMkEyLjUgMi41IDAgMCAxIDExIDIuNW0tOC41IDRhMS41IDEuNSAwIDEgMCAwIDMgMS41IDEuNSAwIDAgMCAwLTNtMTEgNS41YTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zIi8+Cjwvc3ZnPg==)*/
const Share: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="share"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
</svg>
      )}
    />
  );

export default Share;
