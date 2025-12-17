import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-down-right-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMTZhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJIMmEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJ6TTUuOTA0IDUuMTk3IDEwIDkuMjkzVjYuNTI1YS41LjUgMCAwIDEgMSAwVjEwLjVhLjUuNSAwIDAgMS0uNS41SDYuNTI1YS41LjUgMCAwIDEgMC0xaDIuNzY4TDUuMTk3IDUuOTA0YS41LjUgMCAwIDEgLjcwNy0uNzA3Ii8+Cjwvc3ZnPg==)*/
const ArrowDownRightSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-down-right-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2zM5.904 5.197 10 9.293V6.525a.5.5 0 0 1 1 0V10.5a.5.5 0 0 1-.5.5H6.525a.5.5 0 0 1 0-1h2.768L5.197 5.904a.5.5 0 0 1 .707-.707"/>
</svg>
      )}
    />
  );

export default ArrowDownRightSquareFill;
