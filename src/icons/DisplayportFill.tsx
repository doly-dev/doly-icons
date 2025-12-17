import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![displayport-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSA1YTEgMSAwIDAgMC0xIDF2My4xOTFhMSAxIDAgMCAwIC41NTMuODk0bDEuNjE4LjgxYTEgMSAwIDAgMCAuNDQ3LjEwNUgxNWExIDEgMCAwIDAgMS0xVjZhMSAxIDAgMCAwLTEtMXptMS41IDJoMTFhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0xIDBWOEgzdi41YS41LjUgMCAwIDEtMSAwdi0xYS41LjUgMCAwIDEgLjUtLjUiLz4KPC9zdmc+)*/
const DisplayportFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="displayport-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 5a1 1 0 0 0-1 1v3.191a1 1 0 0 0 .553.894l1.618.81a1 1 0 0 0 .447.105H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm1.5 2h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8H3v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default DisplayportFill;
