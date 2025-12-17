import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar2-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuODU0IDguMTQ2YS41LjUgMCAwIDEgMCAuNzA4bC0zIDNhLjUuNSAwIDAgMS0uNzA4IDBsLTEuNS0xLjVhLjUuNSAwIDAgMSAuNzA4LS43MDhMNy41IDEwLjc5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMCAxIC43MDggMCIvPgogIDxwYXRoIGQ9Ik0zLjUgMGEuNS41IDAgMCAxIC41LjVWMWg4Vi41YS41LjUgMCAwIDEgMSAwVjFoMWEyIDIgMCAwIDEgMiAydjExYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjNhMiAyIDAgMCAxIDItMmgxVi41YS41LjUgMCAwIDEgLjUtLjVNMiAyYTEgMSAwIDAgMC0xIDF2MTFhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xVjNhMSAxIDAgMCAwLTEtMXoiLz4KICA8cGF0aCBkPSJNMi41IDRhLjUuNSAwIDAgMSAuNS0uNWgxMGEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVIM2EuNS41IDAgMCAxLS41LS41eiIvPgo8L3N2Zz4=)*/
const Calendar2Check: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar2-check"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      )}
    />
  );

export default Calendar2Check;
