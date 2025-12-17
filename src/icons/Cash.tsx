import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxMGEyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDQiLz4KICA8cGF0aCBkPSJNMCA0YTEgMSAwIDAgMSAxLTFoMTRhMSAxIDAgMCAxIDEgMXY4YTEgMSAwIDAgMS0xIDFIMWExIDEgMCAwIDEtMS0xem0zIDBhMiAyIDAgMCAxLTIgMnY0YTIgMiAwIDAgMSAyIDJoMTBhMiAyIDAgMCAxIDItMlY2YTIgMiAwIDAgMS0yLTJ6Ii8+Cjwvc3ZnPg==)*/
const Cash: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cash"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"/>
</svg>
      )}
    />
  );

export default Cash;
