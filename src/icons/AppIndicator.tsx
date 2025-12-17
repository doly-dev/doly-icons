import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![app-indicator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS41IDJBMy41IDMuNSAwIDAgMCAyIDUuNXY1QTMuNSAzLjUgMCAwIDAgNS41IDE0aDVhMy41IDMuNSAwIDAgMCAzLjUtMy41VjhhLjUuNSAwIDAgMSAxIDB2Mi41YTQuNSA0LjUgMCAwIDEtNC41IDQuNWgtNUE0LjUgNC41IDAgMCAxIDEgMTAuNXYtNUE0LjUgNC41IDAgMCAxIDUuNSAxSDhhLjUuNSAwIDAgMSAwIDF6Ii8+CiAgPHBhdGggZD0iTTE2IDNhMyAzIDAgMSAxLTYgMCAzIDMgMCAwIDEgNiAwIi8+Cjwvc3ZnPg==)*/
const AppIndicator: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="app-indicator"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z"/>
  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
</svg>
      )}
    />
  );

export default AppIndicator;
