import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar-day-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAuNWEuNS41IDAgMCAwLTEgMFYxSDJhMiAyIDAgMCAwLTIgMnYxaDE2VjNhMiAyIDAgMCAwLTItMmgtMVYuNWEuNS41IDAgMCAwLTEgMFYxSDR6TTE2IDE0YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjVoMTZ6bS00Ljc4NS02LjE0NWEuNDI4LjQyOCAwIDEgMCAwLS44NTUuNDI2LjQyNiAwIDAgMC0uNDMuNDNjMCAuMjM4LjE5Mi40MjUuNDMuNDI1bS4zMzYuNTYzaC0uNjcydjQuMTA1aC42NzJ6bS02Ljg2NyA0LjEwNXYtMi4zaDIuMjYxdi0uNjFINC42ODRWNy44MDFoMi40NjR2LS42MUg0djUuMzMyem0zLjI5NiAwaC42NzZWOS45OGMwLS41NTQuMjI3LTEuMDA3Ljk1My0xLjAwNy4xMjUgMCAuMjU4LjAwNC4zMjkuMDE1di0uNjEzYTIgMiAwIDAgMC0uMjU0LS4wMmMtLjU4MiAwLS44OTEuMzItMS4wMTIuNTY3aC0uMDJ2LS41MDRINy45OHoiLz4KPC9zdmc+)*/
const CalendarDayFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar-day-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16zm-4.785-6.145a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43c0 .238.192.425.43.425m.336.563h-.672v4.105h.672zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a2 2 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98z"/>
</svg>
      )}
    />
  );

export default CalendarDayFill;
