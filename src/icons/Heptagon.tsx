import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![heptagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy43NzkuMDUyYS41LjUgMCAwIDEgLjQ0MiAwbDYuMDE1IDIuOTdhLjUuNSAwIDAgMSAuMjY3LjM0bDEuNDg1IDYuNjc2YS41LjUgMCAwIDEtLjA5My40MTVsLTQuMTYyIDUuMzU0YS41LjUgMCAwIDEtLjM5NS4xOTNINC42NjJhLjUuNSAwIDAgMS0uMzk1LS4xOTNMLjEwNSAxMC40NTNhLjUuNSAwIDAgMS0uMDkzLS40MTVsMS40ODUtNi42NzZhLjUuNSAwIDAgMSAuMjY3LS4zNHpNMi40MjIgMy44MTNsLTEuMzgzIDYuMjEyTDQuOTA3IDE1aDYuMTg2bDMuODY4LTQuOTc1LTEuMzgzLTYuMjEyTDggMS4wNTh6Ii8+Cjwvc3ZnPg==)*/
const Heptagon: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="heptagon"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.779.052a.5.5 0 0 1 .442 0l6.015 2.97a.5.5 0 0 1 .267.34l1.485 6.676a.5.5 0 0 1-.093.415l-4.162 5.354a.5.5 0 0 1-.395.193H4.662a.5.5 0 0 1-.395-.193L.105 10.453a.5.5 0 0 1-.093-.415l1.485-6.676a.5.5 0 0 1 .267-.34zM2.422 3.813l-1.383 6.212L4.907 15h6.186l3.868-4.975-1.383-6.212L8 1.058z"/>
</svg>
      )}
    />
  );

export default Heptagon;
