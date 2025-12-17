import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![5-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSA4YTcgNyAwIDEgMSAxNCAwQTcgNyAwIDAgMSAxIDhtMTUgMEE4IDggMCAxIDAgMCA4YTggOCAwIDAgMCAxNiAwbS04LjAwNiA0LjE1OGMtMS41NyAwLTIuNjU0LS45MDItMi43MTktMi4xMTVoMS4yMzdjLjE0LjcyLjgzMiAxLjAzMSAxLjUyOSAxLjAzMS43OTEgMCAxLjU3LS41OTcgMS41Ny0xLjY4MSAwLS45NjctLjczMi0xLjU3LTEuNTgyLTEuNTctLjc2NyAwLTEuMjQyLjQ1LTEuNDM1LjgwOEg1LjQ0NUw1Ljc5MSA0aDQuNzA1djEuMTAzSDYuODc1bC0uMTkzIDIuMzQzaC4wNjRjLjE3LS4yNTguNzE1LS42OCAxLjYxMS0uNjggMS4zODMgMCAyLjU2MS45NDQgMi41NjEgMi41ODUgMCAxLjY4Ny0xLjE4NCAyLjgwNi0yLjkyNCAyLjgwNloiLz4KPC9zdmc+)*/
const Icon5Circle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="5-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m15 0A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8.006 4.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z"/>
</svg>
      )}
    />
  );

export default Icon5Circle;
