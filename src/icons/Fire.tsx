import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNmMzLjMxNCAwIDYtMiA2LTUuNSAwLTEuNS0uNS00LTIuNS02IC4yNSAxLjUtMS4yNSAyLTEuMjUgMkMxMSA0IDkgLjUgNiAwYy4zNTcgMiAuNSA0LTIgNi0xLjI1IDEtMiAyLjcyOS0yIDQuNUMyIDE0IDQuNjg2IDE2IDggMTZtMC0xYy0xLjY1NyAwLTMtMS0zLTIuNzUgMC0uNzUuMjUtMiAxLjI1LTNDNi4xMjUgMTAgNyAxMC41IDcgMTAuNWMtLjM3NS0xLjI1LjUtMy4yNSAyLTMuNS0uMTc5IDEtLjI1IDIgMSAzIC42MjUuNSAxIDEuMzY0IDEgMi4yNUMxMSAxNCA5LjY1NyAxNSA4IDE1Ii8+Cjwvc3ZnPg==)*/
const Fire: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="fire"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
</svg>
      )}
    />
  );

export default Fire;
