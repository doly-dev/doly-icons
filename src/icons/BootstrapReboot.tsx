import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bootstrap-reboot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS4xNjEgOGE2Ljg0IDYuODQgMCAxIDAgNi44NDItNi44NC41OC41OCAwIDEgMSAwLTEuMTYgOCA4IDAgMSAxLTYuNTU2IDMuNDEybC0uNjYzLS41NzdhLjU4LjU4IDAgMCAxIC4yMjctLjk5N2wyLjUyLS42OWEuNTguNTggMCAwIDEgLjcyOC42MzNsLS4zMzIgMi41OTJhLjU4LjU4IDAgMCAxLS45NTYuMzY0bC0uNjQzLS41NkE2LjggNi44IDAgMCAwIDEuMTYgOHoiLz4KICA8cGF0aCBkPSJNNi42NDEgMTEuNjcxVjguODQzaDEuNTdsMS40OTggMi44MjhoMS4zMTRMOS4zNzcgOC42NjVjLjg5Ny0uMyAxLjQyNy0xLjEwNiAxLjQyNy0yLjEgMC0xLjM3LS45NDMtMi4yNDYtMi40NTYtMi4yNDZINS41djcuMzUyem0wLTMuNzVWNS4yNzdoMS41N2MuODgxIDAgMS40MTYuNDk5IDEuNDE2IDEuMzIgMCAuODQtLjUwNCAxLjMyNC0xLjM4NiAxLjMyNHoiLz4KPC9zdmc+)*/
const BootstrapReboot: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bootstrap-reboot"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.8 6.8 0 0 0 1.16 8z"/>
  <path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324z"/>
</svg>
      )}
    />
  );

export default BootstrapReboot;
