import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![markdown-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yem0xMS41IDFhLjUuNSAwIDAgMC0uNS41djMuNzkzTDkuODU0IDguMTQ2YS41LjUgMCAxIDAtLjcwOC43MDhsMiAyYS41LjUgMCAwIDAgLjcwOCAwbDItMmEuNS41IDAgMCAwLS43MDgtLjcwOEwxMiA5LjI5M1Y1LjVhLjUuNSAwIDAgMC0uNS0uNU0zLjU2IDcuMDFoLjA1NmwxLjQyOCAzLjIzOWguNzc0bDEuNDItMy4yNGguMDU2VjExaDEuMDczVjUuMDAxaC0xLjJsLTEuNzEgMy44OTRoLS4wMzlsLTEuNzEtMy44OTRIMi41VjExaDEuMDZ6Ii8+Cjwvc3ZnPg==)*/
const MarkdownFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="markdown-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 1a.5.5 0 0 0-.5.5v3.793L9.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L12 9.293V5.5a.5.5 0 0 0-.5-.5M3.56 7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z"/>
</svg>
      )}
    />
  );

export default MarkdownFill;
