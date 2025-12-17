import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![book-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxLjc4M0M3LjAxNS45MzYgNS41ODcuODEgNC4yODcuOTRjLTEuNTE0LjE1My0zLjA0Mi42NzItMy45OTQgMS4xMDVBLjUuNSAwIDAgMCAwIDIuNXYxMWEuNS41IDAgMCAwIC43MDcuNDU1Yy44ODItLjQgMi4zMDMtLjg4MSAzLjY4LTEuMDIgMS40MDktLjE0MiAyLjU5LjA4NyAzLjIyMy44NzdhLjUuNSAwIDAgMCAuNzggMGMuNjMzLS43OSAxLjgxNC0xLjAxOSAzLjIyMi0uODc3IDEuMzc4LjEzOSAyLjguNjIgMy42ODEgMS4wMkEuNS41IDAgMCAwIDE2IDEzLjV2LTExYS41LjUgMCAwIDAtLjI5My0uNDU1Yy0uOTUyLS40MzMtMi40OC0uOTUyLTMuOTk0LTEuMTA1QzEwLjQxMy44MDkgOC45ODUuOTM2IDggMS43ODMiLz4KPC9zdmc+)*/
const BookFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="book-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg>
      )}
    />
  );

export default BookFill;
