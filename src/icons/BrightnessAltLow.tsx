import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![brightness-alt-low](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDUuNWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMG01IDZhLjUuNSAwIDEgMSAwLTEgLjUuNSAwIDAgMSAwIDFNMiAxMWEuNS41IDAgMSAwIDEgMCAuNS41IDAgMCAwLTEgMG0xMC4yNDMtMy41MzZhLjUuNSAwIDEgMS0uNzA3LS43MDcuNS41IDAgMCAxIC43MDcuNzA3bS04LjQ4Ni0uNzA3YS41LjUgMCAxIDAgLjcwNy43MDcuNS41IDAgMCAwLS43MDctLjcwN004IDdhNCA0IDAgMCAwLTQgNCAuNS41IDAgMCAwIC41LjVoN2EuNS41IDAgMCAwIC41LS41IDQgNCAwIDAgMC00LTRtMCAxYTMgMyAwIDAgMSAyLjk1OSAyLjVINS4wNEEzIDMgMCAwIDEgOCA4Ii8+Cjwvc3ZnPg==)*/
const BrightnessAltLow: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="brightness-alt-low"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M2 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m10.243-3.536a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-8.486-.707a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707M8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8"/>
</svg>
      )}
    />
  );

export default BrightnessAltLow;
