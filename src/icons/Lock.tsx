import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDBhNCA0IDAgMCAxIDQgNHYyLjA1YTIuNSAyLjUgMCAwIDEgMiAyLjQ1djVhMi41IDIuNSAwIDAgMS0yLjUgMi41aC03QTIuNSAyLjUgMCAwIDEgMiAxMy41di01YTIuNSAyLjUgMCAwIDEgMi0yLjQ1VjRhNCA0IDAgMCAxIDQtNE00LjUgN0ExLjUgMS41IDAgMCAwIDMgOC41djVBMS41IDEuNSAwIDAgMCA0LjUgMTVoN2ExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTVBMS41IDEuNSAwIDAgMCAxMS41IDd6TTggMWEzIDMgMCAwIDAtMyAzdjJoNlY0YTMgMyAwIDAgMC0zLTMiLz4KPC9zdmc+)*/
const Lock: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="lock"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
</svg>
      )}
    />
  );

export default Lock;
