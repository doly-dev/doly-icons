import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![layer-forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4zNTQuMTQ2YS41LjUgMCAwIDAtLjcwOCAwbC0zIDNhLjUuNSAwIDAgMCAwIC43MDhsMSAxYS41LjUgMCAwIDAgLjcwOCAwTDcgNC4yMDdWMTJIMWExIDEgMCAwIDAtMSAxdjJhMSAxIDAgMCAwIDEgMWgxNGExIDEgMCAwIDAgMS0xdi0yYTEgMSAwIDAgMC0xLTFIOVY0LjIwN2wuNjQ2LjY0N2EuNS41IDAgMCAwIC43MDggMGwxLTFhLjUuNSAwIDAgMCAwLS43MDh6Ii8+CiAgPHBhdGggZD0iTTEgN2ExIDEgMCAwIDAtMSAxdjJhMSAxIDAgMCAwIDEgMWg0LjVhLjUuNSAwIDAgMCAwLTFIMVY4aDQuNWEuNS41IDAgMCAwIDAtMXptOS41IDBhLjUuNSAwIDAgMCAwIDFIMTV2MmgtNC41YS41LjUgMCAwIDAgMCAxSDE1YTEgMSAwIDAgMCAxLTFWOGExIDEgMCAwIDAtMS0xeiIvPgo8L3N2Zz4=)*/
const LayerForward: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="layer-forward"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.354.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l1 1a.5.5 0 0 0 .708 0L7 4.207V12H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9V4.207l.646.647a.5.5 0 0 0 .708 0l1-1a.5.5 0 0 0 0-.708z"/>
  <path d="M1 7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5a.5.5 0 0 0 0-1H1V8h4.5a.5.5 0 0 0 0-1zm9.5 0a.5.5 0 0 0 0 1H15v2h-4.5a.5.5 0 0 0 0 1H15a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default LayerForward;
