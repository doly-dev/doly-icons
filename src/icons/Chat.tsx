import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi42NzggMTEuODk0YTEgMSAwIDAgMSAuMjg3LjgwMSAxMSAxMSAwIDAgMS0uMzk4IDJjMS4zOTUtLjMyMyAyLjI0Ny0uNjk3IDIuNjM0LS44OTNhMSAxIDAgMCAxIC43MS0uMDc0QTggOCAwIDAgMCA4IDE0YzMuOTk2IDAgNy0yLjgwNyA3LTZzLTMuMDA0LTYtNy02LTcgMi44MDgtNyA2YzAgMS40NjguNjE3IDIuODMgMS42NzggMy44OTRtLS40OTMgMy45MDVhMjIgMjIgMCAwIDEtLjcxMy4xMjljLS4yLjAzMi0uMzUyLS4xNzYtLjI3My0uMzYyYTEwIDEwIDAgMCAwIC4yNDQtLjYzN2wuMDAzLS4wMWMuMjQ4LS43Mi40NS0xLjU0OC41MjQtMi4zMTlDLjc0MyAxMS4zNyAwIDkuNzYgMCA4YzAtMy44NjYgMy41ODItNyA4LTdzOCAzLjEzNCA4IDctMy41ODIgNy04IDdhOSA5IDAgMCAxLTIuMzQ3LS4zMDZjLS41Mi4yNjMtMS42MzkuNzQyLTMuNDY4IDEuMTA1Ii8+Cjwvc3ZnPg==)*/
const Chat: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
</svg>
      )}
    />
  );

export default Chat;
