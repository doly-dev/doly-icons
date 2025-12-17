import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![brightness-low](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxMWEzIDMgMCAxIDEgMC02IDMgMyAwIDAgMSAwIDZtMCAxYTQgNCAwIDEgMCAwLTggNCA0IDAgMCAwIDAgOG0uNS05LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDBtMCAxMWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMG01LTVhLjUuNSAwIDEgMSAwLTEgLjUuNSAwIDAgMSAwIDFtLTExIDBhLjUuNSAwIDEgMSAwLTEgLjUuNSAwIDAgMSAwIDFtOS43NDMtNC4wMzZhLjUuNSAwIDEgMS0uNzA3LS43MDcuNS41IDAgMCAxIC43MDcuNzA3bS03Ljc3OSA3Ljc3OWEuNS41IDAgMSAxLS43MDctLjcwNy41LjUgMCAwIDEgLjcwNy43MDdtNy4wNzIgMGEuNS41IDAgMSAxIC43MDctLjcwNy41LjUgMCAwIDEtLjcwNy43MDdNMy43NTcgNC40NjRhLjUuNSAwIDEgMSAuNzA3LS43MDcuNS41IDAgMCAxLS43MDcuNzA3Ii8+Cjwvc3ZnPg==)*/
const BrightnessLow: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="brightness-low"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8m.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707"/>
</svg>
      )}
    />
  );

export default BrightnessLow;
