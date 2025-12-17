import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![check-all](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC45NyA0Ljk3YS43NS43NSAwIDAgMSAxLjA3IDEuMDVsLTMuOTkgNC45OWEuNzUuNzUgMCAwIDEtMS4wOC4wMkwyLjMyNCA4LjM4NGEuNzUuNzUgMCAxIDEgMS4wNi0xLjA2bDIuMDk0IDIuMDkzTDguOTUgNC45OTJ6bS0uOTIgNS4xNC45Mi45MmEuNzUuNzUgMCAwIDAgMS4wNzktLjAybDMuOTkyLTQuOTlhLjc1Ljc1IDAgMSAwLTEuMDkxLTEuMDI4TDkuNDc3IDkuNDE3bC0uNDg1LS40ODZ6Ii8+Cjwvc3ZnPg==)*/
const CheckAll: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="check-all"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"/>
</svg>
      )}
    />
  );

export default CheckAll;
