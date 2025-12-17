import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![folder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNLjU0IDMuODcuNSAzYTIgMiAwIDAgMSAyLTJoMy42NzJhMiAyIDAgMCAxIDEuNDE0LjU4NmwuODI4LjgyOEEyIDIgMCAwIDAgOS44MjggM2gzLjk4MmEyIDIgMCAwIDEgMS45OTIgMi4xODFsLS42MzcgN0EyIDIgMCAwIDEgMTMuMTc0IDE0SDIuODI2YTIgMiAwIDAgMS0xLjk5MS0xLjgxOWwtLjYzNy03YTIgMiAwIDAgMSAuMzQyLTEuMzF6TTIuMTkgNGExIDEgMCAwIDAtLjk5NiAxLjA5bC42MzcgN2ExIDEgMCAwIDAgLjk5NS45MWgxMC4zNDhhMSAxIDAgMCAwIC45OTUtLjkxbC42MzctN0ExIDEgMCAwIDAgMTMuODEgNHptNC42OS0xLjcwN0ExIDEgMCAwIDAgNi4xNzIgMkgyLjVhMSAxIDAgMCAwLTEgLjk4MWwuMDA2LjEzOXEuMzIzLS4xMTkuNjg0LS4xMmg1LjM5NnoiLz4KPC9zdmc+)*/
const Folder: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="folder"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z"/>
</svg>
      )}
    />
  );

export default Folder;
