import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![journal-text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSAxMC41YS41LjUgMCAwIDEgLjUtLjVoMmEuNS41IDAgMCAxIDAgMWgtMmEuNS41IDAgMCAxLS41LS41bTAtMmEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAwIDFoLTVhLjUuNSAwIDAgMS0uNS0uNW0wLTJhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgMCAxaC01YS41LjUgMCAwIDEtLjUtLjVtMC0yYS41LjUgMCAwIDEgLjUtLjVoNWEuNS41IDAgMCAxIDAgMWgtNWEuNS41IDAgMCAxLS41LS41Ii8+CiAgPHBhdGggZD0iTTMgMGgxMGEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0ydi0xaDF2MWExIDEgMCAwIDAgMSAxaDEwYTEgMSAwIDAgMCAxLTFWMmExIDEgMCAwIDAtMS0xSDNhMSAxIDAgMCAwLTEgMXYxSDFWMmEyIDIgMCAwIDEgMi0yIi8+CiAgPHBhdGggZD0iTTEgNXYtLjVhLjUuNSAwIDAgMSAxIDBWNWguNWEuNS41IDAgMCAxIDAgMWgtMmEuNS41IDAgMCAxIDAtMXptMCAzdi0uNWEuNS41IDAgMCAxIDEgMFY4aC41YS41LjUgMCAwIDEgMCAxaC0yYS41LjUgMCAwIDEgMC0xem0wIDN2LS41YS41LjUgMCAwIDEgMSAwdi41aC41YS41LjUgMCAwIDEgMCAxaC0yYS41LjUgMCAwIDEgMC0xeiIvPgo8L3N2Zz4=)*/
const JournalText: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="journal-text"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>
      )}
    />
  );

export default JournalText;
