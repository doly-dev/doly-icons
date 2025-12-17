import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar3-range](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMEgyYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMk0xIDMuODU3QzEgMy4zODQgMS40NDggMyAyIDNoMTJjLjU1MiAwIDEgLjM4NCAxIC44NTd2MTAuMjg2YzAgLjQ3My0uNDQ4Ljg1Ny0xIC44NTdIMmMtLjU1MiAwLTEtLjM4NC0xLS44NTd6Ii8+CiAgPHBhdGggZD0iTTcgMTBhMSAxIDAgMCAwIDAtMkgxdjJ6bTItM2g2VjVIOWExIDEgMCAwIDAgMCAyIi8+Cjwvc3ZnPg==)*/
const Calendar3Range: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar3-range"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
  <path d="M7 10a1 1 0 0 0 0-2H1v2zm2-3h6V5H9a1 1 0 0 0 0 2"/>
</svg>
      )}
    />
  );

export default Calendar3Range;
