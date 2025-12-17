import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-paper](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAwYTIgMiAwIDAgMC0yIDJ2MS4xMzNsLS45NDEuNTAyQTIgMiAwIDAgMCAwIDUuNFYxNGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNS40YTIgMiAwIDAgMC0xLjA1OS0xLjc2NUwxNCAzLjEzM1YyYTIgMiAwIDAgMC0yLTJ6bTEwIDQuMjY3LjQ3LjI1QTEgMSAwIDAgMSAxNSA1LjR2LjgxN2wtMSAuNnptLTEgMy4xNS0zLjc1IDIuMjVMOCA4LjkxN2wtMS4yNS43NUwzIDcuNDE3VjJhMSAxIDAgMCAxIDEtMWg4YTEgMSAwIDAgMSAxIDF6bS0xMS0uNi0xLS42VjUuNGExIDEgMCAwIDEgLjUzLS44ODJMMiA0LjI2N3ptMTMgLjU2NnY1LjczNGwtNC43NzgtMi44Njd6bS0uMDM1IDYuODhBMSAxIDAgMCAxIDE0IDE1SDJhMSAxIDAgMCAxLS45NjUtLjczOEw4IDEwLjA4M3pNMSAxMy4xMTZWNy4zODNsNC43NzggMi44NjdMMSAxMy4xMTdaIi8+Cjwvc3ZnPg==)*/
const EnvelopePaper: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-paper"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
</svg>
      )}
    />
  );

export default EnvelopePaper;
