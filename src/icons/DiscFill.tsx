import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![disc-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwbS02IDBhMiAyIDAgMSAwLTQgMCAyIDIgMCAwIDAgNCAwTTQgOGE0IDQgMCAwIDEgNC00IC41LjUgMCAwIDAgMC0xIDUgNSAwIDAgMC01IDUgLjUuNSAwIDAgMCAxIDBtOSAwYS41LjUgMCAxIDAtMSAwIDQgNCAwIDAgMS00IDQgLjUuNSAwIDAgMCAwIDEgNSA1IDAgMCAwIDUtNSIvPgo8L3N2Zz4=)*/
const DiscFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="disc-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-6 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M4 8a4 4 0 0 1 4-4 .5.5 0 0 0 0-1 5 5 0 0 0-5 5 .5.5 0 0 0 1 0m9 0a.5.5 0 1 0-1 0 4 4 0 0 1-4 4 .5.5 0 0 0 0 1 5 5 0 0 0 5-5"/>
</svg>
      )}
    />
  );

export default DiscFill;
