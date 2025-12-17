import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![type-bold](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4yMSAxM2MyLjEwNiAwIDMuNDEyLTEuMDg3IDMuNDEyLTIuODIzIDAtMS4zMDYtLjk4NC0yLjI4My0yLjMyNC0yLjM4NnYtLjA1NWEyLjE3NiAyLjE3NiAwIDAgMCAxLjg1Mi0yLjE0YzAtMS41MS0xLjE2Mi0yLjQ2LTMuMDE0LTIuNDZIMy44NDNWMTN6TTUuOTA4IDQuNjc0aDEuNjk2Yy45NjMgMCAxLjUxNy40NTEgMS41MTcgMS4yNDQgMCAuODM0LS42MjkgMS4zMi0xLjczIDEuMzJINS45MDhWNC42NzN6bTAgNi43ODhWOC41OThoMS43M2MxLjIxNyAwIDEuODguNDkyIDEuODggMS40MTUgMCAuOTQzLS42NDMgMS40NDktMS44MzIgMS40NDlINS45MDd6Ii8+Cjwvc3ZnPg==)*/
const TypeBold: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="type-bold"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
</svg>
      )}
    />
  );

export default TypeBold;
