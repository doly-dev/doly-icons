import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar2-x-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDBhLjUuNSAwIDAgMSAuNS41VjFoOFYuNWEuNS41IDAgMCAxIDEgMFYxaDFhMiAyIDAgMCAxIDIgMnYxMWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYzYTIgMiAwIDAgMSAyLTJoMVYuNWEuNS41IDAgMCAxIC41LS41bTkuOTU0IDNIMi41NDVjLS4zIDAtLjU0NS4yMjQtLjU0NS41djFjMCAuMjc2LjI0NC41LjU0NS41aDEwLjkxYy4zIDAgLjU0NS0uMjI0LjU0NS0uNXYtMWMwLS4yNzYtLjI0NC0uNS0uNTQ2LS41bS02LjYgNS4xNDZhLjUuNSAwIDEgMC0uNzA4LjcwOEw3LjI5MyAxMGwtMS4xNDcgMS4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEw4IDEwLjcwN2wxLjE0NiAxLjE0N2EuNS41IDAgMCAwIC43MDgtLjcwOEw4LjcwNyAxMGwxLjE0Ny0xLjE0NmEuNS41IDAgMCAwLS43MDgtLjcwOEw4IDkuMjkzeiIvPgo8L3N2Zz4=)*/
const Calendar2XFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar2-x-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5m-6.6 5.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293z"/>
</svg>
      )}
    />
  );

export default Calendar2XFill;
