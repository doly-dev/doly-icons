import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![truck-flatbed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuNSA0YS41LjUgMCAwIDEgLjUuNVY1aDEuMDJhMS41IDEuNSAwIDAgMSAxLjE3LjU2M2wxLjQ4MSAxLjg1YTEuNSAxLjUgMCAwIDEgLjMyOS45MzhWMTAuNWExLjUgMS41IDAgMCAxLTEuNSAxLjVIMTRhMiAyIDAgMSAxLTQgMEg1YTIgMiAwIDEgMS00IDAgMSAxIDAgMCAxLTEtMXYtMWgxMVY0LjVhLjUuNSAwIDAgMSAuNS0uNU0zIDExYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMm05IDBhMSAxIDAgMSAwIDAgMiAxIDEgMCAwIDAgMC0ybTEuNzMyIDBoLjc2OGEuNS41IDAgMCAwIC41LS41VjguMzVhLjUuNSAwIDAgMC0uMTEtLjMxMmwtMS40OC0xLjg1QS41LjUgMCAwIDAgMTMuMDIgNkgxMnY0YTIgMiAwIDAgMSAxLjczMiAxIi8+Cjwvc3ZnPg==)*/
const TruckFlatbed: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="truck-flatbed"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.5 4a.5.5 0 0 1 .5.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-4 0 1 1 0 0 1-1-1v-1h11V4.5a.5.5 0 0 1 .5-.5M3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1.732 0h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4a2 2 0 0 1 1.732 1"/>
</svg>
      )}
    />
  );

export default TruckFlatbed;
