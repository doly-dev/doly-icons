import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![palette-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNDMzIDEwLjA3QzE0LjEzMyAxMC41ODUgMTYgMTEuMTUgMTYgOGE4IDggMCAxIDAtOCA4YzEuOTk2IDAgMS44MjYtMS41MDQgMS42NDktMy4wOC0uMTI0LTEuMTAxLS4yNTItMi4yMzcuMzUxLTIuOTIuNDY1LS41MjcgMS40Mi0uMjM3IDIuNDMzLjA3TTggNWExLjUgMS41IDAgMSAxIDAtMyAxLjUgMS41IDAgMCAxIDAgM200LjUgM2ExLjUgMS41IDAgMSAxIDAtMyAxLjUgMS41IDAgMCAxIDAgM001IDYuNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMG0uNSA2LjVhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDMiLz4KPC9zdmc+)*/
const PaletteFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="palette-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>
      )}
    />
  );

export default PaletteFill;
