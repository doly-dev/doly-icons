import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS41IDhhLjUuNSAwIDAgMSAuNS0uNWg0YS41LjUgMCAwIDEgMCAxSDZhLjUuNSAwIDAgMS0uNS0uNSIvPgogIDxwYXRoIGQ9Ik00IDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJ6bTAgMWg4YTEgMSAwIDAgMSAxIDF2MTJhMSAxIDAgMCAxLTEgMUg0YTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xIi8+Cjwvc3ZnPg==)*/
const FileMinus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-minus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default FileMinus;
