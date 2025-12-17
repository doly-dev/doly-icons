import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar2-event](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNy41YS41LjUgMCAwIDEgLjUtLjVoMWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTFhLjUuNSAwIDAgMS0uNS0uNXoiLz4KICA8cGF0aCBkPSJNMy41IDBhLjUuNSAwIDAgMSAuNS41VjFoOFYuNWEuNS41IDAgMCAxIDEgMFYxaDFhMiAyIDAgMCAxIDIgMnYxMWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYzYTIgMiAwIDAgMSAyLTJoMVYuNWEuNS41IDAgMCAxIC41LS41TTIgMmExIDEgMCAwIDAtMSAxdjExYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMVYzYTEgMSAwIDAgMC0xLTF6Ii8+CiAgPHBhdGggZD0iTTIuNSA0YS41LjUgMCAwIDEgLjUtLjVoMTBhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41SDNhLjUuNSAwIDAgMS0uNS0uNXoiLz4KPC9zdmc+)*/
const Calendar2Event: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar2-event"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      )}
    />
  );

export default Calendar2Event;
