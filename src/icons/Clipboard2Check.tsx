import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clipboard2-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS41IDBhLjUuNSAwIDAgMSAuNS41LjUuNSAwIDAgMCAuNS41LjUuNSAwIDAgMSAuNS41VjJhLjUuNSAwIDAgMS0uNS41aC01QS41LjUgMCAwIDEgNSAydi0uNWEuNS41IDAgMCAxIC41LS41LjUuNSAwIDAgMCAuNS0uNS41LjUgMCAwIDEgLjUtLjV6Ii8+CiAgPHBhdGggZD0iTTMgMi41YS41LjUgMCAwIDEgLjUtLjVINGEuNS41IDAgMCAwIDAtMWgtLjVBMS41IDEuNSAwIDAgMCAyIDIuNXYxMkExLjUgMS41IDAgMCAwIDMuNSAxNmg5YTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtMTJBMS41IDEuNSAwIDAgMCAxMi41IDFIMTJhLjUuNSAwIDAgMCAwIDFoLjVhLjUuNSAwIDAgMSAuNS41djEyYS41LjUgMCAwIDEtLjUuNWgtOWEuNS41IDAgMCAxLS41LS41eiIvPgogIDxwYXRoIGQ9Ik0xMC44NTQgNy44NTRhLjUuNSAwIDAgMC0uNzA4LS43MDhMNy41IDkuNzkzIDYuMzU0IDguNjQ2YS41LjUgMCAxIDAtLjcwOC43MDhsMS41IDEuNWEuNS41IDAgMCAwIC43MDggMHoiLz4KPC9zdmc+)*/
const Clipboard2Check: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clipboard2-check"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
  <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
</svg>
      )}
    />
  );

export default Clipboard2Check;
