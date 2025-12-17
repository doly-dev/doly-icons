import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![option](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSAyLjVhLjUuNSAwIDAgMSAuNS0uNWgzLjc5N2EuNS41IDAgMCAxIC40MzkuMjZMMTEgMTNoMy41YS41LjUgMCAwIDEgMCAxaC0zLjc5N2EuNS41IDAgMCAxLS40MzktLjI2TDUgM0gxLjVhLjUuNSAwIDAgMS0uNS0uNW0xMCAwYS41LjUgMCAwIDEgLjUtLjVoM2EuNS41IDAgMCAxIDAgMWgtM2EuNS41IDAgMCAxLS41LS41Ii8+Cjwvc3ZnPg==)*/
const Option: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="option"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 2.5a.5.5 0 0 1 .5-.5h3.797a.5.5 0 0 1 .439.26L11 13h3.5a.5.5 0 0 1 0 1h-3.797a.5.5 0 0 1-.439-.26L5 3H1.5a.5.5 0 0 1-.5-.5m10 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default Option;
