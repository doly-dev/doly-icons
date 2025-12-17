import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![ui-checks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyAyLjVhLjUuNSAwIDAgMSAuNS0uNWg3YS41LjUgMCAwIDEgLjUuNXYxYS41LjUgMCAwIDEtLjUuNWgtN2EuNS41IDAgMCAxLS41LS41ek0yIDFhMiAyIDAgMCAwLTIgMnYyYTIgMiAwIDAgMCAyIDJoMmEyIDIgMCAwIDAgMi0yVjNhMiAyIDAgMCAwLTItMnptMCA4YTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDJhMiAyIDAgMCAwIDItMnYtMmEyIDIgMCAwIDAtMi0yem0uODU0LTMuNjQ2YS41LjUgMCAwIDEtLjcwOCAwbC0xLTFhLjUuNSAwIDEgMSAuNzA4LS43MDhsLjY0Ni42NDcgMS42NDYtMS42NDdhLjUuNSAwIDEgMSAuNzA4LjcwOHptMCA4YS41LjUgMCAwIDEtLjcwOCAwbC0xLTFhLjUuNSAwIDAgMSAuNzA4LS43MDhsLjY0Ni42NDcgMS42NDYtMS42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOHpNNyAxMC41YS41LjUgMCAwIDEgLjUtLjVoN2EuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTdhLjUuNSAwIDAgMS0uNS0uNXptMC01YS41LjUgMCAwIDEgLjUtLjVoNWEuNS41IDAgMCAxIDAgMWgtNWEuNS41IDAgMCAxLS41LS41bTAgOGEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAwIDFoLTVhLjUuNSAwIDAgMS0uNS0uNSIvPgo8L3N2Zz4=)*/
const UiChecks: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="ui-checks"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default UiChecks;
