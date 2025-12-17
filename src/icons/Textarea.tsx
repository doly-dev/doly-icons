import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![textarea](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS41IDIuNUExLjUgMS41IDAgMCAxIDMgMWgxMGExLjUgMS41IDAgMCAxIDEuNSAxLjV2My41NjNhMiAyIDAgMCAxIDAgMy44NzRWMTMuNUExLjUgMS41IDAgMCAxIDEzIDE1SDNhMS41IDEuNSAwIDAgMS0xLjUtMS41VjkuOTM3YTIgMiAwIDAgMSAwLTMuODc0em0xIDMuNTYzYTIgMiAwIDAgMSAwIDMuODc0VjEzLjVhLjUuNSAwIDAgMCAuNS41aDEwYS41LjUgMCAwIDAgLjUtLjVWOS45MzdhMiAyIDAgMCAxIDAtMy44NzRWMi41QS41LjUgMCAwIDAgMTMgMkgzYS41LjUgMCAwIDAtLjUuNXpNMiA3YTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMm0xMiAwYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMiIvPgo8L3N2Zz4=)*/
const Textarea: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="textarea"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
</svg>
      )}
    />
  );

export default Textarea;
