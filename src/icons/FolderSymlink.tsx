import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![folder-symlink](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtMTEuNzk4IDguMjcxLTMuMTgyIDEuOTdjLS4yNy4xNjYtLjYxNi0uMDM2LS42MTYtLjM3MlY5LjFzLTIuNTcxLS4zLTQgMi40Yy41NzEtNC44IDMuMTQzLTQuOCA0LTQuOHYtLjc2OWMwLS4zMzYuMzQ2LS41MzguNjE2LS4zNzFsMy4xODIgMS45NjljLjI3LjE2Ni4yNy41NzYgMCAuNzQyIi8+CiAgPHBhdGggZD0ibS41IDMgLjA0Ljg3YTIgMiAwIDAgMC0uMzQyIDEuMzExbC42MzcgN0EyIDIgMCAwIDAgMi44MjYgMTRoMTAuMzQ4YTIgMiAwIDAgMCAxLjk5MS0xLjgxOWwuNjM3LTdBMiAyIDAgMCAwIDEzLjgxIDNIOS44MjhhMiAyIDAgMCAxLTEuNDE0LS41ODZsLS44MjgtLjgyOEEyIDIgMCAwIDAgNi4xNzIgMUgyLjVhMiAyIDAgMCAwLTIgMm0uNjk0IDIuMDlBMSAxIDAgMCAxIDIuMTkgNGgxMS42MmExIDEgMCAwIDEgLjk5NiAxLjA5bC0uNjM2IDdhMSAxIDAgMCAxLS45OTYuOTFIMi44MjZhMSAxIDAgMCAxLS45OTUtLjkxek02LjE3MiAyYTEgMSAwIDAgMSAuNzA3LjI5M0w3LjU4NiAzSDIuMTlxLS4zNjIuMDAyLS42ODMuMTJMMS41IDIuOThhMSAxIDAgMCAxIDEtLjk4eiIvPgo8L3N2Zz4=)*/
const FolderSymlink: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="folder-symlink"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m11.798 8.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742"/>
  <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m.694 2.09A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09l-.636 7a1 1 0 0 1-.996.91H2.826a1 1 0 0 1-.995-.91zM6.172 2a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z"/>
</svg>
      )}
    />
  );

export default FolderSymlink;
