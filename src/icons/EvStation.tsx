import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![ev-station](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDJhLjUuNSAwIDAgMC0uNS41djVhLjUuNSAwIDAgMCAuNS41aDVhLjUuNSAwIDAgMCAuNS0uNXYtNWEuNS41IDAgMCAwLS41LS41em0yLjEzMSAxMC40Nkg0LjE0di0uODkzaDEuNDAzdi0uNTA1SDQuMTR2LS44NTVoMS40OXYtLjU0SDMuNDg1VjEzaDIuMTQ2em0xLjMxNi41NGguNzk0bDEuMTA2LTMuMzMzaC0uNzMzbC0uNzQgMi42MTVoLS4wMzFsLS43NDctMi42MTVoLS43NjR6Ii8+CiAgPHBhdGggZD0iTTMgMGEyIDIgMCAwIDAtMiAydjEzSC41YS41LjUgMCAwIDAgMCAxaDExYS41LjUgMCAwIDAgMC0xSDExdi00YTEgMSAwIDAgMSAxIDF2LjVhMS41IDEuNSAwIDAgMCAzIDBWNGEuNS41IDAgMCAwLS4xNDYtLjM1NGwtLjUtLjVhLjUuNSAwIDAgMC0uNzA3IDBsLS41LjVBLjUuNSAwIDAgMCAxMyA0djNjMCAuNzEuMzggMS4wOTYuNjM2IDEuMzU3bC4wMDcuMDA4Yy4yNTMuMjU4LjM1Ny4zNzcuMzU3LjYzNXYzLjVhLjUuNSAwIDEgMS0xIDBWMTJhMiAyIDAgMCAwLTItMlYyYTIgMiAwIDAgMC0yLTJ6bTcgMnYxM0gyVjJhMSAxIDAgMCAxIDEtMWg2YTEgMSAwIDAgMSAxIDEiLz4KPC9zdmc+)*/
const EvStation: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="ev-station"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm2.131 10.46H4.14v-.893h1.403v-.505H4.14v-.855h1.49v-.54H3.485V13h2.146zm1.316.54h.794l1.106-3.333h-.733l-.74 2.615h-.031l-.747-2.615h-.764z"/>
  <path d="M3 0a2 2 0 0 0-2 2v13H.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H11v-4a1 1 0 0 1 1 1v.5a1.5 1.5 0 0 0 3 0V4a.5.5 0 0 0-.146-.354l-.5-.5a.5.5 0 0 0-.707 0l-.5.5A.5.5 0 0 0 13 4v3c0 .71.38 1.096.636 1.357l.007.008c.253.258.357.377.357.635v3.5a.5.5 0 1 1-1 0V12a2 2 0 0 0-2-2V2a2 2 0 0 0-2-2zm7 2v13H2V2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
</svg>
      )}
    />
  );

export default EvStation;
