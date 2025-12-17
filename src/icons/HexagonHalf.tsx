import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hexagon-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgNC41Nzd2Ni44NDZMOCAxNVYxek04LjUuMTM0YTEgMSAwIDAgMC0xIDBsLTYgMy41NzdhMSAxIDAgMCAwLS41Ljg2NnY2Ljg0NmExIDEgMCAwIDAgLjUuODY2bDYgMy41NzdhMSAxIDAgMCAwIDEgMGw2LTMuNTc3YTEgMSAwIDAgMCAuNS0uODY2VjQuNTc3YTEgMSAwIDAgMC0uNS0uODY2eiIvPgo8L3N2Zz4=)*/
const HexagonHalf: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hexagon-half"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 4.577v6.846L8 15V1zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
</svg>
      )}
    />
  );

export default HexagonHalf;
