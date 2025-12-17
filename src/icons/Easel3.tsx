import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![easel3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjUgMTMuMTM0VjEyaDVhMS41IDEuNSAwIDAgMCAxLjUtMS41VjJoLjVhLjUuNSAwIDAgMCAwLTFILjVhLjUuNSAwIDAgMCAwIDFIMXY4LjVBMS41IDEuNSAwIDAgMCAyLjUgMTJoNXYxLjEzNGExIDEgMCAxIDAgMSAwTTIgMnY4LjVhLjUuNSAwIDAgMCAuNS41aDExYS41LjUgMCAwIDAgLjUtLjVWMnoiLz4KPC9zdmc+)*/
const Easel3: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="easel3"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8.5 13.134V12h5a1.5 1.5 0 0 0 1.5-1.5V2h.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H1v8.5A1.5 1.5 0 0 0 2.5 12h5v1.134a1 1 0 1 0 1 0M2 2v8.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V2z"/>
</svg>
      )}
    />
  );

export default Easel3;
