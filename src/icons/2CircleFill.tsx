import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![2-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTYuNjQ2IDYuMjRjMC0uNjkxLjQ5My0xLjMwNiAxLjMzNi0xLjMwNi43NTYgMCAxLjMxMy40OTIgMS4zMTMgMS4yMzYgMCAuNjk3LS40NjkgMS4yMy0uOTAyIDEuNzA1bC0yLjk3MSAzLjI5M1YxMmg1LjM0NHYtMS4xMDdINy4yNjh2LS4wNzdsMS45NzQtMi4yMi4wOTYtLjEwN2MuNjg4LS43NjMgMS4yODctMS40MjggMS4yODctMi40MyAwLTEuMjY2LTEuMDMxLTIuMjE1LTIuNjEzLTIuMjE1LTEuNzU4IDAtMi42MzcgMS4xOS0yLjYzNyAyLjQwMnYuMDY1aDEuMjcxdi0uMDdaIi8+Cjwvc3ZnPg==)*/
const Icon2CircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="2-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/>
</svg>
      )}
    />
  );

export default Icon2CircleFill;
