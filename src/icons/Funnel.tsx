import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![funnel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS41IDEuNUEuNS41IDAgMCAxIDIgMWgxMmEuNS41IDAgMCAxIC41LjV2MmEuNS41IDAgMCAxLS4xMjguMzM0TDEwIDguNjkyVjEzLjVhLjUuNSAwIDAgMS0uMzQyLjQ3NGwtMyAxQS41LjUgMCAwIDEgNiAxNC41VjguNjkyTDEuNjI4IDMuODM0QS41LjUgMCAwIDEgMS41IDMuNXptMSAuNXYxLjMwOGw0LjM3MiA0Ljg1OEEuNS41IDAgMCAxIDcgOC41djUuMzA2bDItLjY2NlY4LjVhLjUuNSAwIDAgMSAuMTI4LS4zMzRMMTMuNSAzLjMwOFYyeiIvPgo8L3N2Zz4=)*/
const Funnel: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="funnel"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
</svg>
      )}
    />
  );

export default Funnel;
