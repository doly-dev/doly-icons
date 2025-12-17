import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![grid-1x2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAxSDF2MTRoNXptOSAwaC01djVoNXptMCA5djVoLTV2LTV6TTAgMWExIDEgMCAwIDEgMS0xaDVhMSAxIDAgMCAxIDEgMXYxNGExIDEgMCAwIDEtMSAxSDFhMSAxIDAgMCAxLTEtMXptOSAwYTEgMSAwIDAgMSAxLTFoNWExIDEgMCAwIDEgMSAxdjVhMSAxIDAgMCAxLTEgMWgtNWExIDEgMCAwIDEtMS0xem0xIDhhMSAxIDAgMCAwLTEgMXY1YTEgMSAwIDAgMCAxIDFoNWExIDEgMCAwIDAgMS0xdi01YTEgMSAwIDAgMC0xLTF6Ii8+Cjwvc3ZnPg==)*/
const Grid1x2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="grid-1x2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 1H1v14h5zm9 0h-5v5h5zm0 9v5h-5v-5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default Grid1x2;
