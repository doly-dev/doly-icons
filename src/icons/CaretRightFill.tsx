import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![caret-right-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtMTIuMTQgOC43NTMtNS40ODIgNC43OTZjLS42NDYuNTY2LTEuNjU4LjEwNi0xLjY1OC0uNzUzVjMuMjA0YTEgMSAwIDAgMSAxLjY1OS0uNzUzbDUuNDggNC43OTZhMSAxIDAgMCAxIDAgMS41MDZ6Ii8+Cjwvc3ZnPg==)*/
const CaretRightFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="caret-right-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
      )}
    />
  );

export default CaretRightFill;
