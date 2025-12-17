import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtOC45MyA2LjU4OC0yLjI5LjI4Ny0uMDgyLjM4LjQ1LjA4M2MuMjk0LjA3LjM1Mi4xNzYuMjg4LjQ2OWwtLjczOCAzLjQ2OGMtLjE5NC44OTcuMTA1IDEuMzE5LjgwOCAxLjMxOS41NDUgMCAxLjE3OC0uMjUyIDEuNDY1LS41OThsLjA4OC0uNDE2Yy0uMi4xNzYtLjQ5Mi4yNDYtLjY4Ni4yNDYtLjI3NSAwLS4zNzUtLjE5My0uMzA0LS41MzN6TTkgNC41YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMCIvPgo8L3N2Zz4=)*/
const Info: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="info"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
      )}
    />
  );

export default Info;
