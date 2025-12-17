import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![paperclip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC41IDNhMi41IDIuNSAwIDAgMSA1IDB2OWExLjUgMS41IDAgMCAxLTMgMFY1YS41LjUgMCAwIDEgMSAwdjdhLjUuNSAwIDAgMCAxIDBWM2ExLjUgMS41IDAgMSAwLTMgMHY5YTIuNSAyLjUgMCAwIDAgNSAwVjVhLjUuNSAwIDAgMSAxIDB2N2EzLjUgMy41IDAgMSAxLTcgMHoiLz4KPC9zdmc+)*/
const Paperclip: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="paperclip"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
</svg>
      )}
    />
  );

export default Paperclip;
