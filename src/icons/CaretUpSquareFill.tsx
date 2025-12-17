import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![caret-up-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAyYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptNCA5aDhhLjUuNSAwIDAgMCAuMzc0LS44MzJsLTQtNC41YS41LjUgMCAwIDAtLjc0OCAwbC00IDQuNUEuNS41IDAgMCAwIDQgMTEiLz4KPC9zdmc+)*/
const CaretUpSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="caret-up-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11"/>
</svg>
      )}
    />
  );

export default CaretUpSquareFill;
