import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-down-right-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA4YTggOCAwIDEgMSAxNiAwQTggOCAwIDAgMSAwIDhtNS45MDQtMi44MDNhLjUuNSAwIDEgMC0uNzA3LjcwN0w5LjI5MyAxMEg2LjUyNWEuNS41IDAgMCAwIDAgMUgxMC41YS41LjUgMCAwIDAgLjUtLjVWNi41MjVhLjUuNSAwIDAgMC0xIDB2Mi43Njh6Ii8+Cjwvc3ZnPg==)*/
const ArrowDownRightCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-down-right-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768z"/>
</svg>
      )}
    />
  );

export default ArrowDownRightCircleFill;
