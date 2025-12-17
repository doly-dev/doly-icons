import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mouse2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyA1LjE4OEMzIDIuMzQxIDUuMjIgMCA4IDBzNSAyLjM0MiA1IDUuMTg4djUuNjI1QzEzIDEzLjY1OCAxMC43OCAxNiA4IDE2cy01LTIuMzQyLTUtNS4xODhWNS4xODl6bTQuNS00LjE1NUM1LjU0MSAxLjI4OSA0IDMuMDM1IDQgNS4xODhWNS41aDMuNXptMSAwVjUuNUgxMnYtLjMxM2MwLTIuMTUyLTEuNTQxLTMuODk4LTMuNS00LjE1NE0xMiA2LjVINHY0LjMxM0M0IDEzLjE0NSA1LjgxIDE1IDggMTVzNC0xLjg1NSA0LTQuMTg4eiIvPgo8L3N2Zz4=)*/
const Mouse2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mouse2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154M12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188z"/>
</svg>
      )}
    />
  );

export default Mouse2;
