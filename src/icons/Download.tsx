import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![download](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNLjUgOS45YS41LjUgMCAwIDEgLjUuNXYyLjVhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xdi0yLjVhLjUuNSAwIDAgMSAxIDB2Mi41YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0ydi0yLjVhLjUuNSAwIDAgMSAuNS0uNSIvPgogIDxwYXRoIGQ9Ik03LjY0NiAxMS44NTRhLjUuNSAwIDAgMCAuNzA4IDBsMy0zYS41LjUgMCAwIDAtLjcwOC0uNzA4TDguNSAxMC4yOTNWMS41YS41LjUgMCAwIDAtMSAwdjguNzkzTDUuMzU0IDguMTQ2YS41LjUgMCAxIDAtLjcwOC43MDh6Ii8+Cjwvc3ZnPg==)*/
const Download: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="download"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg>
      )}
    />
  );

export default Download;
