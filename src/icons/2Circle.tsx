import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![2-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDhtMTUgMEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTYuNjQ2IDYuMjR2LjA3SDUuMzc1di0uMDY0YzAtMS4yMTMuODc5LTIuNDAyIDIuNjM3LTIuNDAyIDEuNTgyIDAgMi42MTMuOTQ5IDIuNjEzIDIuMjE1IDAgMS4wMDItLjYgMS42NjctMS4yODcgMi40M2wtLjA5Ni4xMDctMS45NzQgMi4yMnYuMDc3aDMuNDk4VjEySDUuNDIydi0uODMybDIuOTctMy4yOTNjLjQzNC0uNDc1LjkwMy0xLjAwOC45MDMtMS43MDUgMC0uNzQ0LS41NTctMS4yMzYtMS4zMTMtMS4yMzYtLjg0MyAwLTEuMzM2LjYxNS0xLjMzNiAxLjMwNiIvPgo8L3N2Zz4=)*/
const Icon2Circle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="2-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"/>
</svg>
      )}
    />
  );

export default Icon2Circle;
