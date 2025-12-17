import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![check-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwbS0zLjk3LTMuMDNhLjc1Ljc1IDAgMCAwLTEuMDguMDIyTDcuNDc3IDkuNDE3IDUuMzg0IDcuMzIzYS43NS43NSAwIDAgMC0xLjA2IDEuMDZMNi45NyAxMS4wM2EuNzUuNzUgMCAwIDAgMS4wNzktLjAybDMuOTkyLTQuOTlhLjc1Ljc1IDAgMCAwLS4wMS0xLjA1eiIvPgo8L3N2Zz4=)*/
const CheckCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="check-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
      )}
    />
  );

export default CheckCircleFill;
