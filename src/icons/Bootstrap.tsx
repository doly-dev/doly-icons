import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bootstrap](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS4wNjIgMTJoMy40NzVjMS44MDQgMCAyLjg4OC0uOTA4IDIuODg4LTIuMzk2IDAtMS4xMDItLjc2MS0xLjkxNi0xLjkwNC0yLjAzNHYtLjFjLjgzMi0uMTQgMS40ODItLjkzIDEuNDgyLTEuODE2IDAtMS4zLS45NTUtMi4xMS0yLjU0Mi0yLjExSDUuMDYyem0xLjMxMy00Ljg3NVY0LjY1OGgxLjc4Yy45NzMgMCAxLjU0Mi40NTcgMS41NDIgMS4yMzcgMCAuODAyLS42MDQgMS4yMy0xLjc2NCAxLjIzem0wIDMuNzYyVjguMTYyaDEuODIyYzEuMjM2IDAgMS44ODcuNDYzIDEuODg3IDEuMzQ4IDAgLjg5Ni0uNjI3IDEuMzc3LTEuODExIDEuMzc3eiIvPgogIDxwYXRoIGQ9Ik0wIDRhNCA0IDAgMCAxIDQtNGg4YTQgNCAwIDAgMSA0IDR2OGE0IDQgMCAwIDEtNCA0SDRhNCA0IDAgMCAxLTQtNHptNC0zYTMgMyAwIDAgMC0zIDN2OGEzIDMgMCAwIDAgMyAzaDhhMyAzIDAgMCAwIDMtM1Y0YTMgMyAwIDAgMC0zLTN6Ii8+Cjwvc3ZnPg==)*/
const Bootstrap: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bootstrap"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
  <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
</svg>
      )}
    />
  );

export default Bootstrap;
