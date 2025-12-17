import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![align-bottom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgeD0iNiIgeT0iMSIgcng9IjEiLz4KICA8cGF0aCBkPSJNMS41IDE0YS41LjUgMCAwIDAgMCAxem0xMyAxYS41LjUgMCAwIDAgMC0xem0tMTMgMGgxM3YtMWgtMTN6Ii8+Cjwvc3ZnPg==)*/
const AlignBottom: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="align-bottom"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <rect width="4" height="12" x="6" y="1" rx="1"/>
  <path d="M1.5 14a.5.5 0 0 0 0 1zm13 1a.5.5 0 0 0 0-1zm-13 0h13v-1h-13z"/>
</svg>
      )}
    />
  );

export default AlignBottom;
