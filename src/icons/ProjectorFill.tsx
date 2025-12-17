import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![projector-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiA0YTIgMiAwIDAgMC0yIDJ2M2EyIDIgMCAwIDAgMiAyIDEgMSAwIDAgMCAxIDFoMWExIDEgMCAwIDAgMS0xaDZhMSAxIDAgMCAwIDEgMWgxYTEgMSAwIDAgMCAxLTEgMiAyIDAgMCAwIDItMlY2YTIgMiAwIDAgMC0yLTJ6bS41IDJoNGEuNS41IDAgMCAxIDAgMWgtNGEuNS41IDAgMCAxIDAtMU0xNCA3LjVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDBtLTEyIDFhLjUuNSAwIDAgMSAuNS0uNWg0YS41LjUgMCAwIDEgMCAxaC00YS41LjUgMCAwIDEtLjUtLjUiLz4KPC9zdmc+)*/
const ProjectorFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="projector-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1h6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1M14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-12 1a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default ProjectorFill;
