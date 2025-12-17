import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pc-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSA2YTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAwIDAgMSAxaDE0YTEgMSAwIDAgMCAxLTFWN2ExIDEgMCAwIDAtMS0xem0xMS41IDFhLjUuNSAwIDEgMSAwIDEgLjUuNSAwIDAgMSAwLTFtMiAwYS41LjUgMCAxIDEgMCAxIC41LjUgMCAwIDEgMC0xTTEgNy41YS41LjUgMCAwIDEgLjUtLjVoNWEuNS41IDAgMCAxIDAgMWgtNWEuNS41IDAgMCAxLS41LS41TTEuMjUgOWg1LjVhLjI1LjI1IDAgMCAxIDAgLjVoLTUuNWEuMjUuMjUgMCAwIDEgMC0uNSIvPgo8L3N2Zz4=)*/
const PcHorizontal: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pc-horizontal"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm11.5 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M1 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M1.25 9h5.5a.25.25 0 0 1 0 .5h-5.5a.25.25 0 0 1 0-.5"/>
</svg>
      )}
    />
  );

export default PcHorizontal;
