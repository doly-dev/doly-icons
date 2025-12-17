import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![feather2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy41IDEuMDYzdjkuNTU2TDYgOC44MTlWM2EyIDIgMCAwIDEgMS41LTEuOTM3TTggMGEzIDMgMCAwIDAtMyAzdjZhLjUuNSAwIDAgMCAuMTE2LjMyTDcuNSAxMi4xODFWMTUuNWEuNS41IDAgMCAwIDEgMHYtMy4zMTlsMi4zODQtMi44NkEuNS41IDAgMCAwIDExIDlWM2EzIDMgMCAwIDAtMy0zbS41IDEuMDYzQTIgMiAwIDAgMSAxMCAzdi4yOTNsLTEuNSAxLjV6TTEwIDQuNzA3VjguODJsLTEuNSAxLjhWNi4yMDd6Ii8+Cjwvc3ZnPg==)*/
const Feather2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="feather2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.5 1.063v9.556L6 8.819V3a2 2 0 0 1 1.5-1.937M8 0a3 3 0 0 0-3 3v6a.5.5 0 0 0 .116.32L7.5 12.181V15.5a.5.5 0 0 0 1 0v-3.319l2.384-2.86A.5.5 0 0 0 11 9V3a3 3 0 0 0-3-3m.5 1.063A2 2 0 0 1 10 3v.293l-1.5 1.5zM10 4.707V8.82l-1.5 1.8V6.207z"/>
</svg>
      )}
    />
  );

export default Feather2;
