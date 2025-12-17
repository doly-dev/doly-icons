import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![headset](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxYTUgNSAwIDAgMC01IDV2MWgxYTEgMSAwIDAgMSAxIDF2M2ExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVY2YTYgNiAwIDEgMSAxMiAwdjZhMi41IDIuNSAwIDAgMS0yLjUgMi41SDkuMzY2YTEgMSAwIDAgMS0uODY2LjVoLTFhMSAxIDAgMSAxIDAtMmgxYTEgMSAwIDAgMSAuODY2LjVIMTEuNUExLjUgMS41IDAgMCAwIDEzIDEyaC0xYTEgMSAwIDAgMS0xLTFWOGExIDEgMCAwIDEgMS0xaDFWNmE1IDUgMCAwIDAtNS01Ii8+Cjwvc3ZnPg==)*/
const Headset: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="headset"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
</svg>
      )}
    />
  );

export default Headset;
