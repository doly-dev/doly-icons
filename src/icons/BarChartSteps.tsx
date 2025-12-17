import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bar-chart-steps](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNLjUgMGEuNS41IDAgMCAxIC41LjV2MTVhLjUuNSAwIDAgMS0xIDBWLjVBLjUuNSAwIDAgMSAuNSAwTTIgMS41YS41LjUgMCAwIDEgLjUtLjVoNGEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTRhLjUuNSAwIDAgMS0uNS0uNXptMiA0YS41LjUgMCAwIDEgLjUtLjVoN2EuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTdhLjUuNSAwIDAgMS0uNS0uNXptMiA0YS41LjUgMCAwIDEgLjUtLjVoNmEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTZhLjUuNSAwIDAgMS0uNS0uNXptMiA0YS41LjUgMCAwIDEgLjUtLjVoN2EuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTdhLjUuNSAwIDAgMS0uNS0uNXoiLz4KPC9zdmc+)*/
const BarChartSteps: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bar-chart-steps"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"/>
</svg>
      )}
    />
  );

export default BarChartSteps;
