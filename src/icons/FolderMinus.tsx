import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![folder-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtLjUgMyAuMDQuODdhMiAyIDAgMCAwLS4zNDIgMS4zMTFsLjYzNyA3QTIgMiAwIDAgMCAyLjgyNiAxNEg5di0xSDIuODI2YTEgMSAwIDAgMS0uOTk1LS45MWwtLjYzNy03QTEgMSAwIDAgMSAyLjE5IDRoMTEuNjJhMSAxIDAgMCAxIC45OTYgMS4wOUwxNC41NCA4aDEuMDA1bC4yNTYtMi44MTlBMiAyIDAgMCAwIDEzLjgxIDNIOS44MjhhMiAyIDAgMCAxLTEuNDE0LS41ODZsLS44MjgtLjgyOEEyIDIgMCAwIDAgNi4xNzIgMUgyLjVhMiAyIDAgMCAwLTIgMm01LjY3Mi0xYTEgMSAwIDAgMSAuNzA3LjI5M0w3LjU4NiAzSDIuMTlxLS4zNjIuMDAyLS42ODMuMTJMMS41IDIuOThhMSAxIDAgMCAxIDEtLjk4eiIvPgogIDxwYXRoIGQ9Ik0xMSAxMS41YS41LjUgMCAwIDEgLjUtLjVoNGEuNS41IDAgMSAxIDAgMWgtNGEuNS41IDAgMCAxLS41LS41Ii8+Cjwvc3ZnPg==)*/
const FolderMinus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="folder-minus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z"/>
  <path d="M11 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default FolderMinus;
