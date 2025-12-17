import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDVBMS41IDEuNSAwIDAgMSA1IDMuNWg2QTEuNSAxLjUgMCAwIDEgMTIuNSA1djZhMS41IDEuNSAwIDAgMS0xLjUgMS41SDVBMS41IDEuNSAwIDAgMSAzLjUgMTF6TTUgNC41YS41LjUgMCAwIDAtLjUuNXY2YS41LjUgMCAwIDAgLjUuNWg2YS41LjUgMCAwIDAgLjUtLjVWNWEuNS41IDAgMCAwLS41LS41eiIvPgo8L3N2Zz4=)*/
const Stop: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stop"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5z"/>
</svg>
      )}
    />
  );

export default Stop;
