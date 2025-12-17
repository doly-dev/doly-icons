import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![info-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAyYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptOC45MyA0LjU4OC0yLjI5LjI4Ny0uMDgyLjM4LjQ1LjA4M2MuMjk0LjA3LjM1Mi4xNzYuMjg4LjQ2OWwtLjczOCAzLjQ2OGMtLjE5NC44OTcuMTA1IDEuMzE5LjgwOCAxLjMxOS41NDUgMCAxLjE3OC0uMjUyIDEuNDY1LS41OThsLjA4OC0uNDE2Yy0uMi4xNzYtLjQ5Mi4yNDYtLjY4Ni4yNDYtLjI3NSAwLS4zNzUtLjE5My0uMzA0LS41MzN6TTggNS41YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMiIvPgo8L3N2Zz4=)*/
const InfoSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="info-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
      )}
    />
  );

export default InfoSquareFill;
