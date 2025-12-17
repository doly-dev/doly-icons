import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![window-desktop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDExYS41LjUgMCAwIDAtLjUuNXYxYS41LjUgMCAwIDAgLjUuNWg5YS41LjUgMCAwIDAgLjUtLjV2LTFhLjUuNSAwIDAgMC0uNS0uNXoiLz4KICA8cGF0aCBkPSJNMi4zNzUgMUEyLjM2NiAyLjM2NiAwIDAgMCAwIDMuMzU3djkuMjg2QTIuMzY2IDIuMzY2IDAgMCAwIDIuMzc1IDE1aDExLjI1QTIuMzY2IDIuMzY2IDAgMCAwIDE2IDEyLjY0M1YzLjM1N0EyLjM2NiAyLjM2NiAwIDAgMCAxMy42MjUgMXpNMSAzLjM1N0MxIDIuNjEyIDEuNjExIDIgMi4zNzUgMmgxMS4yNUMxNC4zODkgMiAxNSAyLjYxMiAxNSAzLjM1N1Y0SDF6TTEgNWgxNHY3LjY0M2MwIC43NDUtLjYxMSAxLjM1Ny0xLjM3NSAxLjM1N0gyLjM3NUExLjM2NiAxLjM2NiAwIDAgMSAxIDEyLjY0M3oiLz4KPC9zdmc+)*/
const WindowDesktop: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="window-desktop"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M2.375 1A2.366 2.366 0 0 0 0 3.357v9.286A2.366 2.366 0 0 0 2.375 15h11.25A2.366 2.366 0 0 0 16 12.643V3.357A2.366 2.366 0 0 0 13.625 1zM1 3.357C1 2.612 1.611 2 2.375 2h11.25C14.389 2 15 2.612 15 3.357V4H1zM1 5h14v7.643c0 .745-.611 1.357-1.375 1.357H2.375A1.366 1.366 0 0 1 1 12.643z"/>
</svg>
      )}
    />
  );

export default WindowDesktop;
