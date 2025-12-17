import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cone-striped](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtOS45NyA0Ljg4Ljk1MyAzLjgxMUMxMC4xNTkgOC44NzggOS4xNCA5IDggOXMtMi4xNTgtLjEyMi0yLjkyMy0uMzA5TDYuMDMgNC44OEM2LjYzNSA0Ljk1NyA3LjMgNSA4IDVzMS4zNjUtLjA0MyAxLjk3LS4xMm0tLjI0NS0uOTc4TDguOTcuODhDOC43MTgtLjEzIDcuMjgyLS4xMyA3LjAzLjg4TDYuMjc1IDMuOUM2LjggMy45NjUgNy4zODIgNCA4IDRzMS4yLS4wMzYgMS43MjUtLjA5OG00LjM5NiA4LjYxM2EuNS41IDAgMCAxIC4wMzcuOTZsLTYgMmEuNS41IDAgMCAxLS4zMTYgMGwtNi0yYS41LjUgMCAwIDEgLjAzNy0uOTZsMi4zOTEtLjU5OC41NjUtMi4yNTdjLjg2Mi4yMTIgMS45NjQuMzM5IDMuMTY1LjMzOXMyLjMwMy0uMTI3IDMuMTY1LS4zMzlsLjU2NSAyLjI1N3oiLz4KPC9zdmc+)*/
const ConeStriped: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cone-striped"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9s-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12m-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4s1.2-.036 1.725-.098m4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257z"/>
</svg>
      )}
    />
  );

export default ConeStriped;
