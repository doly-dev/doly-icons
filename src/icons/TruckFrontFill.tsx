import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![truck-front-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDBBMi41IDIuNSAwIDAgMCAxIDIuNXY5YzAgLjgxOC4zOTMgMS41NDQgMSAydjJhLjUuNSAwIDAgMCAuNS41aDJhLjUuNSAwIDAgMCAuNS0uNVYxNGg2djEuNWEuNS41IDAgMCAwIC41LjVoMmEuNS41IDAgMCAwIC41LS41di0yYy42MDctLjQ1NiAxLTEuMTgyIDEtMnYtOUEyLjUgMi41IDAgMCAwIDEyLjUgMHpNMyAzYTEgMSAwIDAgMSAxLTFoOGExIDEgMCAwIDEgMSAxdjMuOWMwIC42MjUtLjU2MiAxLjA5Mi0xLjE3Ljk5NEMxMC45MjUgNy43NDcgOS4yMDggNy41IDggNy41cy0yLjkyNS4yNDctMy44My4zOTRBMS4wMDggMS4wMDggMCAwIDEgMyA2Ljl6bTEgOWExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJtOCAwYTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMm0tNS0yaDJhMSAxIDAgMSAxIDAgMkg3YTEgMSAwIDEgMSAwLTIiLz4KPC9zdmc+)*/
const TruckFrontFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="truck-front-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2v-9A2.5 2.5 0 0 0 12.5 0zM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 .625-.562 1.092-1.17.994C10.925 7.747 9.208 7.5 8 7.5s-2.925.247-3.83.394A1.008 1.008 0 0 1 3 6.9zm1 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-5-2h2a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2"/>
</svg>
      )}
    />
  );

export default TruckFrontFill;
