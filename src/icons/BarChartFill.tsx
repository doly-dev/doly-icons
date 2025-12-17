import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bar-chart-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSAxMWExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMXYzYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xem01LTRhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2N2ExIDEgMCAwIDEtMSAxSDdhMSAxIDAgMCAxLTEtMXptNS01YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjEyYTEgMSAwIDAgMS0xIDFoLTJhMSAxIDAgMCAxLTEtMXoiLz4KPC9zdmc+)*/
const BarChartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bar-chart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default BarChartFill;
