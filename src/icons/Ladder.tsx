import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![ladder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC41IDFhLjUuNSAwIDAgMSAuNS41VjJoNnYtLjVhLjUuNSAwIDAgMSAxIDB2MTRhLjUuNSAwIDAgMS0xIDBWMTVINXYuNWEuNS41IDAgMCAxLTEgMHYtMTRhLjUuNSAwIDAgMSAuNS0uNU01IDE0aDZ2LTJINXptMC0zaDZWOUg1em0wLTNoNlY2SDV6bTAtM2g2VjNINXoiLz4KPC9zdmc+)*/
const Ladder: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="ladder"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.5 1a.5.5 0 0 1 .5.5V2h6v-.5a.5.5 0 0 1 1 0v14a.5.5 0 0 1-1 0V15H5v.5a.5.5 0 0 1-1 0v-14a.5.5 0 0 1 .5-.5M5 14h6v-2H5zm0-3h6V9H5zm0-3h6V6H5zm0-3h6V3H5z"/>
</svg>
      )}
    />
  );

export default Ladder;
