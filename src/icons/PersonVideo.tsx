import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-video](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA5LjA1YTIuNSAyLjUgMCAxIDAgMC01IDIuNSAyLjUgMCAwIDAgMCA1Ii8+CiAgPHBhdGggZD0iTTIgMmEyIDIgMCAwIDAtMiAydjhhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjRhMiAyIDAgMCAwLTItMnptMTAuNzk4IDExYy0uNDUzLTEuMjctMS43Ni0zLTQuNzk4LTMtMy4wMzcgMC00LjM0NSAxLjczLTQuNzk4IDNIMmExIDEgMCAwIDEtMS0xVjRhMSAxIDAgMCAxIDEtMWgxMmExIDEgMCAwIDEgMSAxdjhhMSAxIDAgMCAxLTEgMXoiLz4KPC9zdmc+)*/
const PersonVideo: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-video"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"/>
</svg>
      )}
    />
  );

export default PersonVideo;
