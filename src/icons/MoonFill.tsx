import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![moon-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAuMjc4YS43Ny43NyAwIDAgMSAuMDguODU4IDcuMiA3LjIgMCAwIDAtLjg3OCAzLjQ2YzAgNC4wMjEgMy4yNzggNy4yNzcgNy4zMTggNy4yNzdxLjc5Mi0uMDAxIDEuNTMzLS4xNmEuNzkuNzkgMCAwIDEgLjgxLjMxNi43My43MyAwIDAgMS0uMDMxLjg5M0E4LjM1IDguMzUgMCAwIDEgOC4zNDQgMTZDMy43MzQgMTYgMCAxMi4yODYgMCA3LjcxIDAgNC4yNjYgMi4xMTQgMS4zMTIgNS4xMjQuMDZBLjc1Ljc1IDAgMCAxIDYgLjI3OCIvPgo8L3N2Zz4=)*/
const MoonFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="moon-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg>
      )}
    />
  );

export default MoonFill;
