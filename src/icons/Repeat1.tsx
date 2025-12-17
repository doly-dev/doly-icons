import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![repeat-1](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNHYxLjQ2NmEuMjUuMjUgMCAwIDAgLjQxLjE5MmwyLjM2LTEuOTY2YS4yNS4yNSAwIDAgMCAwLS4zODRsLTIuMzYtMS45NjZhLjI1LjI1IDAgMCAwLS40MS4xOTJWM0g1YTUgNSAwIDAgMC00LjQ4IDcuMjIzLjUuNSAwIDAgMCAuODk2LS40NDZBNCA0IDAgMCAxIDUgNHptNC40OCAxLjc3N2EuNS41IDAgMCAwLS44OTYuNDQ2QTQgNCAwIDAgMSAxMSAxMkg1LjAwMXYtMS40NjZhLjI1LjI1IDAgMCAwLS40MS0uMTkybC0yLjM2IDEuOTY2YS4yNS4yNSAwIDAgMCAwIC4zODRsMi4zNiAxLjk2NmEuMjUuMjUgMCAwIDAgLjQxLS4xOTJWMTNoNmE1IDUgMCAwIDAgNC40OC03LjIyM1oiLz4KICA8cGF0aCBkPSJNOSA1LjVhLjUuNSAwIDAgMC0uODU0LS4zNTRsLTEuNzUgMS43NWEuNS41IDAgMSAwIC43MDguNzA4TDggNi43MDdWMTAuNWEuNS41IDAgMCAwIDEgMHoiLz4KPC9zdmc+)*/
const Repeat1: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="repeat-1"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 4v1.466a.25.25 0 0 0 .41.192l2.36-1.966a.25.25 0 0 0 0-.384l-2.36-1.966a.25.25 0 0 0-.41.192V3H5a5 5 0 0 0-4.48 7.223.5.5 0 0 0 .896-.446A4 4 0 0 1 5 4zm4.48 1.777a.5.5 0 0 0-.896.446A4 4 0 0 1 11 12H5.001v-1.466a.25.25 0 0 0-.41-.192l-2.36 1.966a.25.25 0 0 0 0 .384l2.36 1.966a.25.25 0 0 0 .41-.192V13h6a5 5 0 0 0 4.48-7.223Z"/>
  <path d="M9 5.5a.5.5 0 0 0-.854-.354l-1.75 1.75a.5.5 0 1 0 .708.708L8 6.707V10.5a.5.5 0 0 0 1 0z"/>
</svg>
      )}
    />
  );

export default Repeat1;
