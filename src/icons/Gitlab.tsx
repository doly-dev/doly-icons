import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![gitlab](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtMTUuNzM0IDYuMS0uMDIyLS4wNThMMTMuNTM0LjM1OGEuNTcuNTcgMCAwIDAtLjU2My0uMzU2LjYuNiAwIDAgMC0uMzI4LjEyMi42LjYgMCAwIDAtLjE5My4yOTRsLTEuNDcgNC40OTlINS4wMjVsLTEuNDctNC41QS41NzIuNTcyIDAgMCAwIDIuNDcuMzU4TC4yODkgNi4wNGwtLjAyMi4wNTdBNC4wNDQgNC4wNDQgMCAwIDAgMS42MSAxMC43N2wuMDA3LjAwNi4wMi4wMTQgMy4zMTggMi40ODUgMS42NCAxLjI0MiAxIC43NTVhLjY3LjY3IDAgMCAwIC44MTQgMGwxLS43NTUgMS42NC0xLjI0MiAzLjMzOC0yLjUuMDA5LS4wMDdhNC4wNSA0LjA1IDAgMCAwIDEuMzQtNC42NjhaIi8+Cjwvc3ZnPg==)*/
const Gitlab: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="gitlab"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z"/>
</svg>
      )}
    />
  );

export default Gitlab;
