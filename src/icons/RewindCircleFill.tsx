import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![rewind-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNkE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2TTcuNzI5IDUuMDU1QS41LjUgMCAwIDEgOCA1LjV2MS44ODZsMy4yMS0yLjI5M0EuNS41IDAgMCAxIDEyIDUuNXY1YS41LjUgMCAwIDEtLjc5LjQwN0w4IDguNjE0VjEwLjVhLjUuNSAwIDAgMS0uNzkuNDA3bC0zLjUtMi41YS41LjUgMCAwIDEgMC0uODE0bDMuNS0yLjVhLjUuNSAwIDAgMSAuNTE5LS4wMzgiLz4KPC9zdmc+)*/
const RewindCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="rewind-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7.729 5.055A.5.5 0 0 1 8 5.5v1.886l3.21-2.293A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8 8.614V10.5a.5.5 0 0 1-.79.407l-3.5-2.5a.5.5 0 0 1 0-.814l3.5-2.5a.5.5 0 0 1 .519-.038"/>
</svg>
      )}
    />
  );

export default RewindCircleFill;
