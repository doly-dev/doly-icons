import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hexagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgNC41Nzd2Ni44NDZMOCAxNWwtNi0zLjU3N1Y0LjU3N0w4IDF6TTguNS4xMzRhMSAxIDAgMCAwLTEgMGwtNiAzLjU3N2ExIDEgMCAwIDAtLjUuODY2djYuODQ2YTEgMSAwIDAgMCAuNS44NjZsNiAzLjU3N2ExIDEgMCAwIDAgMSAwbDYtMy41NzdhMSAxIDAgMCAwIC41LS44NjZWNC41NzdhMSAxIDAgMCAwLS41LS44NjZ6Ii8+Cjwvc3ZnPg==)*/
const Hexagon: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hexagon"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
</svg>
      )}
    />
  );

export default Hexagon;
