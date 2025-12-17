import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuOTcgNC45N2EuNzUuNzUgMCAwIDEgMS4wNyAxLjA1bC0zLjk5IDQuOTlhLjc1Ljc1IDAgMCAxLTEuMDguMDJMNC4zMjQgOC4zODRhLjc1Ljc1IDAgMSAxIDEuMDYtMS4wNmwyLjA5NCAyLjA5MyAzLjQ3My00LjQyNXoiLz4KPC9zdmc+)*/
const Check: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="check"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
</svg>
      )}
    />
  );

export default Check;
