import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA3YS41LjUgMCAwIDEgLjUuNVY5SDEwYS41LjUgMCAwIDEgMCAxSDguNXYxLjVhLjUuNSAwIDAgMS0xIDBWMTBINmEuNS41IDAgMCAxIDAtMWgxLjVWNy41QS41LjUgMCAwIDEgOCA3Ii8+CiAgPHBhdGggZD0iTTMuNSAwYS41LjUgMCAwIDEgLjUuNVYxaDhWLjVhLjUuNSAwIDAgMSAxIDBWMWgxYTIgMiAwIDAgMSAyIDJ2MTFhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yaDFWLjVhLjUuNSAwIDAgMSAuNS0uNU0xIDR2MTBhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xVjR6Ii8+Cjwvc3ZnPg==)*/
const CalendarPlus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar-plus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>
      )}
    />
  );

export default CalendarPlus;
