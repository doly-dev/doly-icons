import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![repeat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNS40NjZWNEg1YTQgNCAwIDAgMC0zLjU4NCA1Ljc3Ny41LjUgMCAxIDEtLjg5Ni40NDZBNSA1IDAgMCAxIDUgM2g2VjEuNTM0YS4yNS4yNSAwIDAgMSAuNDEtLjE5MmwyLjM2IDEuOTY2Yy4xMi4xLjEyLjI4NCAwIC4zODRsLTIuMzYgMS45NjZhLjI1LjI1IDAgMCAxLS40MS0uMTkybTMuODEuMDg2YS41LjUgMCAwIDEgLjY3LjIyNUE1IDUgMCAwIDEgMTEgMTNINXYxLjQ2NmEuMjUuMjUgMCAwIDEtLjQxLjE5MmwtMi4zNi0xLjk2NmEuMjUuMjUgMCAwIDEgMC0uMzg0bDIuMzYtMS45NjZhLjI1LjI1IDAgMCAxIC40MS4xOTJWMTJoNmE0IDQgMCAwIDAgMy41ODUtNS43NzcuNS41IDAgMCAxIC4yMjUtLjY3WiIvPgo8L3N2Zz4=)*/
const Repeat: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="repeat"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
</svg>
      )}
    />
  );

export default Repeat;
