import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![send-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuOTY0LjY4NmEuNS41IDAgMCAwLS42NS0uNjVMLjc2NyA1Ljg1NUguNzY2bC0uNDUyLjE4YS41LjUgMCAwIDAtLjA4Mi44ODdsLjQxLjI2LjAwMS4wMDIgNC45OTUgMy4xNzggMy4xNzggNC45OTUuMDAyLjAwMi4yNi40MWEuNS41IDAgMCAwIC44ODYtLjA4M3ptLTEuODMzIDEuODlMNi42MzcgMTAuMDdsLS4yMTUtLjMzOGEuNS41IDAgMCAwLS4xNTQtLjE1NGwtLjMzOC0uMjE1IDcuNDk0LTcuNDk0IDEuMTc4LS40NzF6Ii8+Cjwvc3ZnPg==)*/
const SendFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="send-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg>
      )}
    />
  );

export default SendFill;
