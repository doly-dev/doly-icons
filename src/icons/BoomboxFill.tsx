import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![boombox-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMGEuNS41IDAgMCAxIC41LjVWMmguNWExIDEgMCAwIDEgMSAxdjJIMFYzYTEgMSAwIDAgMSAxLTFoMTIuNVYuNUEuNS41IDAgMCAxIDE0IDBNMiAzLjVhLjUuNSAwIDEgMCAxIDAgLjUuNSAwIDAgMC0xIDBtMiAwYS41LjUgMCAxIDAgMSAwIC41LjUgMCAwIDAtMSAwbTcuNS41YS41LjUgMCAxIDAgMC0xIC41LjUgMCAwIDAgMCAxbTEuNS0uNWEuNS41IDAgMSAwIDEgMCAuNS41IDAgMCAwLTEgME05LjUgM2gtM2EuNS41IDAgMCAwIDAgMWgzYS41LjUgMCAwIDAgMC0xTTYgMTAuNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMG0tMS41LjVhLjUuNSAwIDEgMCAwLTEgLjUuNSAwIDAgMCAwIDFtNyAxYTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzbS41LTEuNWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMCIvPgogIDxwYXRoIGQ9Ik0wIDZoMTZ2OGExIDEgMCAwIDEtMSAxSDFhMSAxIDAgMCAxLTEtMXptMiA0LjVhMi41IDIuNSAwIDEgMCA1IDAgMi41IDIuNSAwIDAgMC01IDBtNyAwYTIuNSAyLjUgMCAxIDAgNSAwIDIuNSAyLjUgMCAwIDAtNSAwIi8+Cjwvc3ZnPg==)*/
const BoomboxFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="boombox-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1M6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
  <path d="M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/>
</svg>
      )}
    />
  );

export default BoomboxFill;
