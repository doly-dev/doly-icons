import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![3-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwbS04LjA4Mi40MTRjLjkyIDAgMS41MzUuNTQgMS41NDEgMS4zMTguMDEyLjc5MS0uNjE1IDEuMzYtMS41ODggMS4zNTQtLjg2MS0uMDA2LTEuNDgyLS40NjktMS41NC0xLjA2Nkg1LjEwNGMuMDQ3IDEuMTc3IDEuMDUgMi4xNDQgMi43NTQgMi4xNDQgMS42NTMgMCAyLjk1NC0uOTM3IDIuOTMtMi4zOTYtLjAyMy0xLjI3OC0xLjAzMS0xLjg0Ni0xLjczNC0xLjkxNnYtLjA3Yy41OTctLjEgMS41MDUtLjczOSAxLjQ4Mi0xLjg3Ni0uMDMtMS4xNzctMS4wNDMtMi4wNzQtMi42MzctMi4wNjItMS42NzUuMDA2LTIuNTkuOTg0LTIuNjI1IDIuMTJoMS4yNDhjLjAzNi0uNTU2LjU1Ny0xLjA1NCAxLjM0OC0xLjA1NC43ODUgMCAxLjM0OC40ODYgMS4zNDggMS4xOTUuMDA2LjcxNS0uNTYzIDEuMjM3LTEuMzQyIDEuMjM3aC0uODM4djEuMDcyaC44NzlaIi8+Cjwvc3ZnPg==)*/
const Icon3CircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="3-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
</svg>
      )}
    />
  );

export default Icon3CircleFill;
