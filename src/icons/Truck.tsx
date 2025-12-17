import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![truck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAzLjVBMS41IDEuNSAwIDAgMSAxLjUgMmg5QTEuNSAxLjUgMCAwIDEgMTIgMy41VjVoMS4wMmExLjUgMS41IDAgMCAxIDEuMTcuNTYzbDEuNDgxIDEuODVhMS41IDEuNSAwIDAgMSAuMzI5LjkzOFYxMC41YTEuNSAxLjUgMCAwIDEtMS41IDEuNUgxNGEyIDIgMCAxIDEtNCAwSDVhMiAyIDAgMSAxLTMuOTk4LS4wODVBMS41IDEuNSAwIDAgMSAwIDEwLjV6bTEuMjk0IDcuNDU2QTIgMiAwIDAgMSA0LjczMiAxMWg1LjUzNmEyIDIgMCAwIDEgLjczMi0uNzMyVjMuNWEuNS41IDAgMCAwLS41LS41aC05YS41LjUgMCAwIDAtLjUuNXY3YS41LjUgMCAwIDAgLjI5NC40NTZNMTIgMTBhMiAyIDAgMCAxIDEuNzMyIDFoLjc2OGEuNS41IDAgMCAwIC41LS41VjguMzVhLjUuNSAwIDAgMC0uMTEtLjMxMmwtMS40OC0xLjg1QS41LjUgMCAwIDAgMTMuMDIgNkgxMnptLTkgMWExIDEgMCAxIDAgMCAyIDEgMSAwIDAgMCAwLTJtOSAwYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMiIvPgo8L3N2Zz4=)*/
const Truck: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="truck"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
</svg>
      )}
    />
  );

export default Truck;
