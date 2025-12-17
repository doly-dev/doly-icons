import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![image-alt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyAyLjVhMi41IDIuNSAwIDEgMS01IDAgMi41IDIuNSAwIDAgMSA1IDBtNC4yMjUgNC4wNTNhLjUuNSAwIDAgMC0uNTc3LjA5M2wtMy43MSA0LjcxLTIuNjYtMi43NzJhLjUuNSAwIDAgMC0uNjMuMDYyTC4wMDIgMTN2MmExIDEgMCAwIDAgMSAxaDE0YTEgMSAwIDAgMCAxLTF2LTQuNXoiLz4KPC9zdmc+)*/
const ImageAlt: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="image-alt"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m4.225 4.053a.5.5 0 0 0-.577.093l-3.71 4.71-2.66-2.772a.5.5 0 0 0-.63.062L.002 13v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5z"/>
</svg>
      )}
    />
  );

export default ImageAlt;
