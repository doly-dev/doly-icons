import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![info-lg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtOS43MDggNi4wNzUtMy4wMjQuMzc5LS4xMDguNTAyLjU5NS4xMDhjLjM4Ny4wOTMuNDY0LjIzMi4zOC42MTlsLS45NzUgNC41NzdjLS4yNTUgMS4xODMuMTQgMS43NCAxLjA2NyAxLjc0LjcyIDAgMS41NTQtLjMzMiAxLjkzMy0uNzg5bC4xMTYtLjU0OWMtLjI2My4yMzItLjY1LjMyNS0uOTA1LjMyNS0uMzYzIDAtLjQ5NC0uMjU1LS40MDItLjcwNHptLjA5MS0yLjc1NWExLjMyIDEuMzIgMCAxIDEtMi42NCAwIDEuMzIgMS4zMiAwIDAgMSAyLjY0IDAiLz4KPC9zdmc+)*/
const InfoLg: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="info-lg"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"/>
</svg>
      )}
    />
  );

export default InfoLg;
