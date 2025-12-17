import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![code-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMWExIDEgMCAwIDEgMSAxdjEyYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMXpNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnoiLz4KICA8cGF0aCBkPSJNNi44NTQgNC42NDZhLjUuNSAwIDAgMSAwIC43MDhMNC4yMDcgOGwyLjY0NyAyLjY0NmEuNS41IDAgMCAxLS43MDguNzA4bC0zLTNhLjUuNSAwIDAgMSAwLS43MDhsMy0zYS41LjUgMCAwIDEgLjcwOCAwbTIuMjkyIDBhLjUuNSAwIDAgMCAwIC43MDhMMTEuNzkzIDhsLTIuNjQ3IDIuNjQ2YS41LjUgMCAwIDAgLjcwOC43MDhsMy0zYS41LjUgMCAwIDAgMC0uNzA4bC0zLTNhLjUuNSAwIDAgMC0uNzA4IDAiLz4KPC9zdmc+)*/
const CodeSquare: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="code-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
</svg>
      )}
    />
  );

export default CodeSquare;
