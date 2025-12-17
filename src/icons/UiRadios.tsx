import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![ui-radios](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyAyLjVhLjUuNSAwIDAgMSAuNS0uNWg3YS41LjUgMCAwIDEgLjUuNXYxYS41LjUgMCAwIDEtLjUuNWgtN2EuNS41IDAgMCAxLS41LS41ek0wIDEyYTMgMyAwIDEgMSA2IDAgMyAzIDAgMCAxLTYgMG03LTEuNWEuNS41IDAgMCAxIC41LS41aDdhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41aC03YS41LjUgMCAwIDEtLjUtLjV6bTAtNWEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAwIDFoLTVhLjUuNSAwIDAgMS0uNS0uNW0wIDhhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgMCAxaC01YS41LjUgMCAwIDEtLjUtLjVNMyAxYTMgMyAwIDEgMCAwIDYgMyAzIDAgMCAwIDAtNm0wIDQuNWExLjUgMS41IDAgMSAxIDAtMyAxLjUgMS41IDAgMCAxIDAgMyIvPgo8L3N2Zz4=)*/
const UiRadios: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="ui-radios"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0m7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>
      )}
    />
  );

export default UiRadios;
