import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bag-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDcuNWEuNS41IDAgMCAxIC41LjV2MS41SDEwYS41LjUgMCAwIDEgMCAxSDguNVYxMmEuNS41IDAgMCAxLTEgMHYtMS41SDZhLjUuNSAwIDAgMSAwLTFoMS41VjhhLjUuNSAwIDAgMSAuNS0uNSIvPgogIDxwYXRoIGQ9Ik04IDFhMi41IDIuNSAwIDAgMSAyLjUgMi41VjRoLTV2LS41QTIuNSAyLjUgMCAwIDEgOCAxbTMuNSAzdi0uNWEzLjUgMy41IDAgMSAwLTcgMFY0SDF2MTBhMiAyIDAgMCAwIDIgMmgxMGEyIDIgMCAwIDAgMi0yVjR6TTIgNWgxMnY5YTEgMSAwIDAgMS0xIDFIM2ExIDEgMCAwIDEtMS0xeiIvPgo8L3N2Zz4=)*/
const BagPlus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bag-plus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default BagPlus;
