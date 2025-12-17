import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![credit-card-2-back](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNS41YS41LjUgMCAwIDEgLjUtLjVoMmEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTJhLjUuNSAwIDAgMS0uNS0uNXoiLz4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMC0yIDJ2OGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMi0yem0xMyAydjVIMVY0YTEgMSAwIDAgMSAxLTFoMTJhMSAxIDAgMCAxIDEgMW0tMSA5SDJhMSAxIDAgMCAxLTEtMXYtMWgxNHYxYTEgMSAwIDAgMS0xIDEiLz4KPC9zdmc+)*/
const CreditCard2Back: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="credit-card-2-back"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"/>
</svg>
      )}
    />
  );

export default CreditCard2Back;
