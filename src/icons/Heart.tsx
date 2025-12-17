import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtOCAyLjc0OC0uNzE3LS43MzdDNS42LjI4MSAyLjUxNC44NzggMS40IDMuMDUzYy0uNTIzIDEuMDIzLS42NDEgMi41LjMxNCA0LjM4NS45MiAxLjgxNSAyLjgzNCAzLjk4OSA2LjI4NiA2LjM1NyAzLjQ1Mi0yLjM2OCA1LjM2NS00LjU0MiA2LjI4Ni02LjM1Ny45NTUtMS44ODYuODM4LTMuMzYyLjMxNC00LjM4NUMxMy40ODYuODc4IDEwLjQuMjggOC43MTcgMi4wMXpNOCAxNUMtNy4zMzMgNC44NjggMy4yNzktMy4wNCA3LjgyNCAxLjE0M3EuMDkuMDgzLjE3Ni4xNzFhMyAzIDAgMCAxIC4xNzYtLjE3QzEyLjcyLTMuMDQyIDIzLjMzMyA0Ljg2NyA4IDE1Ii8+Cjwvc3ZnPg==)*/
const Heart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
      )}
    />
  );

export default Heart;
