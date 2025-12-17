import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![layers](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4yMzUgMS41NTlhLjUuNSAwIDAgMC0uNDcgMGwtNy41IDRhLjUuNSAwIDAgMCAwIC44ODJMMy4xODggOCAuMjY0IDkuNTU5YS41LjUgMCAwIDAgMCAuODgybDcuNSA0YS41LjUgMCAwIDAgLjQ3IDBsNy41LTRhLjUuNSAwIDAgMCAwLS44ODJMMTIuODEzIDhsMi45MjItMS41NTlhLjUuNSAwIDAgMCAwLS44ODJ6bTMuNTE1IDcuMDA4TDE0LjQzOCAxMCA4IDEzLjQzMyAxLjU2MiAxMCA0LjI1IDguNTY3bDMuNTE1IDEuODc0YS41LjUgMCAwIDAgLjQ3IDB6TTggOS40MzMgMS41NjIgNiA4IDIuNTY3IDE0LjQzOCA2eiIvPgo8L3N2Zz4=)*/
const Layers: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="layers"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0zM8 9.433 1.562 6 8 2.567 14.438 6z"/>
</svg>
      )}
    />
  );

export default Layers;
