import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi4xNDYgNi4xNDZhLjUuNSAwIDAgMSAuNzA4IDBMOCA3LjI5M2wxLjE0Ni0xLjE0N2EuNS41IDAgMSAxIC43MDguNzA4TDguNzA3IDhsMS4xNDcgMS4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOEw4IDguNzA3IDYuODU0IDkuODU0YS41LjUgMCAwIDEtLjcwOC0uNzA4TDcuMjkzIDggNi4xNDYgNi44NTRhLjUuNSAwIDAgMSAwLS43MDgiLz4KICA8cGF0aCBkPSJNNCAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yem0wIDFoOGExIDEgMCAwIDEgMSAxdjEyYTEgMSAwIDAgMS0xIDFINGExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMSIvPgo8L3N2Zz4=)*/
const FileX: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-x"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default FileX;
