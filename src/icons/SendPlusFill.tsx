import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![send-plus-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuOTY0LjY4NmEuNS41IDAgMCAwLS42NS0uNjVMLjc2NyA1Ljg1NUguNzY2bC0uNDUyLjE4YS41LjUgMCAwIDAtLjA4Mi44ODdsLjQxLjI2LjAwMS4wMDIgNC45OTUgMy4xNzggMS41OSAyLjQ5OEM4IDE0IDggMTMgOCAxMi41YTQuNSA0LjUgMCAwIDEgNS4wMjYtNC40N3ptLTEuODMzIDEuODlMNi42MzcgMTAuMDdsLS4yMTUtLjMzOGEuNS41IDAgMCAwLS4xNTQtLjE1NGwtLjMzOC0uMjE1IDcuNDk0LTcuNDk0IDEuMTc4LS40NzF6Ii8+CiAgPHBhdGggZD0iTTE2IDEyLjVhMy41IDMuNSAwIDEgMS03IDAgMy41IDMuNSAwIDAgMSA3IDBtLTMuNS0yYS41LjUgMCAwIDAtLjUuNXYxaC0xYS41LjUgMCAwIDAgMCAxaDF2MWEuNS41IDAgMCAwIDEgMHYtMWgxYS41LjUgMCAwIDAgMC0xaC0xdi0xYS41LjUgMCAwIDAtLjUtLjUiLz4KPC9zdmc+)*/
const SendPlusFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="send-plus-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"/>
</svg>
      )}
    />
  );

export default SendPlusFill;
