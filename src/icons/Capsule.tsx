import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![capsule](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS44MjggOC45IDguOSAxLjgyN2E0IDQgMCAxIDEgNS42NTcgNS42NTdsLTcuMDcgNy4wNzFBNCA0IDAgMSAxIDEuODI3IDguOVptOS4xMjguNzcxIDIuODkzLTIuODkzYTMgMyAwIDEgMC00LjI0My00LjI0Mkw2LjcxMyA1LjQyOXoiLz4KPC9zdmc+)*/
const Capsule: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="capsule"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z"/>
</svg>
      )}
    />
  );

export default Capsule;
