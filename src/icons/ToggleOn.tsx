import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![toggle-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSAzYTUgNSAwIDAgMCAwIDEwaDZhNSA1IDAgMCAwIDAtMTB6bTYgOWE0IDQgMCAxIDEgMC04IDQgNCAwIDAgMSAwIDgiLz4KPC9zdmc+)*/
const ToggleOn: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="toggle-on"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
</svg>
      )}
    />
  );

export default ToggleOn;
