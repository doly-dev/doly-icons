import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![magnet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxYTcgNyAwIDAgMC03IDd2M2g0VjhhMyAzIDAgMCAxIDYgMHYzaDRWOGE3IDcgMCAwIDAtNy03bTcgMTFoLTR2M2g0ek01IDEySDF2M2g0ek0wIDhhOCA4IDAgMSAxIDE2IDB2OGgtNlY4YTIgMiAwIDEgMC00IDB2OEgweiIvPgo8L3N2Zz4=)*/
const Magnet: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="magnet"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 1a7 7 0 0 0-7 7v3h4V8a3 3 0 0 1 6 0v3h4V8a7 7 0 0 0-7-7m7 11h-4v3h4zM5 12H1v3h4zM0 8a8 8 0 1 1 16 0v8h-6V8a2 2 0 1 0-4 0v8H0z"/>
</svg>
      )}
    />
  );

export default Magnet;
