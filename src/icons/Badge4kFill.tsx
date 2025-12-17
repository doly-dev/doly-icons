import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-4k-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41NzcgOC45di4wM2gxLjgyOFY1Ljg5OGgtLjA2MmE0NyA0NyAwIDAgMC0xLjc2NiAzLjAwMXoiLz4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMC0yIDJ2OGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMi0yem0yLjM3MiAzLjcxNS40MzUtLjcxNGgxLjcxdjMuOTNoLjczM3YuOTU3aC0uNzMzVjExSDUuNDA1VjkuODg4SDIuNXYtLjk3MWMuNTc0LTEuMDc3IDEuMjI1LTIuMTQyIDEuODcyLTMuMjAybTcuNzMtLjcxNGgxLjMwNmwtMi4xNCAyLjU4NEwxMy41IDExaC0xLjQyOGwtMS42NzktMi42MjQtLjYxNS43VjExSDguNTlWNS4wMDFoMS4xODd2Mi42ODZoLjA1N0wxMi4xMDIgNXoiLz4KPC9zdmc+)*/
const Badge4kFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-4k-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.577 8.9v.03h1.828V5.898h-.062a47 47 0 0 0-1.766 3.001z"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm2.372 3.715.435-.714h1.71v3.93h.733v.957h-.733V11H5.405V9.888H2.5v-.971c.574-1.077 1.225-2.142 1.872-3.202m7.73-.714h1.306l-2.14 2.584L13.5 11h-1.428l-1.679-2.624-.615.7V11H8.59V5.001h1.187v2.686h.057L12.102 5z"/>
</svg>
      )}
    />
  );

export default Badge4kFill;
