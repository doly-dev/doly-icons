import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![wrench-adjustable-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi43MDUgOC4xMzlhLjI1LjI1IDAgMCAwLS4yODgtLjM3NmwtMS41LjUuMTU5LjQ3NC44MDgtLjI3LS41OTUuODk0YS4yNS4yNSAwIDAgMCAuMjg3LjM3NmwuODA4LS4yNy0uNTk1Ljg5NGEuMjUuMjUgMCAwIDAgLjI4Ny4zNzZsMS41LS41LS4xNTktLjQ3NC0uODA4LjI3LjU5Ni0uODk0YS4yNS4yNSAwIDAgMC0uMjg4LS4zNzZsLS44MDguMjd6Ii8+CiAgPHBhdGggZD0iTTggMTZBOCA4IDAgMSAwIDggMGE4IDggMCAwIDAgMCAxNm0tNi4yMDItNC43NTEgMS45ODgtMS42NTdhNC41IDQuNSAwIDAgMSA3LjUzNy00LjYyM0w3LjQ5NyA2LjVsMSAyLjUgMS4zMzMgMy4xMWMtLjU2LjI1MS0xLjE4LjM5LTEuODMzLjM5YTQuNSA0LjUgMCAwIDEtMS41OTItLjI5TDQuNzQ3IDE0LjJhNy4wMyA3LjAzIDAgMCAxLTIuOTQ5LTIuOTUxTTEyLjQ5NiA4YTQuNSA0LjUgMCAwIDEtMS43MDMgMy41MjZMOS40OTcgOC41bDIuOTU5LTEuMTFxLjA0LjMuMDQuNjEiLz4KPC9zdmc+)*/
const WrenchAdjustableCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="wrench-adjustable-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.705 8.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m-6.202-4.751 1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2a7.03 7.03 0 0 1-2.949-2.951M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61"/>
</svg>
      )}
    />
  );

export default WrenchAdjustableCircleFill;
