import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bar-chart-line-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgMmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMXYxMmguNWEuNS41IDAgMCAxIDAgMUguNWEuNS41IDAgMCAxIDAtMUgxdi0zYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjNoMVY3YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjdoMXoiLz4KPC9zdmc+)*/
const BarChartLineFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bar-chart-line-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
</svg>
      )}
    />
  );

export default BarChartLineFill;
