import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sign-intersection-side](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi4yNSA0djhoMS41VjguNzVIMTF2LTEuNUg3Ljc1VjR6Ii8+CiAgPHBhdGggZD0iTTkuMDUuNDM1Yy0uNTgtLjU4LTEuNTItLjU4LTIuMSAwTC40MzYgNi45NWMtLjU4LjU4LS41OCAxLjUxOSAwIDIuMDk4bDYuNTE2IDYuNTE2Yy41OC41OCAxLjUxOS41OCAyLjA5OCAwbDYuNTE2LTYuNTE2Yy41OC0uNTguNTgtMS41MTkgMC0yLjA5OHptLTEuNC43YS40OTUuNDk1IDAgMCAxIC43IDBsNi41MTYgNi41MTVhLjQ5NS40OTUgMCAwIDEgMCAuN0w4LjM1IDE0Ljg2NmEuNDk1LjQ5NSAwIDAgMS0uNyAwTDEuMTM0IDguMzVhLjQ5NS40OTUgMCAwIDEgMC0uN0w3LjY1IDEuMTM0WiIvPgo8L3N2Zz4=)*/
const SignIntersectionSide: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sign-intersection-side"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.25 4v8h1.5V8.75H11v-1.5H7.75V4z"/>
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z"/>
</svg>
      )}
    />
  );

export default SignIntersectionSide;
