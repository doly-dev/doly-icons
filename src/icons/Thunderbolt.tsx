import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![thunderbolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDdhLjUuNSAwIDAgMC0uNS41djFhLjUuNSAwIDAgMCAuNS41aDlhLjUuNSAwIDAgMCAuNS0uNXYtMWEuNS41IDAgMCAwLS41LS41eiIvPgogIDxwYXRoIGQ9Ik0xIDNhMSAxIDAgMCAwLTEgMXY3LjI5M0ExIDEgMCAwIDAgLjI5MyAxMkwyIDEzLjcwN2ExIDEgMCAwIDAgLjcwNy4yOTNoMTAuNTg2YTEgMSAwIDAgMCAuNzA3LS4yOTNMMTUuNzA3IDEyYTEgMSAwIDAgMCAuMjkzLS43MDdWNGExIDEgMCAwIDAtMS0xem0wIDFoMTR2Ny4yOTNMMTMuMjkzIDEzSDIuNzA3TDEgMTEuMjkzeiIvPgo8L3N2Zz4=)*/
const Thunderbolt: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="thunderbolt"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M1 3a1 1 0 0 0-1 1v7.293A1 1 0 0 0 .293 12L2 13.707a1 1 0 0 0 .707.293h10.586a1 1 0 0 0 .707-.293L15.707 12a1 1 0 0 0 .293-.707V4a1 1 0 0 0-1-1zm0 1h14v7.293L13.293 13H2.707L1 11.293z"/>
</svg>
      )}
    />
  );

export default Thunderbolt;
