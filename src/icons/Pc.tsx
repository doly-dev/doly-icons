import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSAwYTEgMSAwIDAgMC0xIDF2MTRhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTFWMWExIDEgMCAwIDAtMS0xem0uNSAxNGEuNS41IDAgMSAxIDAgMSAuNS41IDAgMCAxIDAtMW0yIDBhLjUuNSAwIDEgMSAwIDEgLjUuNSAwIDAgMSAwLTFNNSAxLjVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgMCAxaC01YS41LjUgMCAwIDEtLjUtLjVNNS41IDNoNWEuNS41IDAgMCAxIDAgMWgtNWEuNS41IDAgMCAxIDAtMSIvPgo8L3N2Zz4=)*/
const Pc: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pc"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M5 1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default Pc;
