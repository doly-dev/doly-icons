import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-smile-upside-down-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAwYTggOCAwIDEgMSAwIDE2QTggOCAwIDAgMSA4IDBNNyA5LjVDNyA4LjY3MiA2LjU1MiA4IDYgOHMtMSAuNjcyLTEgMS41LjQ0OCAxLjUgMSAxLjUgMS0uNjcyIDEtMS41TTQuMjg1IDYuNDMzYS41LjUgMCAwIDAgLjY4My0uMTgzQTMuNSAzLjUgMCAwIDEgOCA0LjVjMS4yOTUgMCAyLjQyNi43MDMgMy4wMzIgMS43NWEuNS41IDAgMCAwIC44NjYtLjVBNC41IDQuNSAwIDAgMCA4IDMuNWE0LjUgNC41IDAgMCAwLTMuODk4IDIuMjUuNS41IDAgMCAwIC4xODMuNjgzTTEwIDhjLS41NTIgMC0xIC42NzItMSAxLjVzLjQ0OCAxLjUgMSAxLjUgMS0uNjcyIDEtMS41UzEwLjU1MiA4IDEwIDgiLz4KPC9zdmc+)*/
const EmojiSmileUpsideDownFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-smile-upside-down-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5M4.285 6.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M10 8c-.552 0-1 .672-1 1.5s.448 1.5 1 1.5 1-.672 1-1.5S10.552 8 10 8"/>
</svg>
      )}
    />
  );

export default EmojiSmileUpsideDownFill;
