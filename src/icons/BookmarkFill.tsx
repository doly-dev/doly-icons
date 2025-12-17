import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bookmark-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAydjEzLjVhLjUuNSAwIDAgMCAuNzQuNDM5TDggMTMuMDY5bDUuMjYgMi44N0EuNS41IDAgMCAwIDE0IDE1LjVWMmEyIDIgMCAwIDAtMi0ySDRhMiAyIDAgMCAwLTIgMiIvPgo8L3N2Zz4=)*/
const BookmarkFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bookmark-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
</svg>
      )}
    />
  );

export default BookmarkFill;
