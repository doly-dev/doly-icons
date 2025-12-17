import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar-x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi4xNDYgNy4xNDZhLjUuNSAwIDAgMSAuNzA4IDBMOCA4LjI5M2wxLjE0Ni0xLjE0N2EuNS41IDAgMSAxIC43MDguNzA4TDguNzA3IDlsMS4xNDcgMS4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOEw4IDkuNzA3bC0xLjE0NiAxLjE0N2EuNS41IDAgMCAxLS43MDgtLjcwOEw3LjI5MyA5IDYuMTQ2IDcuODU0YS41LjUgMCAwIDEgMC0uNzA4Ii8+CiAgPHBhdGggZD0iTTMuNSAwYS41LjUgMCAwIDEgLjUuNVYxaDhWLjVhLjUuNSAwIDAgMSAxIDBWMWgxYTIgMiAwIDAgMSAyIDJ2MTFhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yaDFWLjVhLjUuNSAwIDAgMSAuNS0uNU0xIDR2MTBhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xVjR6Ii8+Cjwvc3ZnPg==)*/
const CalendarX: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar-x"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>
      )}
    />
  );

export default CalendarX;
