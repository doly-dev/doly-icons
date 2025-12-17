import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS41IDkuNUEuNS41IDAgMCAxIDYgOWg0YS41LjUgMCAwIDEgMCAxSDZhLjUuNSAwIDAgMS0uNS0uNSIvPgogIDxwYXRoIGQ9Ik0zLjUgMGEuNS41IDAgMCAxIC41LjVWMWg4Vi41YS41LjUgMCAwIDEgMSAwVjFoMWEyIDIgMCAwIDEgMiAydjExYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjNhMiAyIDAgMCAxIDItMmgxVi41YS41LjUgMCAwIDEgLjUtLjVNMSA0djEwYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMVY0eiIvPgo8L3N2Zz4=)*/
const CalendarMinus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar-minus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>
      )}
    />
  );

export default CalendarMinus;
