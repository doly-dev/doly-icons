import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![yin-yang](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS4xNjcgNC41YTEuMTY3IDEuMTY3IDAgMSAxLTIuMzM0IDAgMS4xNjcgMS4xNjcgMCAwIDEgMi4zMzQgMCIvPgogIDxwYXRoIGQ9Ik04IDBhOCA4IDAgMSAwIDAgMTZBOCA4IDAgMCAwIDggME0xIDhhNyA3IDAgMCAxIDctNyAzLjUgMy41IDAgMSAxIDAgNyAzLjUgMy41IDAgMSAwIDAgNyA3IDcgMCAwIDEtNy03bTcgNC42NjdhMS4xNjcgMS4xNjcgMCAxIDEgMC0yLjMzNCAxLjE2NyAxLjE2NyAwIDAgMSAwIDIuMzM0Ii8+Cjwvc3ZnPg==)*/
const YinYang: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="yin-yang"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7m7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334"/>
</svg>
      )}
    />
  );

export default YinYang;
