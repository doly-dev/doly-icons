import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![speaker-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOSA0YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG0tMi41IDYuNWExLjUgMS41IDAgMSAxIDMgMCAxLjUgMS41IDAgMCAxLTMgMCIvPgogIDxwYXRoIGQ9Ik00IDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJ6bTYgNGEyIDIgMCAxIDEtNCAwIDIgMiAwIDAgMSA0IDBNOCA3YTMuNSAzLjUgMCAxIDEgMCA3IDMuNSAzLjUgMCAwIDEgMC03Ii8+Cjwvc3ZnPg==)*/
const SpeakerFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="speaker-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"/>
</svg>
      )}
    />
  );

export default SpeakerFill;
