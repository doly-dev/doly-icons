import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![ban](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUgOGE2Ljk3IDYuOTcgMCAwIDAtMS43MS00LjU4NGwtOS44NzQgOS44NzVBNyA3IDAgMCAwIDE1IDhNMi43MSAxMi41ODRsOS44NzQtOS44NzVhNyA3IDAgMCAwLTkuODc0IDkuODc0Wk0xNiA4QTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDAiLz4KPC9zdmc+)*/
const Ban: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="ban"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
</svg>
      )}
    />
  );

export default Ban;
