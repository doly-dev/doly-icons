import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![buildings-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUgLjVhLjUuNSAwIDAgMC0uNzI0LS40NDdsLTggNEEuNS41IDAgMCAwIDYgNC41djMuMTRMLjM0MiA5LjUyNkEuNS41IDAgMCAwIDAgMTB2NS41YS41LjUgMCAwIDAgLjUuNWg5YS41LjUgMCAwIDAgLjUtLjVWMTRoMXYxLjVhLjUuNSAwIDAgMCAuNS41aDNhLjUuNSAwIDAgMCAuNS0uNXpNMiAxMWgxdjFIMnptMiAwaDF2MUg0em0tMSAydjFIMnYtMXptMSAwaDF2MUg0em05LTEwdjFoLTFWM3pNOCA1aDF2MUg4em0xIDJ2MUg4Vjd6TTggOWgxdjFIOHptMiAwaDF2MWgtMXptLTEgMnYxSDh2LTF6bTEgMGgxdjFoLTF6bTMtMnYxaC0xVjl6bS0xIDJoMXYxaC0xem0tMi00aDF2MWgtMXptMyAwdjFoLTFWN3ptLTItMnYxaC0xVjV6bTEgMGgxdjFoLTF6Ii8+Cjwvc3ZnPg==)*/
const BuildingsFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="buildings-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
</svg>
      )}
    />
  );

export default BuildingsFill;
