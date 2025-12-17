import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![toggle2-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOSAxMWMuNjI4LS44MzYgMS0xLjg3NCAxLTNhNC45OCA0Ljk4IDAgMCAwLTEtM2g0YTMgMyAwIDEgMSAwIDZ6Ii8+CiAgPHBhdGggZD0iTTUgMTJhNCA0IDAgMSAxIDAtOCA0IDQgMCAwIDEgMCA4bTAgMUE1IDUgMCAxIDAgNSAzYTUgNSAwIDAgMCAwIDEwIi8+Cjwvc3ZnPg==)*/
const Toggle2Off: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="toggle2-off"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9 11c.628-.836 1-1.874 1-3a4.98 4.98 0 0 0-1-3h4a3 3 0 1 1 0 6z"/>
  <path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10"/>
</svg>
      )}
    />
  );

export default Toggle2Off;
