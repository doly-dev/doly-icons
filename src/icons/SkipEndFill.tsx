import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-end-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNSA0YS41LjUgMCAwIDAtMSAwdjMuMjQ4TDUuMjMzIDMuNjEyQzQuNjkzIDMuMyA0IDMuNjc4IDQgNC4zMDh2Ny4zODRjMCAuNjMuNjkyIDEuMDEgMS4yMzMuNjk3TDExLjUgOC43NTNWMTJhLjUuNSAwIDAgMCAxIDB6Ii8+Cjwvc3ZnPg==)*/
const SkipEndFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-end-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0z"/>
</svg>
      )}
    />
  );

export default SkipEndFill;
