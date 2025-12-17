import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-90deg-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ljg1NCAxNC44NTRhLjUuNSAwIDAgMS0uNzA4IDBsLTQtNGEuNS41IDAgMCAxIC43MDgtLjcwOEw0IDEzLjI5M1YzLjVBMi41IDIuNSAwIDAgMSA2LjUgMWg4YS41LjUgMCAwIDEgMCAxaC04QTEuNSAxLjUgMCAwIDAgNSAzLjV2OS43OTNsMy4xNDYtMy4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOHoiLz4KPC9zdmc+)*/
const Arrow90degDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-90deg-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708z"/>
</svg>
      )}
    />
  );

export default Arrow90degDown;
