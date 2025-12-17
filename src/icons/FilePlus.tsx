import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDZhLjUuNSAwIDAgMC0xIDB2MS41SDZhLjUuNSAwIDAgMCAwIDFoMS41VjEwYS41LjUgMCAwIDAgMSAwVjguNUgxMGEuNS41IDAgMCAwIDAtMUg4LjV6Ii8+CiAgPHBhdGggZD0iTTIgMmEyIDIgMCAwIDEgMi0yaDhhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMnptMTAtMUg0YTEgMSAwIDAgMC0xIDF2MTJhMSAxIDAgMCAwIDEgMWg4YTEgMSAwIDAgMCAxLTFWMmExIDEgMCAwIDAtMS0xIi8+Cjwvc3ZnPg==)*/
const FilePlus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-plus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
</svg>
      )}
    />
  );

export default FilePlus;
