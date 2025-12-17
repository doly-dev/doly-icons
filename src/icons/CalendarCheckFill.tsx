import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar-check-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAuNWEuNS41IDAgMCAwLTEgMFYxSDJhMiAyIDAgMCAwLTIgMnYxaDE2VjNhMiAyIDAgMCAwLTItMmgtMVYuNWEuNS41IDAgMCAwLTEgMFYxSDR6TTE2IDE0VjVIMHY5YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMm0tNS4xNDYtNS4xNDYtMyAzYS41LjUgMCAwIDEtLjcwOCAwbC0xLjUtMS41YS41LjUgMCAwIDEgLjcwOC0uNzA4TDcuNSAxMC43OTNsMi42NDYtMi42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOCIvPgo8L3N2Zz4=)*/
const CalendarCheckFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar-check-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>
      )}
    />
  );

export default CalendarCheckFill;
