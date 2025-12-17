import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-haze](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAxMS41YS41LjUgMCAwIDEgLjUtLjVoOWEuNS41IDAgMCAxIDAgMWgtOWEuNS41IDAgMCAxLS41LS41bS0zIDJhLjUuNSAwIDAgMSAuNS0uNWg5YS41LjUgMCAwIDEgMCAxaC05YS41LjUgMCAwIDEtLjUtLjVtMiAyYS41LjUgMCAwIDEgLjUtLjVoOWEuNS41IDAgMCAxIDAgMWgtOWEuNS41IDAgMCAxLS41LS41TTEzLjQwNSA0LjAyN2E1LjAwMSA1LjAwMSAwIDAgMC05LjQ5OS0xLjAwNEEzLjUgMy41IDAgMSAwIDMuNSAxMEgxM2EzIDMgMCAwIDAgLjQwNS01Ljk3M004LjUgMWE0IDQgMCAwIDEgMy45NzYgMy41NTUuNS41IDAgMCAwIC41LjQ0NUgxM2EyIDIgMCAwIDEgMCA0SDMuNWEyLjUgMi41IDAgMSAxIC42MDUtNC45MjYuNS41IDAgMCAwIC41OTYtLjMyOUE0IDQgMCAwIDEgOC41IDEiLz4KPC9zdmc+)*/
const CloudHaze: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-haze"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973M8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 1"/>
</svg>
      )}
    />
  );

export default CloudHaze;
