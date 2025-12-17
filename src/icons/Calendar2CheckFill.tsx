import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar2-check-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDBhLjUuNSAwIDAgMSAuNS41VjFoOFYuNWEuNS41IDAgMCAxIDEgMFYxaDFhMiAyIDAgMCAxIDIgMnYxMWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYzYTIgMiAwIDAgMSAyLTJoMVYuNWEuNS41IDAgMCAxIC41LS41bTkuOTU0IDNIMi41NDVjLS4zIDAtLjU0NS4yMjQtLjU0NS41djFjMCAuMjc2LjI0NC41LjU0NS41aDEwLjkxYy4zIDAgLjU0NS0uMjI0LjU0NS0uNXYtMWMwLS4yNzYtLjI0NC0uNS0uNTQ2LS41bS0yLjYgNS44NTRhLjUuNSAwIDAgMC0uNzA4LS43MDhMNy41IDEwLjc5MyA2LjM1NCA5LjY0NmEuNS41IDAgMSAwLS43MDguNzA4bDEuNSAxLjVhLjUuNSAwIDAgMCAuNzA4IDB6Ii8+Cjwvc3ZnPg==)*/
const Calendar2CheckFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar2-check-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5m-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
</svg>
      )}
    />
  );

export default Calendar2CheckFill;
