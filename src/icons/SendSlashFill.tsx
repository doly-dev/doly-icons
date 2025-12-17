import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![send-slash-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuOTY0LjY4NmEuNS41IDAgMCAwLS42NS0uNjVMLjc2NyA1Ljg1NUguNzY2bC0uNDUyLjE4YS41LjUgMCAwIDAtLjA4Mi44ODdsLjQxLjI2LjAwMS4wMDIgNC45OTUgMy4xNzggMS41OSAyLjQ5OEM4IDE0IDggMTMgOCAxMi41YTQuNSA0LjUgMCAwIDEgNS4wMjYtNC40N3ptLTEuODMzIDEuODlMNi42MzcgMTAuMDdsLS4yMTUtLjMzOGEuNS41IDAgMCAwLS4xNTQtLjE1NGwtLjMzOC0uMjE1IDcuNDk0LTcuNDk0IDEuMTc4LS40NzF6Ii8+CiAgPHBhdGggZD0iTTE0Ljk3NSAxMC4wMjVhMy41IDMuNSAwIDEgMC00Ljk1IDQuOTUgMy41IDMuNSAwIDAgMCA0Ljk1LTQuOTVtLTQuMjQzLjcwN2EyLjUgMi41IDAgMCAxIDMuMTQ3LS4zMThsLTMuNDY1IDMuNDY1YTIuNSAyLjUgMCAwIDEgLjMxOC0zLjE0N20uMzkgMy44NTQgMy40NjQtMy40NjVhMi41MDEgMi41MDEgMCAwIDEtMy40NjUgMy40NjVaIi8+Cjwvc3ZnPg==)*/
const SendSlashFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="send-slash-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
  <path d="M14.975 10.025a3.5 3.5 0 1 0-4.95 4.95 3.5 3.5 0 0 0 4.95-4.95m-4.243.707a2.5 2.5 0 0 1 3.147-.318l-3.465 3.465a2.5 2.5 0 0 1 .318-3.147m.39 3.854 3.464-3.465a2.501 2.501 0 0 1-3.465 3.465Z"/>
</svg>
      )}
    />
  );

export default SendSlashFill;
