import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![volume-mute](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi43MTcgMy41NUEuNS41IDAgMCAxIDcgNHY4YS41LjUgMCAwIDEtLjgxMi4zOUwzLjgyNSAxMC41SDEuNUEuNS41IDAgMCAxIDEgMTBWNmEuNS41IDAgMCAxIC41LS41aDIuMzI1bDIuMzYzLTEuODlhLjUuNSAwIDAgMSAuNTI5LS4wNk02IDUuMDQgNC4zMTIgNi4zOUEuNS41IDAgMCAxIDQgNi41SDJ2M2gyYS41LjUgMCAwIDEgLjMxMi4xMUw2IDEwLjk2em03Ljg1NC42MDZhLjUuNSAwIDAgMSAwIC43MDhMMTIuMjA3IDhsMS42NDcgMS42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOEwxMS41IDguNzA3bC0xLjY0NiAxLjY0N2EuNS41IDAgMCAxLS43MDgtLjcwOEwxMC43OTMgOCA5LjE0NiA2LjM1NGEuNS41IDAgMSAxIC43MDgtLjcwOEwxMS41IDcuMjkzbDEuNjQ2LTEuNjQ3YS41LjUgMCAwIDEgLjcwOCAwIi8+Cjwvc3ZnPg==)*/
const VolumeMute: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="volume-mute"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
</svg>
      )}
    />
  );

export default VolumeMute;
