import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![input-cursor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAgNWg0YTEgMSAwIDAgMSAxIDF2NGExIDEgMCAwIDEtMSAxaC00djFoNGEyIDIgMCAwIDAgMi0yVjZhMiAyIDAgMCAwLTItMmgtNHpNNiA1VjRIMmEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0di0xSDJhMSAxIDAgMCAxLTEtMVY2YTEgMSAwIDAgMSAxLTF6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAxYS41LjUgMCAwIDEgLjUuNXYxM2EuNS41IDAgMCAxLTEgMHYtMTNBLjUuNSAwIDAgMSA4IDEiLz4KPC9zdmc+)*/
const InputCursor: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="input-cursor"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>
  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13A.5.5 0 0 1 8 1"/>
</svg>
      )}
    />
  );

export default InputCursor;
