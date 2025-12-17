import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clipboard-x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjE0NiA3LjE0NmEuNS41IDAgMCAxIC43MDggMEw4IDguMjkzbDEuMTQ2LTEuMTQ3YS41LjUgMCAxIDEgLjcwOC43MDhMOC43MDcgOWwxLjE0NyAxLjE0NmEuNS41IDAgMCAxLS43MDguNzA4TDggOS43MDdsLTEuMTQ2IDEuMTQ3YS41LjUgMCAwIDEtLjcwOC0uNzA4TDcuMjkzIDkgNi4xNDYgNy44NTRhLjUuNSAwIDAgMSAwLS43MDgiLz4KICA8cGF0aCBkPSJNNCAxLjVIM2EyIDIgMCAwIDAtMiAyVjE0YTIgMiAwIDAgMCAyIDJoMTBhMiAyIDAgMCAwIDItMlYzLjVhMiAyIDAgMCAwLTItMmgtMXYxaDFhMSAxIDAgMCAxIDEgMVYxNGExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVYzLjVhMSAxIDAgMCAxIDEtMWgxeiIvPgogIDxwYXRoIGQ9Ik05LjUgMWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTNhLjUuNSAwIDAgMS0uNS0uNXYtMWEuNS41IDAgMCAxIC41LS41em0tMy0xQTEuNSAxLjUgMCAwIDAgNSAxLjV2MUExLjUgMS41IDAgMCAwIDYuNSA0aDNBMS41IDEuNSAwIDAgMCAxMSAyLjV2LTFBMS41IDEuNSAwIDAgMCA5LjUgMHoiLz4KPC9zdmc+)*/
const ClipboardX: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clipboard-x"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
</svg>
      )}
    />
  );

export default ClipboardX;
