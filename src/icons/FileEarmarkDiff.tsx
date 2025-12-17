import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-diff](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA1YS41LjUgMCAwIDEgLjUuNVY3SDEwYS41LjUgMCAwIDEgMCAxSDguNXYxLjVhLjUuNSAwIDAgMS0xIDBWOEg2YS41LjUgMCAwIDEgMC0xaDEuNVY1LjVBLjUuNSAwIDAgMSA4IDVtLTIuNSA2LjVBLjUuNSAwIDAgMSA2IDExaDRhLjUuNSAwIDAgMSAwIDFINmEuNS41IDAgMCAxLS41LS41Ii8+CiAgPHBhdGggZD0iTTE0IDE0VjQuNUw5LjUgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJNOS41IDNBMS41IDEuNSAwIDAgMCAxMSA0LjVoMlYxNGExIDEgMCAwIDEtMSAxSDRhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFoNS41eiIvPgo8L3N2Zz4=)*/
const FileEarmarkDiff: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-diff"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 5a.5.5 0 0 1 .5.5V7H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V8H6a.5.5 0 0 1 0-1h1.5V5.5A.5.5 0 0 1 8 5m-2.5 6.5A.5.5 0 0 1 6 11h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkDiff;
