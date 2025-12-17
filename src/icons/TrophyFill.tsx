import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![trophy-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41LjVBLjUuNSAwIDAgMSAzIDBoMTBhLjUuNSAwIDAgMSAuNS41cTAgLjgwNy0uMDM0IDEuNTM2YTMgMyAwIDEgMS0xLjEzMyA1Ljg5Yy0uNzkgMS44NjUtMS44NzggMi43NzctMi44MzMgMy4wMTF2Mi4xNzNsMS40MjUuMzU2Yy4xOTQuMDQ4LjM3Ny4xMzUuNTM3LjI1NUwxMy4zIDE1LjFhLjUuNSAwIDAgMS0uMy45SDNhLjUuNSAwIDAgMS0uMy0uOWwxLjgzOC0xLjM3OWMuMTYtLjEyLjM0My0uMjA3LjUzNy0uMjU1TDYuNSAxMy4xMXYtMi4xNzNjLS45NTUtLjIzNC0yLjA0My0xLjE0Ni0yLjgzMy0zLjAxMmEzIDMgMCAxIDEtMS4xMzItNS44OUEzMyAzMyAwIDAgMSAyLjUuNW0uMDk5IDIuNTRhMiAyIDAgMCAwIC43MiAzLjkzNWMtLjMzMy0xLjA1LS41ODgtMi4zNDYtLjcyLTMuOTM1bTEwLjA4MyAzLjkzNWEyIDIgMCAwIDAgLjcyLTMuOTM1Yy0uMTMzIDEuNTktLjM4OCAyLjg4NS0uNzIgMy45MzUiLz4KPC9zdmc+)*/
const TrophyFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="trophy-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
</svg>
      )}
    />
  );

export default TrophyFill;
