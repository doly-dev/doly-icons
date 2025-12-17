import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sign-turn-left-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS4wNS40MzVjLS41OC0uNTgtMS41Mi0uNTgtMi4xIDBMLjQzNiA2Ljk1Yy0uNTguNTgtLjU4IDEuNTE5IDAgMi4wOThsNi41MTYgNi41MTZjLjU4LjU4IDEuNTE5LjU4IDIuMDk4IDBsNi41MTYtNi41MTZjLjU4LS41OC41OC0xLjUxOSAwLTIuMDk4ek03IDguNDY2YS4yNS4yNSAwIDAgMS0uNDEuMTkyTDQuMjMgNi42OTJhLjI1LjI1IDAgMCAxIDAtLjM4NGwyLjM2LTEuOTY2YS4yNS4yNSAwIDAgMSAuNDEuMTkyVjZoMS41QTIuNSAyLjUgMCAwIDEgMTEgOC41VjExaC0xVjguNUExLjUgMS41IDAgMCAwIDguNSA3SDd6Ii8+Cjwvc3ZnPg==)*/
const SignTurnLeftFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sign-turn-left-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM7 8.466a.25.25 0 0 1-.41.192L4.23 6.692a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V6h1.5A2.5 2.5 0 0 1 11 8.5V11h-1V8.5A1.5 1.5 0 0 0 8.5 7H7z"/>
</svg>
      )}
    />
  );

export default SignTurnLeftFill;
