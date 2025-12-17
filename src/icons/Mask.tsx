import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi4yMjUgMS4yMjdBNy41IDcuNSAwIDAgMSAxMC41IDhhNy41IDcuNSAwIDAgMS00LjI3NSA2Ljc3MyA3IDcgMCAxIDAgMC0xMy41NDZNNC4xODcuOTY2YTggOCAwIDEgMSA3LjYyNyAxNC4wNjlBOCA4IDAgMCAxIDQuMTg2Ljk2NHoiLz4KPC9zdmc+)*/
const Mask: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mask"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.225 1.227A7.5 7.5 0 0 1 10.5 8a7.5 7.5 0 0 1-4.275 6.773 7 7 0 1 0 0-13.546M4.187.966a8 8 0 1 1 7.627 14.069A8 8 0 0 1 4.186.964z"/>
</svg>
      )}
    />
  );

export default Mask;
