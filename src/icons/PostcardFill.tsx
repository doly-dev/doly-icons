import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![postcard-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgOGgyVjZoLTJ6Ii8+CiAgPHBhdGggZD0iTTAgNGEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptOC41LjVhLjUuNSAwIDAgMC0xIDB2N2EuNS41IDAgMCAwIDEgMHpNMiA1LjVhLjUuNSAwIDAgMCAuNS41SDZhLjUuNSAwIDAgMCAwLTFIMi41YS41LjUgMCAwIDAtLjUuNU0yLjUgN2EuNS41IDAgMCAwIDAgMUg2YS41LjUgMCAwIDAgMC0xek0yIDkuNWEuNS41IDAgMCAwIC41LjVINmEuNS41IDAgMCAwIDAtMUgyLjVhLjUuNSAwIDAgMC0uNS41bTgtNHYzYS41LjUgMCAwIDAgLjUuNWgzYS41LjUgMCAwIDAgLjUtLjV2LTNhLjUuNSAwIDAgMC0uNS0uNWgtM2EuNS41IDAgMCAwLS41LjUiLz4KPC9zdmc+)*/
const PostcardFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="postcard-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 8h2V6h-2z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM2 5.5a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 0-1H2.5a.5.5 0 0 0-.5.5M2.5 7a.5.5 0 0 0 0 1H6a.5.5 0 0 0 0-1zM2 9.5a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 0-1H2.5a.5.5 0 0 0-.5.5m8-4v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5"/>
</svg>
      )}
    />
  );

export default PostcardFill;
