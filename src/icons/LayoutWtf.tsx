import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![layout-wtf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSAxdjhIMVYxek0xIDBhMSAxIDAgMCAwLTEgMXY4YTEgMSAwIDAgMCAxIDFoNGExIDEgMCAwIDAgMS0xVjFhMSAxIDAgMCAwLTEtMXptMTMgMnY1SDlWMnpNOSAxYTEgMSAwIDAgMC0xIDF2NWExIDEgMCAwIDAgMSAxaDVhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTF6TTUgMTN2Mkgzdi0yem0tMi0xYTEgMSAwIDAgMC0xIDF2MmExIDEgMCAwIDAgMSAxaDJhMSAxIDAgMCAwIDEtMXYtMmExIDEgMCAwIDAtMS0xem0xMi0xdjJIOXYtMnptLTYtMWExIDEgMCAwIDAtMSAxdjJhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTJhMSAxIDAgMCAwLTEtMXoiLz4KPC9zdmc+)*/
const LayoutWtf: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="layout-wtf"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 1v8H1V1zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm13 2v5H9V2zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 13v2H3v-2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm12-1v2H9v-2zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default LayoutWtf;
