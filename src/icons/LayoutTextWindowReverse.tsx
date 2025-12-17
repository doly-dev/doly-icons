import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![layout-text-window-reverse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMgNi41YS41LjUgMCAwIDAtLjUtLjVoLTVhLjUuNSAwIDAgMCAwIDFoNWEuNS41IDAgMCAwIC41LS41bTAgM2EuNS41IDAgMCAwLS41LS41aC01YS41LjUgMCAwIDAgMCAxaDVhLjUuNSAwIDAgMCAuNS0uNW0tLjUgMi41YS41LjUgMCAwIDEgMCAxaC01YS41LjUgMCAwIDEgMC0xeiIvPgogIDxwYXRoIGQ9Ik0xNCAwYTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWMmEyIDIgMCAwIDEgMi0yek0yIDFhMSAxIDAgMCAwLTEgMXYxaDE0VjJhMSAxIDAgMCAwLTEtMXpNMSA0djEwYTEgMSAwIDAgMCAxIDFoMlY0em00IDB2MTFoOWExIDEgMCAwIDAgMS0xVjR6Ii8+Cjwvc3ZnPg==)*/
const LayoutTextWindowReverse: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="layout-text-window-reverse"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1zM1 4v10a1 1 0 0 0 1 1h2V4zm4 0v11h9a1 1 0 0 0 1-1V4z"/>
</svg>
      )}
    />
  );

export default LayoutTextWindowReverse;
