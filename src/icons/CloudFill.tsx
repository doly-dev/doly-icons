import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC40MDYgMy4zNDJBNS41MyA1LjUzIDAgMCAxIDggMmMyLjY5IDAgNC45MjMgMiA1LjE2NiA0LjU3OUMxNC43NTggNi44MDQgMTYgOC4xMzcgMTYgOS43NzMgMTYgMTEuNTY5IDE0LjUwMiAxMyAxMi42ODcgMTNIMy43ODFDMS43MDggMTMgMCAxMS4zNjYgMCA5LjMxOGMwLTEuNzYzIDEuMjY2LTMuMjIzIDIuOTQyLTMuNTkzLjE0My0uODYzLjY5OC0xLjcyMyAxLjQ2NC0yLjM4MyIvPgo8L3N2Zz4=)*/
const CloudFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>
</svg>
      )}
    />
  );

export default CloudFill;
