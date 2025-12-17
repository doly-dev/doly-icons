import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![square-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNVYxaDZhMSAxIDAgMCAxIDEgMXYxMmExIDEgMCAwIDEtMSAxem02IDFhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJIMmEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJ6Ii8+Cjwvc3ZnPg==)*/
const SquareHalf: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="square-half"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"/>
</svg>
      )}
    />
  );

export default SquareHalf;
