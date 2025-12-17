import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cursor-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQuMDgyIDIuMTgyYS41LjUgMCAwIDEgLjEwMy41NTdMOC41MjggMTUuNDY3YS41LjUgMCAwIDEtLjkxNy0uMDA3TDUuNTcgMTAuNjk0LjgwMyA4LjY1MmEuNS41IDAgMCAxLS4wMDYtLjkxNmwxMi43MjgtNS42NTdhLjUuNSAwIDAgMSAuNTU2LjEwM3oiLz4KPC9zdmc+)*/
const CursorFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cursor-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
</svg>
      )}
    />
  );

export default CursorFill;
