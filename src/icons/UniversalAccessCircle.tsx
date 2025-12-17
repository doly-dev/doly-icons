import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![universal-access-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA0LjE0M0ExLjA3MSAxLjA3MSAwIDEgMCA4IDJhMS4wNzEgMS4wNzEgMCAwIDAgMCAyLjE0M20tNC42NjggMS40NyAzLjI0LjMxNnYyLjVsLS4zMjMgNC41ODVBLjM4My4zODMgMCAwIDAgNyAxMy4xNGwuODI2LTQuMDE3Yy4wNDUtLjE4LjMwMS0uMTguMzQ2IDBMOSAxMy4xMzlhLjM4My4zODMgMCAwIDAgLjc1Mi0uMTI1TDkuNDMgOC40M3YtMi41bDMuMjM5LS4zMTZhLjM4LjM4IDAgMCAwLS4wNDctLjc1NkgzLjM3OWEuMzguMzggMCAwIDAtLjA0Ny43NTZaIi8+CiAgPHBhdGggZD0iTTggMGE4IDggMCAxIDAgMCAxNkE4IDggMCAwIDAgOCAwTTEgOGE3IDcgMCAxIDEgMTQgMEE3IDcgMCAwIDEgMSA4Ii8+Cjwvc3ZnPg==)*/
const UniversalAccessCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="universal-access-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143m-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8"/>
</svg>
      )}
    />
  );

export default UniversalAccessCircle;
