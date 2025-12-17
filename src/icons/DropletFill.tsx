import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![droplet-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNmE2IDYgMCAwIDAgNi02YzAtMS42NTUtMS4xMjItMi45MDQtMi40MzItNC4zNjJDMTAuMjU0IDQuMTc2IDguNzUgMi41MDMgOCAwYzAgMC02IDUuNjg2LTYgMTBhNiA2IDAgMCAwIDYgNk02LjY0NiA0LjY0NmwuNzA4LjcwOGMtLjI5LjI5LTEuMTI4IDEuMzExLTEuOTA3IDIuODdsLS44OTQtLjQ0OGMuODItMS42NDEgMS43MTctMi43NTMgMi4wOTMtMy4xMyIvPgo8L3N2Zz4=)*/
const DropletFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="droplet-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
</svg>
      )}
    />
  );

export default DropletFill;
