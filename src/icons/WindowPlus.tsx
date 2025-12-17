import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![window-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDVhLjUuNSAwIDEgMCAwLTEgLjUuNSAwIDAgMCAwIDFNNCA1YS41LjUgMCAxIDAgMC0xIC41LjUgMCAwIDAgMCAxbTItLjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDAiLz4KICA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTFhMiAyIDAgMCAxIDIgMnY0YS41LjUgMCAwIDEtMSAwVjdIMXY1YTEgMSAwIDAgMCAxIDFoNS41YS41LjUgMCAwIDEgMCAxSDJhMiAyIDAgMCAxLTItMnptMSAyaDEzVjRhMSAxIDAgMCAwLTEtMUgyYTEgMSAwIDAgMC0xIDF6Ii8+CiAgPHBhdGggZD0iTTE2IDEyLjVhMy41IDMuNSAwIDEgMS03IDAgMy41IDMuNSAwIDAgMSA3IDBtLTMuNS0yYS41LjUgMCAwIDAtLjUuNXYxaC0xYS41LjUgMCAwIDAgMCAxaDF2MWEuNS41IDAgMCAwIDEgMHYtMWgxYS41LjUgMCAwIDAgMC0xaC0xdi0xYS41LjUgMCAwIDAtLjUtLjUiLz4KPC9zdmc+)*/
const WindowPlus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="window-plus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
  <path d="M0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V7H1v5a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2zm1 2h13V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"/>
</svg>
      )}
    />
  );

export default WindowPlus;
