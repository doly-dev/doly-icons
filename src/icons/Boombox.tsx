import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![boombox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDVhLjUuNSAwIDEgMCAwLTEgLjUuNSAwIDAgMCAwIDFtMiAwYS41LjUgMCAxIDAgMC0xIC41LjUgMCAwIDAgMCAxbTcuNS0uNWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMG0xLjUuNWEuNS41IDAgMSAwIDAtMSAuNS41IDAgMCAwIDAgMW0tNy0xYS41LjUgMCAwIDAgMCAxaDNhLjUuNSAwIDAgMCAwLTF6bTUuNSA2LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDAiLz4KICA8cGF0aCBkPSJNMTEuNSAxM2EyLjUgMi41IDAgMSAwIDAtNSAyLjUgMi41IDAgMCAwIDAgNW0wLTFhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDNNNSAxMC41YS41LjUgMCAxIDEtMSAwIC41LjUgMCAwIDEgMSAwIi8+CiAgPHBhdGggZD0iTTcgMTAuNWEyLjUgMi41IDAgMSAxLTUgMCAyLjUgMi41IDAgMCAxIDUgMG0tMSAwYTEuNSAxLjUgMCAxIDAtMyAwIDEuNSAxLjUgMCAwIDAgMyAwIi8+CiAgPHBhdGggZD0iTTE0IDBhLjUuNSAwIDAgMSAuNS41VjJoLjVhMSAxIDAgMCAxIDEgMXYxMWExIDEgMCAwIDEtMSAxSDFhMSAxIDAgMCAxLTEtMVYzYTEgMSAwIDAgMSAxLTFoMTIuNVYuNUEuNS41IDAgMCAxIDE0IDBNMSAzdjNoMTRWM3ptMTQgNEgxdjdoMTR6Ii8+Cjwvc3ZnPg==)*/
const Boombox: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="boombox"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm5.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
  <path d="M11.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
  <path d="M7 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
  <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M1 3v3h14V3zm14 4H1v7h14z"/>
</svg>
      )}
    />
  );

export default Boombox;
