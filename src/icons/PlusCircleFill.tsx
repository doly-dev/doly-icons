import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![plus-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTguNSA0LjVhLjUuNSAwIDAgMC0xIDB2M2gtM2EuNS41IDAgMCAwIDAgMWgzdjNhLjUuNSAwIDAgMCAxIDB2LTNoM2EuNS41IDAgMCAwIDAtMWgtM3oiLz4KPC9zdmc+)*/
const PlusCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="plus-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
</svg>
      )}
    />
  );

export default PlusCircleFill;
