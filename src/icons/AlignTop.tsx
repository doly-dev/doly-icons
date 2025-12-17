import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![align-top](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgcng9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDYgMTUpIi8+CiAgPHBhdGggZD0iTTEuNSAyYS41LjUgMCAwIDEgMC0xem0xMy0xYS41LjUgMCAwIDEgMCAxem0tMTMgMGgxM3YxaC0xM3oiLz4KPC9zdmc+)*/
const AlignTop: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="align-top"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)"/>
  <path d="M1.5 2a.5.5 0 0 1 0-1zm13-1a.5.5 0 0 1 0 1zm-13 0h13v1h-13z"/>
</svg>
      )}
    />
  );

export default AlignTop;
