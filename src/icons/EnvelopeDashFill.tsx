import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-dash-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNLjA1IDMuNTU1QTIgMiAwIDAgMSAyIDJoMTJhMiAyIDAgMCAxIDEuOTUgMS41NTVMOCA4LjQxNHpNMCA0LjY5N3Y3LjEwNGw1LjgwMy0zLjU1OHpNNi43NjEgOC44M2wtNi41NyA0LjAyNkEyIDIgMCAwIDAgMiAxNGg2LjI1NkE0LjUgNC41IDAgMCAxIDggMTIuNWE0LjQ5IDQuNDkgMCAwIDEgMS42MDYtMy40NDZsLS4zNjctLjIyNUw4IDkuNTg2ek0xNiA0LjY5N3Y0Ljk3NEE0LjUgNC41IDAgMCAwIDEyLjUgOGE0LjUgNC41IDAgMCAwLTEuOTY1LjQ1bC0uMzM4LS4yMDd6Ii8+CiAgPHBhdGggZD0iTTE2IDEyLjVhMy41IDMuNSAwIDEgMS03IDAgMy41IDMuNSAwIDAgMSA3IDBtLTUuNSAwYS41LjUgMCAwIDAgLjUuNWgzYS41LjUgMCAwIDAgMC0xaC0zYS41LjUgMCAwIDAtLjUuNSIvPgo8L3N2Zz4=)*/
const EnvelopeDashFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-dash-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-5.5 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5"/>
</svg>
      )}
    />
  );

export default EnvelopeDashFill;
