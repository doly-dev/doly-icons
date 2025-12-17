import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-diff](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA0YS41LjUgMCAwIDEgLjUuNVY2SDEwYS41LjUgMCAwIDEgMCAxSDguNXYxLjVhLjUuNSAwIDAgMS0xIDBWN0g2YS41LjUgMCAwIDEgMC0xaDEuNVY0LjVBLjUuNSAwIDAgMSA4IDRtLTIuNSA2LjVBLjUuNSAwIDAgMSA2IDEwaDRhLjUuNSAwIDAgMSAwIDFINmEuNS41IDAgMCAxLS41LS41Ii8+CiAgPHBhdGggZD0iTTIgMmEyIDIgMCAwIDEgMi0yaDhhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMnptMTAtMUg0YTEgMSAwIDAgMC0xIDF2MTJhMSAxIDAgMCAwIDEgMWg4YTEgMSAwIDAgMCAxLTFWMmExIDEgMCAwIDAtMS0xIi8+Cjwvc3ZnPg==)*/
const FileDiff: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-diff"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4m-2.5 6.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
</svg>
      )}
    />
  );

export default FileDiff;
