import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![rewind-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC40MDQgNy4zMDRhLjgwMi44MDIgMCAwIDAgMCAxLjM5Mmw2LjM2MyAzLjY5MmMuNTIuMzAyIDEuMjMzLS4wNDMgMS4yMzMtLjY5NlY0LjMwOGMwLS42NTMtLjcxMy0uOTk4LTEuMjMzLS42OTZ6Ii8+CiAgPHBhdGggZD0iTS40MDQgNy4zMDRhLjgwMi44MDIgMCAwIDAgMCAxLjM5Mmw2LjM2MyAzLjY5MmMuNTIuMzAyIDEuMjMzLS4wNDMgMS4yMzMtLjY5NlY0LjMwOGMwLS42NTMtLjcxMy0uOTk4LTEuMjMzLS42OTZ6Ii8+Cjwvc3ZnPg==)*/
const RewindFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="rewind-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z"/>
  <path d="M.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z"/>
</svg>
      )}
    />
  );

export default RewindFill;
