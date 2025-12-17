import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-end](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNSA0YS41LjUgMCAwIDAtMSAwdjMuMjQ4TDUuMjMzIDMuNjEyQzQuNzEzIDMuMzEgNCAzLjY1NSA0IDQuMzA4djcuMzg0YzAgLjY1My43MTMuOTk4IDEuMjMzLjY5NkwxMS41IDguNzUyVjEyYS41LjUgMCAwIDAgMSAwek01IDQuNjMzIDEwLjgwNCA4IDUgMTEuMzY3eiIvPgo8L3N2Zz4=)*/
const SkipEnd: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-end"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.713 3.31 4 3.655 4 4.308v7.384c0 .653.713.998 1.233.696L11.5 8.752V12a.5.5 0 0 0 1 0zM5 4.633 10.804 8 5 11.367z"/>
</svg>
      )}
    />
  );

export default SkipEnd;
