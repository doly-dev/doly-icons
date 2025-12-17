import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chevron-bar-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjE0NiAzLjY0NmEuNS41IDAgMCAwIDAgLjcwOEw3Ljc5MyA4bC0zLjY0NyAzLjY0NmEuNS41IDAgMCAwIC43MDguNzA4bDQtNGEuNS41IDAgMCAwIDAtLjcwOGwtNC00YS41LjUgMCAwIDAtLjcwOCAwTTExLjUgMWEuNS41IDAgMCAxIC41LjV2MTNhLjUuNSAwIDAgMS0xIDB2LTEzYS41LjUgMCAwIDEgLjUtLjUiLz4KPC9zdmc+)*/
const ChevronBarRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-bar-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default ChevronBarRight;
