import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-start](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCA0YS41LjUgMCAwIDEgMSAwdjMuMjQ4bDYuMjY3LTMuNjM2Yy41Mi0uMzAyIDEuMjMzLjA0MyAxLjIzMy42OTZ2Ny4zODRjMCAuNjUzLS43MTMuOTk4LTEuMjMzLjY5Nkw1IDguNzUyVjEyYS41LjUgMCAwIDEtMSAwem03LjUuNjMzTDUuNjk2IDhsNS44MDQgMy4zNjd6Ii8+Cjwvc3ZnPg==)*/
const SkipStart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-start"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0zm7.5.633L5.696 8l5.804 3.367z"/>
</svg>
      )}
    />
  );

export default SkipStart;
