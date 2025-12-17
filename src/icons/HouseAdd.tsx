import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-add](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC43MDcgMS41YTEgMSAwIDAgMC0xLjQxNCAwTC42NDYgOC4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEwyIDguMjA3VjEzLjVBMS41IDEuNSAwIDAgMCAzLjUgMTVoNGEuNS41IDAgMSAwIDAtMWgtNGEuNS41IDAgMCAxLS41LS41VjcuMjA3bDUtNSA2LjY0NiA2LjY0N2EuNS41IDAgMCAwIC43MDgtLjcwOEwxMyA1Ljc5M1YyLjVhLjUuNSAwIDAgMC0uNS0uNWgtMWEuNS41IDAgMCAwLS41LjV2MS4yOTN6Ii8+CiAgPHBhdGggZD0iTTE2IDEyLjVhMy41IDMuNSAwIDEgMS03IDAgMy41IDMuNSAwIDAgMSA3IDBtLTMuNS0yYS41LjUgMCAwIDAtLjUuNXYxaC0xYS41LjUgMCAwIDAgMCAxaDF2MWEuNS41IDAgMSAwIDEgMHYtMWgxYS41LjUgMCAxIDAgMC0xaC0xdi0xYS41LjUgMCAwIDAtLjUtLjUiLz4KPC9zdmc+)*/
const HouseAdd: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-add"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 1-.5-.5V7.207l5-5 6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"/>
</svg>
      )}
    />
  );

export default HouseAdd;
