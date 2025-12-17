import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar3-week-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgMTRhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWM2gxNnpNMyA4YTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMm0zIDBhMSAxIDAgMSAwIDAgMiAxIDEgMCAwIDAgMC0ybTQtM2ExIDEgMCAxIDAgMCAyIDEgMSAwIDAgMCAwLTJtMyAwYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMm0xLTVhMiAyIDAgMCAxIDIgMkgwYTIgMiAwIDAgMSAyLTJ6Ii8+Cjwvc3ZnPg==)*/
const Calendar3WeekFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar3-week-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3h16zM3 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1-5a2 2 0 0 1 2 2H0a2 2 0 0 1 2-2z"/>
</svg>
      )}
    />
  );

export default Calendar3WeekFill;
