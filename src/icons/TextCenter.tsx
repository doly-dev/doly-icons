import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![text-center](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDEyLjVhLjUuNSAwIDAgMSAuNS0uNWg3YS41LjUgMCAwIDEgMCAxaC03YS41LjUgMCAwIDEtLjUtLjVtLTItM2EuNS41IDAgMCAxIC41LS41aDExYS41LjUgMCAwIDEgMCAxaC0xMWEuNS41IDAgMCAxLS41LS41bTItM2EuNS41IDAgMCAxIC41LS41aDdhLjUuNSAwIDAgMSAwIDFoLTdhLjUuNSAwIDAgMS0uNS0uNW0tMi0zYS41LjUgMCAwIDEgLjUtLjVoMTFhLjUuNSAwIDAgMSAwIDFoLTExYS41LjUgMCAwIDEtLjUtLjUiLz4KPC9zdmc+)*/
const TextCenter: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="text-center"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default TextCenter;
