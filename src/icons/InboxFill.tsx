import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![inbox-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC45OCA0YS41LjUgMCAwIDAtLjM5LjE4OEwxLjU0IDhINmEuNS41IDAgMCAxIC41LjUgMS41IDEuNSAwIDEgMCAzIDBBLjUuNSAwIDAgMSAxMCA4aDQuNDZsLTMuMDUtMy44MTJBLjUuNSAwIDAgMCAxMS4wMiA0em0tMS4xNy0uNDM3QTEuNSAxLjUgMCAwIDEgNC45OCAzaDYuMDRhMS41IDEuNSAwIDAgMSAxLjE3LjU2M2wzLjcgNC42MjVhLjUuNSAwIDAgMSAuMTA2LjM3NGwtLjM5IDMuMTI0QTEuNSAxLjUgMCAwIDEgMTQuMTE3IDEzSDEuODgzYTEuNSAxLjUgMCAwIDEtMS40ODktMS4zMTRsLS4zOS0zLjEyNGEuNS41IDAgMCAxIC4xMDYtLjM3NHoiLz4KPC9zdmc+)*/
const InboxFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="inbox-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z"/>
</svg>
      )}
    />
  );

export default InboxFill;
