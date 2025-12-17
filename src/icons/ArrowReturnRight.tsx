import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-return-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjUgMS41QS41LjUgMCAwIDAgMSAydjQuOGEyLjUgMi41IDAgMCAwIDIuNSAyLjVoOS43OTNsLTMuMzQ3IDMuMzQ2YS41LjUgMCAwIDAgLjcwOC43MDhsNC4yLTQuMmEuNS41IDAgMCAwIDAtLjcwOGwtNC00YS41LjUgMCAwIDAtLjcwOC43MDhMMTMuMjkzIDguM0gzLjVBMS41IDEuNSAwIDAgMSAyIDYuOFYyYS41LjUgMCAwIDAtLjUtLjUiLz4KPC9zdmc+)*/
const ArrowReturnRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-return-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"/>
</svg>
      )}
    />
  );

export default ArrowReturnRight;
