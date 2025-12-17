import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar2-plus-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDBhLjUuNSAwIDAgMSAuNS41VjFoOFYuNWEuNS41IDAgMCAxIDEgMFYxaDFhMiAyIDAgMCAxIDIgMnYxMWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYzYTIgMiAwIDAgMSAyLTJoMVYuNWEuNS41IDAgMCAxIC41LS41TTIgMy41djFjMCAuMjc2LjI0NC41LjU0NS41aDEwLjkxYy4zIDAgLjU0NS0uMjI0LjU0NS0uNXYtMWMwLS4yNzYtLjI0NC0uNS0uNTQ2LS41SDIuNTQ1Yy0uMyAwLS41NDUuMjI0LS41NDUuNW02LjUgNWEuNS41IDAgMCAwLTEgMFYxMEg2YS41LjUgMCAwIDAgMCAxaDEuNXYxLjVhLjUuNSAwIDAgMCAxIDBWMTFIMTBhLjUuNSAwIDAgMCAwLTFIOC41eiIvPgo8L3N2Zz4=)*/
const Calendar2PlusFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar2-plus-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 3.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5H2.545c-.3 0-.545.224-.545.5m6.5 5a.5.5 0 0 0-1 0V10H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V11H10a.5.5 0 0 0 0-1H8.5z"/>
</svg>
      )}
    />
  );

export default Calendar2PlusFill;
