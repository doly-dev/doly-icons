import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![escape](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41MzggMS4wMmEuNS41IDAgMSAwLS4wNzYuOTk4IDYgNiAwIDEgMS02LjQ0NSA2LjQ0NC41LjUgMCAwIDAtLjk5Ny4wNzZBNyA3IDAgMSAwIDguNTM4IDEuMDIiLz4KICA8cGF0aCBkPSJNNy4wOTYgNy44MjhhLjUuNSAwIDAgMCAuNzA3LS43MDdMMi43MDcgMi4wMjVoMi43NjhhLjUuNSAwIDEgMCAwLTFIMS41YS41LjUgMCAwIDAtLjUuNVY1LjVhLjUuNSAwIDAgMCAxIDBWMi43MzJ6Ii8+Cjwvc3ZnPg==)*/
const Escape: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="escape"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.538 1.02a.5.5 0 1 0-.076.998 6 6 0 1 1-6.445 6.444.5.5 0 0 0-.997.076A7 7 0 1 0 8.538 1.02"/>
  <path d="M7.096 7.828a.5.5 0 0 0 .707-.707L2.707 2.025h2.768a.5.5 0 1 0 0-1H1.5a.5.5 0 0 0-.5.5V5.5a.5.5 0 0 0 1 0V2.732z"/>
</svg>
      )}
    />
  );

export default Escape;
