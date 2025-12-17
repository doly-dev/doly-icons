import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![award](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS42NjkuODY0IDggMCA2LjMzMS44NjRsLTEuODU4LjI4Mi0uODQyIDEuNjgtMS4zMzcgMS4zMkwyLjYgNmwtLjMwNiAxLjg1NCAxLjMzNyAxLjMyLjg0MiAxLjY4IDEuODU4LjI4Mkw4IDEybDEuNjY5LS44NjQgMS44NTgtLjI4Mi44NDItMS42OCAxLjMzNy0xLjMyTDEzLjQgNmwuMzA2LTEuODU0LTEuMzM3LTEuMzItLjg0Mi0xLjY4em0xLjE5NiAxLjE5My42ODQgMS4zNjUgMS4wODYgMS4wNzJMMTIuMzg3IDZsLjI0OCAxLjUwNi0xLjA4NiAxLjA3Mi0uNjg0IDEuMzY1LTEuNTEuMjI5TDggMTAuODc0bC0xLjM1NS0uNzAyLTEuNTEtLjIyOS0uNjg0LTEuMzY1LTEuMDg2LTEuMDcyTDMuNjE0IDZsLS4yNS0xLjUwNiAxLjA4Ny0xLjA3Mi42ODQtMS4zNjUgMS41MS0uMjI5TDggMS4xMjZsMS4zNTYuNzAyeiIvPgogIDxwYXRoIGQ9Ik00IDExLjc5NFYxNmw0LTEgNCAxdi00LjIwNmwtMi4wMTguMzA2TDggMTMuMTI2IDYuMDE4IDEyLjF6Ii8+Cjwvc3ZnPg==)*/
const Award: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="award"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
</svg>
      )}
    />
  );

export default Award;
