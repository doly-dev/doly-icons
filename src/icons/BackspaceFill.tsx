import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![backspace-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuNjgzIDNhMiAyIDAgMCAwLTItMmgtNy4wOGEyIDIgMCAwIDAtMS41MTkuNjk4TC4yNDEgNy4zNWExIDEgMCAwIDAgMCAxLjMwMmw0Ljg0MyA1LjY1QTIgMiAwIDAgMCA2LjYwMyAxNWg3LjA4YTIgMiAwIDAgMCAyLTJ6TTUuODI5IDUuODU0YS41LjUgMCAxIDEgLjcwNy0uNzA4bDIuMTQ3IDIuMTQ3IDIuMTQ2LTIuMTQ3YS41LjUgMCAxIDEgLjcwNy43MDhMOS4zOSA4bDIuMTQ2IDIuMTQ2YS41LjUgMCAwIDEtLjcwNy43MDhMOC42ODMgOC43MDdsLTIuMTQ3IDIuMTQ3YS41LjUgMCAwIDEtLjcwNy0uNzA4TDcuOTc2IDh6Ii8+Cjwvc3ZnPg==)*/
const BackspaceFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="backspace-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8z"/>
</svg>
      )}
    />
  );

export default BackspaceFill;
