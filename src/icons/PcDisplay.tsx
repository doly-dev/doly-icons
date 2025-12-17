import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pc-display](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxYTEgMSAwIDAgMSAxLTFoNmExIDEgMCAwIDEgMSAxdjE0YTEgMSAwIDAgMS0xIDFIOWExIDEgMCAwIDEtMS0xem0xIDEzLjVhLjUuNSAwIDEgMCAxIDAgLjUuNSAwIDAgMC0xIDBtMiAwYS41LjUgMCAxIDAgMSAwIC41LjUgMCAwIDAtMSAwTTkuNSAxYS41LjUgMCAwIDAgMCAxaDVhLjUuNSAwIDAgMCAwLTF6TTkgMy41YS41LjUgMCAwIDAgLjUuNWg1YS41LjUgMCAwIDAgMC0xaC01YS41LjUgMCAwIDAtLjUuNU0xLjUgMkExLjUgMS41IDAgMCAwIDAgMy41djdBMS41IDEuNSAwIDAgMCAxLjUgMTJINnYyaC0uNWEuNS41IDAgMCAwIDAgMUg3di00SDEuNWEuNS41IDAgMCAxLS41LS41di03YS41LjUgMCAwIDEgLjUtLjVIN1YyeiIvPgo8L3N2Zz4=)*/
const PcDisplay: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pc-display"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
</svg>
      )}
    />
  );

export default PcDisplay;
