import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-rain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC4xNTggMTIuMDI1YS41LjUgMCAwIDEgLjMxNi42MzNsLS41IDEuNWEuNS41IDAgMCAxLS45NDgtLjMxNmwuNS0xLjVhLjUuNSAwIDAgMSAuNjMyLS4zMTdtMyAwYS41LjUgMCAwIDEgLjMxNi42MzNsLTEgM2EuNS41IDAgMCAxLS45NDgtLjMxNmwxLTNhLjUuNSAwIDAgMSAuNjMyLS4zMTdtMyAwYS41LjUgMCAwIDEgLjMxNi42MzNsLS41IDEuNWEuNS41IDAgMCAxLS45NDgtLjMxNmwuNS0xLjVhLjUuNSAwIDAgMSAuNjMyLS4zMTdtMyAwYS41LjUgMCAwIDEgLjMxNi42MzNsLTEgM2EuNS41IDAgMSAxLS45NDgtLjMxNmwxLTNhLjUuNSAwIDAgMSAuNjMyLS4zMTdtLjI0Ny02Ljk5OGE1LjAwMSA1LjAwMSAwIDAgMC05LjQ5OS0xLjAwNEEzLjUgMy41IDAgMSAwIDMuNSAxMUgxM2EzIDMgMCAwIDAgLjQwNS01Ljk3M004LjUgMmE0IDQgMCAwIDEgMy45NzYgMy41NTUuNS41IDAgMCAwIC41LjQ0NUgxM2EyIDIgMCAwIDEgMCA0SDMuNWEyLjUgMi41IDAgMSAxIC42MDUtNC45MjYuNS41IDAgMCAwIC41OTYtLjMyOUE0IDQgMCAwIDEgOC41IDIiLz4KPC9zdmc+)*/
const CloudRain: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-rain"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973M8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 2"/>
</svg>
      )}
    />
  );

export default CloudRain;
