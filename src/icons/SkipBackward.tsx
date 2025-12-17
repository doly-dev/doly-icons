import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-backward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNLjUgMy41QS41LjUgMCAwIDEgMSA0djMuMjQ4bDYuMjY3LTMuNjM2Yy41Mi0uMzAyIDEuMjMzLjA0MyAxLjIzMy42OTZ2Mi45NGw2LjI2Ny0zLjYzNmMuNTItLjMwMiAxLjIzMy4wNDMgMS4yMzMuNjk2djcuMzg0YzAgLjY1My0uNzEzLjk5OC0xLjIzMy42OTZMOC41IDguNzUydjIuOTRjMCAuNjUzLS43MTMuOTk4LTEuMjMzLjY5NkwxIDguNzUyVjEyYS41LjUgMCAwIDEtMSAwVjRhLjUuNSAwIDAgMSAuNS0uNW03IDEuMTMzTDEuNjk2IDggNy41IDExLjM2N3ptNy41IDBMOS4xOTYgOCAxNSAxMS4zNjd6Ii8+Cjwvc3ZnPg==)*/
const SkipBackward: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-backward"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m7 1.133L1.696 8 7.5 11.367zm7.5 0L9.196 8 15 11.367z"/>
</svg>
      )}
    />
  );

export default SkipBackward;
