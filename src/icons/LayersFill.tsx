import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![layers-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy43NjUgMS41NTlhLjUuNSAwIDAgMSAuNDcgMGw3LjUgNGEuNS41IDAgMCAxIDAgLjg4MmwtNy41IDRhLjUuNSAwIDAgMS0uNDcgMGwtNy41LTRhLjUuNSAwIDAgMSAwLS44ODJ6Ii8+CiAgPHBhdGggZD0ibTIuMTI1IDguNTY3LTEuODYuOTkyYS41LjUgMCAwIDAgMCAuODgybDcuNSA0YS41LjUgMCAwIDAgLjQ3IDBsNy41LTRhLjUuNSAwIDAgMCAwLS44ODJsLTEuODYtLjk5Mi01LjE3IDIuNzU2YTEuNSAxLjUgMCAwIDEtMS40MSAweiIvPgo8L3N2Zz4=)*/
const LayersFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="layers-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882z"/>
  <path d="m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0z"/>
</svg>
      )}
    />
  );

export default LayersFill;
