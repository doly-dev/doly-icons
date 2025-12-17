import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hand-index-thumb-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDEuNzV2Mi43MTZsLjA0Ny0uMDAyYy4zMTItLjAxMi43NDItLjAxNiAxLjA1MS4wNDYuMjguMDU2LjU0My4xOC43MzguMjg4LjI3My4xNTIuNDU2LjM4NS41Ni42NDJsLjEzMi0uMDEyYy4zMTItLjAyNC43OTQtLjAzOCAxLjE1OC4xMDguMzcuMTQ4LjY4OS40ODcuODguNzE2cS4xMTMuMTM3LjE5NS4yNDhoLjU4MmEyIDIgMCAwIDEgMS45OSAyLjE5OWwtLjI3MiAyLjcxNWEzLjUgMy41IDAgMCAxLS40NDQgMS4zODlsLTEuMzk1IDIuNDQxQTEuNSAxLjUgMCAwIDEgMTIuNDIgMTZINi4xMThhMS41IDEuNSAwIDAgMS0xLjM0Mi0uODNsLTEuMjE1LTIuNDNMMS4wNyA4LjU4OWExLjUxNyAxLjUxNyAwIDAgMSAyLjM3My0xLjg1Mkw1IDguMjkzVjEuNzVhMS43NSAxLjc1IDAgMCAxIDMuNSAwIi8+Cjwvc3ZnPg==)*/
const HandIndexThumbFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hand-index-thumb-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716q.113.137.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0"/>
</svg>
      )}
    />
  );

export default HandIndexThumbFill;
