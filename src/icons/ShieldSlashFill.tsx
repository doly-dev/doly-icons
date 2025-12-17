import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![shield-slash-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjA5MyAzLjA5M2MtLjQ2NSA0LjI3NS44ODUgNy40NiAyLjUxMyA5LjU4OWExMS44IDExLjggMCAwIDAgMi41MTcgMi40NTNjLjM4Ni4yNzMuNzQ0LjQ4MiAxLjA0OC42MjUuMjguMTMyLjU4MS4yNC44MjkuMjRzLjU0OC0uMTA4LjgyOS0uMjRhNyA3IDAgMCAwIDEuMDQ4LS42MjUgMTEuMyAxMS4zIDAgMCAwIDEuNzMzLTEuNTI1em0xMi4yMTUgOC4yMTVMMy4xMjggMS4xMjhBNjEgNjEgMCAwIDEgNS4wNzMuNTZDNi4xNTcuMjY1IDcuMzEgMCA4IDBzMS44NDMuMjY1IDIuOTI4LjU2YzEuMTEuMyAyLjIyOS42NTUgMi44ODcuODdhMS41NCAxLjU0IDAgMCAxIDEuMDQ0IDEuMjYyYy40ODMgMy42MjYtLjMzMiA2LjQ5MS0xLjU1MSA4LjYxNm0uMzM4IDMuMDQ2LTEzLTEzIC43MDgtLjcwOCAxMyAxM3oiLz4KPC9zdmc+)*/
const ShieldSlashFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="shield-slash-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1.093 3.093c-.465 4.275.885 7.46 2.513 9.589a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.3 11.3 0 0 0 1.733-1.525zm12.215 8.215L3.128 1.128A61 61 0 0 1 5.073.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.483 3.626-.332 6.491-1.551 8.616m.338 3.046-13-13 .708-.708 13 13z"/>
</svg>
      )}
    />
  );

export default ShieldSlashFill;
