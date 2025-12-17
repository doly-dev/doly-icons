import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNi42NGExIDEgMCAwIDAtMS4yNDMtLjk3bC0xIC4yNUExIDEgMCAwIDAgOCA2Ljg5djQuMzA2QTIuNiAyLjYgMCAwIDAgNyAxMWMtLjUgMC0uOTc0LjEzNC0xLjMzOC4zNzctLjM2LjI0LS42NjIuNjI4LS42NjIgMS4xMjNzLjMwMS44ODMuNjYyIDEuMTIzYy4zNjQuMjQzLjgzOS4zNzcgMS4zMzguMzc3cy45NzQtLjEzNCAxLjMzOC0uMzc3Yy4zNi0uMjQuNjYyLS42MjguNjYyLTEuMTIzVjguODlsMi0uNXoiLz4KICA8cGF0aCBkPSJNMTQgMTRWNC41TDkuNSAwSDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMk05LjUgM0ExLjUgMS41IDAgMCAwIDExIDQuNWgyVjE0YTEgMSAwIDAgMS0xIDFINGExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMWg1LjV6Ii8+Cjwvc3ZnPg==)*/
const FileEarmarkMusic: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-music"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.6 2.6 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377s.974-.134 1.338-.377c.36-.24.662-.628.662-1.123V8.89l2-.5z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkMusic;
