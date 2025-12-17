import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sign-intersection](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4yNSA0djMuMjVINHYxLjVoMy4yNVYxMmgxLjVWOC43NUgxMnYtMS41SDguNzVWNHoiLz4KICA8cGF0aCBkPSJNOS4wNS40MzVjLS41OC0uNTgtMS41Mi0uNTgtMi4xIDBMLjQzNiA2Ljk1Yy0uNTguNTgtLjU4IDEuNTE5IDAgMi4wOThsNi41MTYgNi41MTZjLjU4LjU4IDEuNTE5LjU4IDIuMDk4IDBsNi41MTYtNi41MTZjLjU4LS41OC41OC0xLjUxOSAwLTIuMDk4em0tMS40LjdhLjQ5NS40OTUgMCAwIDEgLjcgMGw2LjUxNiA2LjUxNWEuNDk1LjQ5NSAwIDAgMSAwIC43TDguMzUgMTQuODY2YS40OTUuNDk1IDAgMCAxLS43IDBMMS4xMzQgOC4zNWEuNDk1LjQ5NSAwIDAgMSAwLS43TDcuNjUgMS4xMzRaIi8+Cjwvc3ZnPg==)*/
const SignIntersection: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sign-intersection"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.25 4v3.25H4v1.5h3.25V12h1.5V8.75H12v-1.5H8.75V4z"/>
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z"/>
</svg>
      )}
    />
  );

export default SignIntersection;
