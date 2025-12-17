import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![alt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSAxMy41YS41LjUgMCAwIDAgLjUuNWgzLjc5N2EuNS41IDAgMCAwIC40MzktLjI2TDExIDNoMy41YS41LjUgMCAwIDAgMC0xaC0zLjc5N2EuNS41IDAgMCAwLS40MzkuMjZMNSAxM0gxLjVhLjUuNSAwIDAgMC0uNS41bTEwIDBhLjUuNSAwIDAgMCAuNS41aDNhLjUuNSAwIDAgMCAwLTFoLTNhLjUuNSAwIDAgMC0uNS41Ii8+Cjwvc3ZnPg==)*/
const Alt: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="alt"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 13.5a.5.5 0 0 0 .5.5h3.797a.5.5 0 0 0 .439-.26L11 3h3.5a.5.5 0 0 0 0-1h-3.797a.5.5 0 0 0-.439.26L5 13H1.5a.5.5 0 0 0-.5.5m10 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5"/>
</svg>
      )}
    />
  );

export default Alt;
