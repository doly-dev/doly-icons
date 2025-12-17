import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hdd-network](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC41IDVhLjUuNSAwIDEgMCAwLTEgLjUuNSAwIDAgMCAwIDFNMyA0LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDAiLz4KICA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxYTIgMiAwIDAgMS0yIDJIOC41djNhMS41IDEuNSAwIDAgMSAxLjUgMS41aDUuNWEuNS41IDAgMCAxIDAgMUgxMEExLjUgMS41IDAgMCAxIDguNSAxNGgtMUExLjUgMS41IDAgMCAxIDYgMTIuNUguNWEuNS41IDAgMCAxIDAtMUg2QTEuNSAxLjUgMCAwIDEgNy41IDEwVjdIMmEyIDIgMCAwIDEtMi0yem0xIDB2MWExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTFWNGExIDEgMCAwIDAtMS0xSDJhMSAxIDAgMCAwLTEgMW02IDcuNXYxYS41LjUgMCAwIDAgLjUuNWgxYS41LjUgMCAwIDAgLjUtLjV2LTFhLjUuNSAwIDAgMC0uNS0uNWgtMWEuNS41IDAgMCAwLS41LjUiLz4KPC9zdmc+)*/
const HddNetwork: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hdd-network"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8.5v3a1.5 1.5 0 0 1 1.5 1.5h5.5a.5.5 0 0 1 0 1H10A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5H.5a.5.5 0 0 1 0-1H6A1.5 1.5 0 0 1 7.5 10V7H2a2 2 0 0 1-2-2zm1 0v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m6 7.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5"/>
</svg>
      )}
    />
  );

export default HddNetwork;
