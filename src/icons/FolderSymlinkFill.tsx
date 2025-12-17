import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![folder-symlink-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMuODEgM0g5LjgyOGEyIDIgMCAwIDEtMS40MTQtLjU4NmwtLjgyOC0uODI4QTIgMiAwIDAgMCA2LjE3MiAxSDIuNWEyIDIgMCAwIDAtMiAybC4wNC44N2EyIDIgMCAwIDAtLjM0MiAxLjMxMWwuNjM3IDdBMiAyIDAgMCAwIDIuODI2IDE0aDEwLjM0OGEyIDIgMCAwIDAgMS45OTEtMS44MTlsLjYzNy03QTIgMiAwIDAgMCAxMy44MSAzTTIuMTkgM3EtLjM2Mi4wMDItLjY4My4xMkwxLjUgMi45OGExIDEgMCAwIDEgMS0uOThoMy42NzJhMSAxIDAgMCAxIC43MDcuMjkzTDcuNTg2IDN6bTkuNjA4IDUuMjcxLTMuMTgyIDEuOTdjLS4yNy4xNjYtLjYxNi0uMDM2LS42MTYtLjM3MlY5LjFzLTIuNTcxLS4zLTQgMi40Yy41NzEtNC44IDMuMTQzLTQuOCA0LTQuOHYtLjc2OWMwLS4zMzYuMzQ2LS41MzguNjE2LS4zNzFsMy4xODIgMS45NjljLjI3LjE2Ni4yNy41NzYgMCAuNzQyIi8+Cjwvc3ZnPg==)*/
const FolderSymlinkFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="folder-symlink-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2l.04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3M2.19 3q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293L7.586 3zm9.608 5.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742"/>
</svg>
      )}
    />
  );

export default FolderSymlinkFill;
