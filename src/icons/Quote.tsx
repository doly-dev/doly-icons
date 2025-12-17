import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![quote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMTJhMSAxIDAgMCAwIDEtMVY4LjU1OGExIDEgMCAwIDAtMS0xaC0xLjM4OHEwLS41MjcuMDYyLTEuMDU0LjA5My0uNTU4LjMxLS45OTJ0LjU1OS0uNjgzcS4zNC0uMjc5Ljg2OC0uMjc5VjNxLS44NjggMC0xLjUyLjM3MmEzLjMgMy4zIDAgMCAwLTEuMDg1Ljk5MiA0LjkgNC45IDAgMCAwLS42MiAxLjQ1OEE3LjcgNy43IDAgMCAwIDkgNy41NThWMTFhMSAxIDAgMCAwIDEgMXptLTYgMGExIDEgMCAwIDAgMS0xVjguNTU4YTEgMSAwIDAgMC0xLTFINC42MTJxMC0uNTI3LjA2Mi0xLjA1NC4wOTQtLjU1OC4zMS0uOTkyLjIxNy0uNDM0LjU1OS0uNjgzLjM0LS4yNzkuODY4LS4yNzlWM3EtLjg2OCAwLTEuNTIuMzcyYTMuMyAzLjMgMCAwIDAtMS4wODUuOTkyIDQuOSA0LjkgMCAwIDAtLjYyIDEuNDU4QTcuNyA3LjcgMCAwIDAgMyA3LjU1OFYxMWExIDEgMCAwIDAgMSAxeiIvPgo8L3N2Zz4=)*/
const Quote: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="quote"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>
      )}
    />
  );

export default Quote;
