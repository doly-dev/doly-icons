import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![eraser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4wODYgMi4yMDdhMiAyIDAgMCAxIDIuODI4IDBsMy44NzkgMy44NzlhMiAyIDAgMCAxIDAgMi44MjhsLTUuNSA1LjVBMiAyIDAgMCAxIDcuODc5IDE1SDUuMTJhMiAyIDAgMCAxLTEuNDE0LS41ODZsLTIuNS0yLjVhMiAyIDAgMCAxIDAtMi44Mjh6bTIuMTIxLjcwN2ExIDEgMCAwIDAtMS40MTQgMEw0LjE2IDcuNTQ3bDUuMjkzIDUuMjkzIDQuNjMzLTQuNjMzYTEgMSAwIDAgMCAwLTEuNDE0ek04Ljc0NiAxMy41NDcgMy40NTMgOC4yNTQgMS45MTQgOS43OTNhMSAxIDAgMCAwIDAgMS40MTRsMi41IDIuNWExIDEgMCAwIDAgLjcwNy4yOTNINy44OGExIDEgMCAwIDAgLjcwNy0uMjkzeiIvPgo8L3N2Zz4=)*/
const Eraser: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="eraser"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
</svg>
      )}
    />
  );

export default Eraser;
