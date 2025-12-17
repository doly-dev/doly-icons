import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-up-left-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptOC4wOTYgMTAuODAzTDYgNi43MDd2Mi43NjhhLjUuNSAwIDAgMS0xIDBWNS41YS41LjUgMCAwIDEgLjUtLjVoMy45NzVhLjUuNSAwIDEgMSAwIDFINi43MDdsNC4wOTYgNC4wOTZhLjUuNSAwIDEgMS0uNzA3LjcwNyIvPgo8L3N2Zz4=)*/
const ArrowUpLeftSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-up-left-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm8.096 10.803L6 6.707v2.768a.5.5 0 0 1-1 0V5.5a.5.5 0 0 1 .5-.5h3.975a.5.5 0 1 1 0 1H6.707l4.096 4.096a.5.5 0 1 1-.707.707"/>
</svg>
      )}
    />
  );

export default ArrowUpLeftSquareFill;
