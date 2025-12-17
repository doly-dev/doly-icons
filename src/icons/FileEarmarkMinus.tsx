import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS41IDlhLjUuNSAwIDAgMSAuNS0uNWg0YS41LjUgMCAwIDEgMCAxSDZhLjUuNSAwIDAgMS0uNS0uNSIvPgogIDxwYXRoIGQ9Ik0xNCA0LjVWMTRhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWMmEyIDIgMCAwIDEgMi0yaDUuNXptLTMgMEExLjUgMS41IDAgMCAxIDkuNSAzVjFINGExIDEgMCAwIDAtMSAxdjEyYTEgMSAwIDAgMCAxIDFoOGExIDEgMCAwIDAgMS0xVjQuNXoiLz4KPC9zdmc+)*/
const FileEarmarkMinus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-minus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.5 9a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkMinus;
