import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![columns-gap](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAxdjNIMVYxek0xIDBhMSAxIDAgMCAwLTEgMXYzYTEgMSAwIDAgMCAxIDFoNWExIDEgMCAwIDAgMS0xVjFhMSAxIDAgMCAwLTEtMXptMTQgMTJ2M2gtNXYtM3ptLTUtMWExIDEgMCAwIDAtMSAxdjNhMSAxIDAgMCAwIDEgMWg1YTEgMSAwIDAgMCAxLTF2LTNhMSAxIDAgMCAwLTEtMXpNNiA4djdIMVY4ek0xIDdhMSAxIDAgMCAwLTEgMXY3YTEgMSAwIDAgMCAxIDFoNWExIDEgMCAwIDAgMS0xVjhhMSAxIDAgMCAwLTEtMXptMTQtNnY3aC01VjF6bS01LTFhMSAxIDAgMCAwLTEgMXY3YTEgMSAwIDAgMCAxIDFoNWExIDEgMCAwIDAgMS0xVjFhMSAxIDAgMCAwLTEtMXoiLz4KPC9zdmc+)*/
const ColumnsGap: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="columns-gap"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default ColumnsGap;
