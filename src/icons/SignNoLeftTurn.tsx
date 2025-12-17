import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sign-no-left-turn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA4YTggOCAwIDEgMCAxNiAwQTggOCAwIDAgMCAwIDhtMy40MTYgNS4yOSA1Ljk4OC01Ljk4N2MuMzYyLjI3NC41OTYuNzA4LjU5NiAxLjE5N1YxMWgxVjguNWMwLS43NjUtLjM0NC0xLjQ1LS44ODUtMS45MDhsMy4xNzYtMy4xNzZhNyA3IDAgMCAxLTkuODc0IDkuODc0Wm0tLjcwNy0uNzA2YTcgNyAwIDAgMSA5Ljg3NC05Ljg3NEw5LjE5NiA2LjA5N0EyLjUgMi41IDAgMCAwIDguNSA2SDdWNC41MzRhLjI1LjI1IDAgMCAwLS40MS0uMTkyTDQuMjMgNi4zMDhhLjI1LjI1IDAgMCAwIDAgLjM4NGwyLjM2IDEuOTY2LjAyNi4wMnpNOC4yOTMgNyA3IDguMjkzVjd6Ii8+Cjwvc3ZnPg==)*/
const SignNoLeftTurn: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sign-no-left-turn"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m3.416 5.29 5.988-5.987c.362.274.596.708.596 1.197V11h1V8.5c0-.765-.344-1.45-.885-1.908l3.176-3.176a7 7 0 0 1-9.874 9.874Zm-.707-.706a7 7 0 0 1 9.874-9.874L9.196 6.097A2.5 2.5 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966.026.02zM8.293 7 7 8.293V7z"/>
</svg>
      )}
    />
  );

export default SignNoLeftTurn;
