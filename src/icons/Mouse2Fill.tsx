import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mouse2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy41LjAyNkM0Ljk1OC4yODYgMyAyLjUxNSAzIDUuMTg4VjUuNWg0LjV6bTEgMFY1LjVIMTN2LS4zMTJDMTMgMi41MTUgMTEuMDQyLjI4NiA4LjUuMDI2TTEzIDYuNUgzdjQuMzEzQzMgMTMuNjU4IDUuMjIgMTYgOCAxNnM1LTIuMzQyIDUtNS4xODh6Ii8+Cjwvc3ZnPg==)*/
const Mouse2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mouse2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026M13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188z"/>
</svg>
      )}
    />
  );

export default Mouse2Fill;
