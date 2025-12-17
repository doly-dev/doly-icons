import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stop-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTYuNSA1QTEuNSAxLjUgMCAwIDAgNSA2LjV2M0ExLjUgMS41IDAgMCAwIDYuNSAxMWgzQTEuNSAxLjUgMCAwIDAgMTEgOS41di0zQTEuNSAxLjUgMCAwIDAgOS41IDV6Ii8+Cjwvc3ZnPg==)*/
const StopCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stop-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5z"/>
</svg>
      )}
    />
  );

export default StopCircleFill;
