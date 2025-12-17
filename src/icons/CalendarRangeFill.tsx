import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar-range-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAuNWEuNS41IDAgMCAwLTEgMFYxSDJhMiAyIDAgMCAwLTIgMnYxaDE2VjNhMiAyIDAgMCAwLTItMmgtMVYuNWEuNS41IDAgMCAwLTEgMFYxSDR6TTE2IDdWNUgwdjVoNWExIDEgMCAxIDEgMCAySDB2MmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWOWgtNmExIDEgMCAxIDEgMC0yeiIvPgo8L3N2Zz4=)*/
const CalendarRangeFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar-range-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2z"/>
</svg>
      )}
    />
  );

export default CalendarRangeFill;
