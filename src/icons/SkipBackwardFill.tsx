import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-backward-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNLjUgMy41QS41LjUgMCAwIDAgMCA0djhhLjUuNSAwIDAgMCAxIDBWOC43NTNsNi4yNjcgMy42MzZjLjU0LjMxMyAxLjIzMy0uMDY2IDEuMjMzLS42OTd2LTIuOTRsNi4yNjcgMy42MzZjLjU0LjMxNCAxLjIzMy0uMDY1IDEuMjMzLS42OTZWNC4zMDhjMC0uNjMtLjY5My0xLjAxLTEuMjMzLS42OTZMOC41IDcuMjQ4di0yLjk0YzAtLjYzLS42OTItMS4wMS0xLjIzMy0uNjk2TDEgNy4yNDhWNGEuNS41IDAgMCAwLS41LS41Ii8+Cjwvc3ZnPg==)*/
const SkipBackwardFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-backward-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5"/>
</svg>
      )}
    />
  );

export default SkipBackwardFill;
