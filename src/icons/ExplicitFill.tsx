import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![explicit-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDBBMi41IDIuNSAwIDAgMCAwIDIuNXYxMUEyLjUgMi41IDAgMCAwIDIuNSAxNmgxMWEyLjUgMi41IDAgMCAwIDIuNS0yLjV2LTExQTIuNSAyLjUgMCAwIDAgMTMuNSAwem00LjMyNiAxMC44OEgxMC41VjEyaC01VjQuMDAyaDV2MS4xMkg2LjgyNlY3LjRoMy40NTd2MS4wNzNINi44MjZ6Ii8+Cjwvc3ZnPg==)*/
const ExplicitFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="explicit-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zm4.326 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826z"/>
</svg>
      )}
    />
  );

export default ExplicitFill;
