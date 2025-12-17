import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![universal-access](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS41IDEuNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgME02IDUuNWwtNC41MzUtLjQ0MkEuNTMxLjUzMSAwIDAgMSAxLjUzMSA0SDE0LjQ3YS41MzEuNTMxIDAgMCAxIC4wNjYgMS4wNThMMTAgNS41VjlsLjQ1MiA2LjQyYS41MzUuNTM1IDAgMCAxLTEuMDUzLjE3NEw4LjI0MyA5Ljk3Yy0uMDY0LS4yNTItLjQyMi0uMjUyLS40ODYgMGwtMS4xNTYgNS42MjRhLjUzNS41MzUgMCAwIDEtMS4wNTMtLjE3NEw2IDl6Ii8+Cjwvc3ZnPg==)*/
const UniversalAccess: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="universal-access"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z"/>
</svg>
      )}
    />
  );

export default UniversalAccess;
