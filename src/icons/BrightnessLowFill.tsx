import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![brightness-low-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgOGE0IDQgMCAxIDEtOCAwIDQgNCAwIDAgMSA4IDBNOC41IDIuNWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMG0wIDExYS41LjUgMCAxIDEtMSAwIC41LjUgMCAwIDEgMSAwbTUtNWEuNS41IDAgMSAxIDAtMSAuNS41IDAgMCAxIDAgMW0tMTEgMGEuNS41IDAgMSAxIDAtMSAuNS41IDAgMCAxIDAgMW05Ljc0My00LjAzNmEuNS41IDAgMSAxLS43MDctLjcwNy41LjUgMCAwIDEgLjcwNy43MDdtLTcuNzc5IDcuNzc5YS41LjUgMCAxIDEtLjcwNy0uNzA3LjUuNSAwIDAgMSAuNzA3LjcwN203LjA3MiAwYS41LjUgMCAxIDEgLjcwNy0uNzA3LjUuNSAwIDAgMS0uNzA3LjcwN00zLjc1NyA0LjQ2NGEuNS41IDAgMSAxIC43MDctLjcwNy41LjUgMCAwIDEtLjcwNy43MDciLz4KPC9zdmc+)*/
const BrightnessLowFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="brightness-low-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707"/>
</svg>
      )}
    />
  );

export default BrightnessLowFill;
