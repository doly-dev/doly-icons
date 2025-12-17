import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mouse-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyA1YTUgNSAwIDAgMSAxMCAwdjZhNSA1IDAgMCAxLTEwIDB6bTUuNS0xLjVhLjUuNSAwIDAgMC0xIDB2MmEuNS41IDAgMCAwIDEgMHoiLz4KPC9zdmc+)*/
const MouseFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mouse-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0z"/>
</svg>
      )}
    />
  );

export default MouseFill;
