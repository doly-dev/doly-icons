import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![device-hdd](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMi41YS41LjUgMCAxIDEtMSAwIC41LjUgMCAwIDEgMSAwbTAgMTFhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDBtLTcuNS41YS41LjUgMCAxIDAgMC0xIC41LjUgMCAwIDAgMCAxTTUgMi41YS41LjUgMCAxIDEtMSAwIC41LjUgMCAwIDEgMSAwTTggOGExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDIiLz4KICA8cGF0aCBkPSJNMTIgN2E0IDQgMCAwIDEtMy45MzcgNGMtLjUzNy44MTMtMS4wMiAxLjUxNS0xLjE4MSAxLjY3N2ExLjEwMiAxLjEwMiAwIDAgMS0xLjU2LTEuNTU5Yy4xLS4wOTguMzk2LS4zMTQuNzk1LS41ODhBNCA0IDAgMCAxIDggM2E0IDQgMCAwIDEgNCA0bS0xIDBhMyAzIDAgMSAwLTMuODkxIDIuODY1Yy42NjctLjQ0IDEuMzk2LS45MSAxLjk1NS0xLjI2OC4yMjQtLjE0NC40ODMuMTE1LjM0LjM0bC0uNjIuOTZBMyAzIDAgMCAwIDExIDciLz4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yem0yLTFhMSAxIDAgMCAwLTEgMXYxMmExIDEgMCAwIDAgMSAxaDhhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTF6Ii8+Cjwvc3ZnPg==)*/
const DeviceHdd: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="device-hdd"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  <path d="M12 7a4 4 0 0 1-3.937 4c-.537.813-1.02 1.515-1.181 1.677a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588A4 4 0 0 1 8 3a4 4 0 0 1 4 4m-1 0a3 3 0 1 0-3.891 2.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34l-.62.96A3 3 0 0 0 11 7"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default DeviceHdd;
