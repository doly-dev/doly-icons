import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAzLjVBMS41IDEuNSAwIDAgMSAxLjUgMmgxM0ExLjUgMS41IDAgMCAxIDE2IDMuNXY5YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMTNBMS41IDEuNSAwIDAgMSAwIDEyLjV6TTEuNSAzYS41LjUgMCAwIDAtLjUuNXY5YS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41di05YS41LjUgMCAwIDAtLjUtLjV6Ii8+CiAgPHBhdGggZD0iTTggOC41YS41LjUgMCAwIDEgLjUtLjVoNWEuNS41IDAgMCAxIC41LjV2M2EuNS41IDAgMCAxLS41LjVoLTVhLjUuNSAwIDAgMS0uNS0uNXoiLz4KPC9zdmc+)*/
const Pip: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pip"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
  <path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"/>
</svg>
      )}
    />
  );

export default Pip;
