import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![caret-right-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAyYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptNS41IDEwYS41LjUgMCAwIDAgLjgzMi4zNzRsNC41LTRhLjUuNSAwIDAgMCAwLS43NDhsLTQuNS00QS41LjUgMCAwIDAgNS41IDR6Ii8+Cjwvc3ZnPg==)*/
const CaretRightSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="caret-right-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z"/>
</svg>
      )}
    />
  );

export default CaretRightSquareFill;
