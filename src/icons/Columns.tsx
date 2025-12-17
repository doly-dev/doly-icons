import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![columns](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAyYTEgMSAwIDAgMSAxLTFoMTRhMSAxIDAgMCAxIDEgMXYxMmExIDEgMCAwIDEtMSAxSDFhMSAxIDAgMCAxLTEtMXptOC41IDB2OEgxNVYyem0wIDl2M0gxNXYtM3ptLTEtOUgxdjNoNi41ek0xIDE0aDYuNVY2SDF6Ii8+Cjwvc3ZnPg==)*/
const Columns: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="columns"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm8.5 0v8H15V2zm0 9v3H15v-3zm-1-9H1v3h6.5zM1 14h6.5V6H1z"/>
</svg>
      )}
    />
  );

export default Columns;
