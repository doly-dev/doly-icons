import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-slash-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjExMiA1LjExMmEzIDMgMCAwIDAtLjE3LjYxM0MxLjI2NiA2LjA5NSAwIDcuNTU1IDAgOS4zMTggMCAxMS4zNjYgMS43MDggMTMgMy43ODEgMTNIMTF6bTExLjM3MiA3LjM3Mkw0LjkzNyAyLjkzN0E1LjUgNS41IDAgMCAxIDggMmMyLjY5IDAgNC45MjMgMiA1LjE2NiA0LjU3OUMxNC43NTggNi44MDQgMTYgOC4xMzcgMTYgOS43NzNhMy4yIDMuMiAwIDAgMS0xLjUxNiAyLjcxMW0tLjgzOCAxLjg3LTEyLTEyIC43MDgtLjcwOCAxMiAxMnoiLz4KPC9zdmc+)*/
const CloudSlashFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-slash-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M3.112 5.112a3 3 0 0 0-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11zm11.372 7.372L4.937 2.937A5.5 5.5 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 0 1-1.516 2.711m-.838 1.87-12-12 .708-.708 12 12z"/>
</svg>
      )}
    />
  );

export default CloudSlashFill;
