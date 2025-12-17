import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hdmi-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSA1YTEgMSAwIDAgMC0xIDF2My4yOTNjMCAuMzkuMzE3LjcwNy43MDcuNzA3LjE4OCAwIC4zNjguMDc1LjUuMjA3bC41LjVhMSAxIDAgMCAwIC43MDcuMjkzaDExLjE3MmExIDEgMCAwIDAgLjcwNy0uMjkzbC41LS41YS43LjcgMCAwIDEgLjUtLjIwN2MuMzkgMCAuNzA3LS4zMTcuNzA3LS43MDdWNmExIDEgMCAwIDAtMS0xem0xLjUgMmgxMWEuNS41IDAgMCAxIDAgMWgtMTFhLjUuNSAwIDAgMSAwLTEiLz4KPC9zdmc+)*/
const HdmiFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hdmi-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 5a1 1 0 0 0-1 1v3.293c0 .39.317.707.707.707.188 0 .368.075.5.207l.5.5a1 1 0 0 0 .707.293h11.172a1 1 0 0 0 .707-.293l.5-.5a.7.7 0 0 1 .5-.207c.39 0 .707-.317.707-.707V6a1 1 0 0 0-1-1zm1.5 2h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default HdmiFill;
