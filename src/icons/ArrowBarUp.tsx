import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-bar-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDEwYS41LjUgMCAwIDAgLjUtLjVWMy43MDdsMi4xNDYgMi4xNDdhLjUuNSAwIDAgMCAuNzA4LS43MDhsLTMtM2EuNS41IDAgMCAwLS43MDggMGwtMyAzYS41LjUgMCAxIDAgLjcwOC43MDhMNy41IDMuNzA3VjkuNWEuNS41IDAgMCAwIC41LjVtLTcgMi41YS41LjUgMCAwIDEgLjUtLjVoMTNhLjUuNSAwIDAgMSAwIDFoLTEzYS41LjUgMCAwIDEtLjUtLjUiLz4KPC9zdmc+)*/
const ArrowBarUp: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-bar-up"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default ArrowBarUp;
