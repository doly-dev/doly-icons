import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuMzA0IDMuMTNhMSAxIDAgMCAxIDEuMTk2Ljk4djEuOGwtMi41LjV2NS4wOWMwIC40OTUtLjMwMS44ODMtLjY2MiAxLjEyM0M3Ljk3NCAxMi44NjYgNy40OTkgMTMgNyAxM3MtLjk3NC0uMTM0LTEuMzM4LS4zNzdDNS4zMDIgMTIuMzgzIDUgMTEuOTk1IDUgMTEuNXMuMzAxLS44ODMuNjYyLTEuMTIzQzYuMDI2IDEwLjEzNCA2LjUwMSAxMCA3IDEwYy4zNTYgMCAuNy4wNjggMSAuMTk2VjQuNDFhMSAxIDAgMCAxIC44MDQtLjk4eiIvPgogIDxwYXRoIGQ9Ik00IDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJ6bTAgMWg4YTEgMSAwIDAgMSAxIDF2MTJhMSAxIDAgMCAxLTEgMUg0YTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xIi8+Cjwvc3ZnPg==)*/
const FileMusic: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-music"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.304 3.13a1 1 0 0 1 1.196.98v1.8l-2.5.5v5.09c0 .495-.301.883-.662 1.123C7.974 12.866 7.499 13 7 13s-.974-.134-1.338-.377C5.302 12.383 5 11.995 5 11.5s.301-.883.662-1.123C6.026 10.134 6.501 10 7 10c.356 0 .7.068 1 .196V4.41a1 1 0 0 1 .804-.98z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default FileMusic;
