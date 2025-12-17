import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sign-no-right-turn-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMTMuMjkyQTggOCAwIDAgMCAyLjcwNyAybDQuMDk3IDQuMDk4UTcuMTM3IDYuMDAxIDcuNSA2SDlWNC41MzRhLjI1LjI1IDAgMCAxIC40MS0uMTkybDIuMzYgMS45NjZjLjEyLjEuMTIuMjg0IDAgLjM4NEw5LjQxIDguNjU4bC0uMDI2LjAyem0tLjcwOC43MDhBOCA4IDAgMCAxIDIgMi43MDdsMy44ODUgMy44ODRBMi41IDIuNSAwIDAgMCA1IDguNVYxMWgxVjguNWMwLS40ODkuMjM0LS45MjMuNTk2LTEuMTk3bDYuNjk2IDYuNjk2WiIvPgogIDxwYXRoIGQ9Ik03LjcwNyA3IDkgOC4yOTNWN3oiLz4KPC9zdmc+)*/
const SignNoRightTurnFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sign-no-right-turn-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 13.292A8 8 0 0 0 2.707 2l4.097 4.098Q7.137 6.001 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658l-.026.02zm-.708.708A8 8 0 0 1 2 2.707l3.885 3.884A2.5 2.5 0 0 0 5 8.5V11h1V8.5c0-.489.234-.923.596-1.197l6.696 6.696Z"/>
  <path d="M7.707 7 9 8.293V7z"/>
</svg>
      )}
    />
  );

export default SignNoRightTurnFill;
