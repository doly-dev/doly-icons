import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-word](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC44NzkgNC41MTVhLjUuNSAwIDAgMSAuNjA2LjM2NGwxLjAzNiA0LjE0NC45OTctMy42NTVhLjUuNSAwIDAgMSAuOTY0IDBsLjk5NyAzLjY1NSAxLjAzNi00LjE0NGEuNS41IDAgMCAxIC45Ny4yNDJsLTEuNSA2YS41LjUgMCAwIDEtLjk2Ny4wMUw4IDcuNDAybC0xLjAxOCAzLjczYS41LjUgMCAwIDEtLjk2Ny0uMDFsLTEuNS02YS41LjUgMCAwIDEgLjM2NC0uNjA2eiIvPgogIDxwYXRoIGQ9Ik00IDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJ6bTAgMWg4YTEgMSAwIDAgMSAxIDF2MTJhMSAxIDAgMCAxLTEgMUg0YTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xIi8+Cjwvc3ZnPg==)*/
const FileWord: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-word"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.879 4.515a.5.5 0 0 1 .606.364l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 7.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 0 1 .364-.606z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default FileWord;
