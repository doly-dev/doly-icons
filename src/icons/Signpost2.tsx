import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![signpost-2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyAxLjQxNFYySDJhMSAxIDAgMCAwLTEgMXYyYTEgMSAwIDAgMCAxIDFoNXYxSDIuNWExIDEgMCAwIDAtLjguNEwuNzI1IDguN2EuNS41IDAgMCAwIDAgLjZsLjk3NSAxLjNhMSAxIDAgMCAwIC44LjRIN3Y1aDJ2LTVoNWExIDEgMCAwIDAgMS0xVjhhMSAxIDAgMCAwLTEtMUg5VjZoNC41YTEgMSAwIDAgMCAuOC0uNGwuOTc1LTEuM2EuNS41IDAgMCAwIDAtLjZMMTQuMyAyLjRhMSAxIDAgMCAwLS44LS40SDl2LS41ODZhMSAxIDAgMCAwLTIgME0xMy41IDNsLjc1IDEtLjc1IDFIMlYzem0uNSA1djJIMi41bC0uNzUtMSAuNzUtMXoiLz4KPC9zdmc+)*/
const Signpost2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="signpost-2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586a1 1 0 0 0-2 0M13.5 3l.75 1-.75 1H2V3zm.5 5v2H2.5l-.75-1 .75-1z"/>
</svg>
      )}
    />
  );

export default Signpost2;
