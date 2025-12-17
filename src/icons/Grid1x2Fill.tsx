import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![grid-1x2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxYTEgMSAwIDAgMSAxLTFoNWExIDEgMCAwIDEgMSAxdjE0YTEgMSAwIDAgMS0xIDFIMWExIDEgMCAwIDEtMS0xem05IDBhMSAxIDAgMCAxIDEtMWg1YTEgMSAwIDAgMSAxIDF2NWExIDEgMCAwIDEtMSAxaC01YTEgMSAwIDAgMS0xLTF6bTAgOWExIDEgMCAwIDEgMS0xaDVhMSAxIDAgMCAxIDEgMXY1YTEgMSAwIDAgMS0xIDFoLTVhMSAxIDAgMCAxLTEtMXoiLz4KPC9zdmc+)*/
const Grid1x2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="grid-1x2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default Grid1x2Fill;
