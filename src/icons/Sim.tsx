import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sim](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxLjVBMS41IDEuNSAwIDAgMSAzLjUgMGg3LjA4NmExLjUgMS41IDAgMCAxIDEuMDYuNDRsMS45MTUgMS45MTRBMS41IDEuNSAwIDAgMSAxNCAzLjQxNFYxNC41YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtOUExLjUgMS41IDAgMCAxIDIgMTQuNXpNMy41IDFhLjUuNSAwIDAgMC0uNS41djEzYS41LjUgMCAwIDAgLjUuNWg5YS41LjUgMCAwIDAgLjUtLjVWMy40MTRhLjUuNSAwIDAgMC0uMTQ2LS4zNTNsLTEuOTE1LTEuOTE1QS41LjUgMCAwIDAgMTAuNTg2IDF6Ii8+CiAgPHBhdGggZD0iTTUuNSA0YS41LjUgMCAwIDAtLjUuNVY2aDIuNVY0em0zIDB2MkgxMVY0LjVhLjUuNSAwIDAgMC0uNS0uNXpNMTEgN0g1djJoNnptMCAzSDguNXYyaDJhLjUuNSAwIDAgMCAuNS0uNXptLTMuNSAydi0ySDV2MS41YS41LjUgMCAwIDAgLjUuNXpNNCA0LjVBMS41IDEuNSAwIDAgMSA1LjUgM2g1QTEuNSAxLjUgMCAwIDEgMTIgNC41djdhMS41IDEuNSAwIDAgMS0xLjUgMS41aC01QTEuNSAxLjUgMCAwIDEgNCAxMS41eiIvPgo8L3N2Zz4=)*/
const Sim: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sim"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7.086a1.5 1.5 0 0 1 1.06.44l1.915 1.914A1.5 1.5 0 0 1 14 3.414V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5zM3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V3.414a.5.5 0 0 0-.146-.353l-1.915-1.915A.5.5 0 0 0 10.586 1z"/>
  <path d="M5.5 4a.5.5 0 0 0-.5.5V6h2.5V4zm3 0v2H11V4.5a.5.5 0 0 0-.5-.5zM11 7H5v2h6zm0 3H8.5v2h2a.5.5 0 0 0 .5-.5zm-3.5 2v-2H5v1.5a.5.5 0 0 0 .5.5zM4 4.5A1.5 1.5 0 0 1 5.5 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5z"/>
</svg>
      )}
    />
  );

export default Sim;
