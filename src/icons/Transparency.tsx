import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![transparency](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA2LjVhNi41IDYuNSAwIDAgMSAxMi4zNDYtMi44NDYgNi41IDYuNSAwIDEgMS04LjY5MSA4LjY5MUE2LjUgNi41IDAgMCAxIDAgNi41bTUuMTQ0IDYuMzU4YTUuNSA1LjUgMCAxIDAgNy43MTQtNy43MTQgNi41IDYuNSAwIDAgMS03LjcxNCA3LjcxNG0tLjczMy0xLjI2OXEuNTQ2LjIyNiAxLjE0NC4zM2wtMS40NzQtMS40NzRxLjEwNC41OTcuMzMgMS4xNDRtMi42MTQuMzg2YTUuNSA1LjUgMCAwIDAgMS4xNzMtLjI0Mkw0LjM3NCA3LjkxYTYgNiAwIDAgMC0uMjk2IDEuMTE4em0yLjE1Ny0uNjcycS40NDYtLjI1LjgzOC0uNTc2TDUuNDE4IDYuMTI2YTYgNiAwIDAgMC0uNTg3LjgyNnptMS41NDUtMS4yODRxLjMyNS0uMzkuNTc2LS44MzdMNi45NTMgNC44M2E2IDYgMCAwIDAtLjgyNy41ODdsNC42IDQuNjAyWm0xLjAwNi0xLjgyMnEuMTgzLS41NjIuMjQyLTEuMTcyTDkuMDI4IDQuMDc4cS0uNTguMDk2LTEuMTE4LjI5NmwzLjgyMyAzLjgyNFptLjE4Ni0yLjY0MmE1LjUgNS41IDAgMCAwLS4zMy0xLjE0NCA1LjUgNS41IDAgMCAwLTEuMTQ0LS4zM3oiLz4KPC9zdmc+)*/
const Transparency: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="transparency"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 6.5a6.5 6.5 0 0 1 12.346-2.846 6.5 6.5 0 1 1-8.691 8.691A6.5 6.5 0 0 1 0 6.5m5.144 6.358a5.5 5.5 0 1 0 7.714-7.714 6.5 6.5 0 0 1-7.714 7.714m-.733-1.269q.546.226 1.144.33l-1.474-1.474q.104.597.33 1.144m2.614.386a5.5 5.5 0 0 0 1.173-.242L4.374 7.91a6 6 0 0 0-.296 1.118zm2.157-.672q.446-.25.838-.576L5.418 6.126a6 6 0 0 0-.587.826zm1.545-1.284q.325-.39.576-.837L6.953 4.83a6 6 0 0 0-.827.587l4.6 4.602Zm1.006-1.822q.183-.562.242-1.172L9.028 4.078q-.58.096-1.118.296l3.823 3.824Zm.186-2.642a5.5 5.5 0 0 0-.33-1.144 5.5 5.5 0 0 0-1.144-.33z"/>
</svg>
      )}
    />
  );

export default Transparency;
