import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![unlock-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAwYTQgNCAwIDAgMSA0IDR2Mi41aC0xVjRhMyAzIDAgMSAwLTYgMHYyaC41QTIuNSAyLjUgMCAwIDEgMTIgOC41djVBMi41IDIuNSAwIDAgMSA5LjUgMTZoLTdBMi41IDIuNSAwIDAgMSAwIDEzLjV2LTVBMi41IDIuNSAwIDAgMSAyLjUgNkg4VjRhNCA0IDAgMCAxIDQtNCIvPgo8L3N2Zz4=)*/
const UnlockFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="unlock-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M12 0a4 4 0 0 1 4 4v2.5h-1V4a3 3 0 1 0-6 0v2h.5A2.5 2.5 0 0 1 12 8.5v5A2.5 2.5 0 0 1 9.5 16h-7A2.5 2.5 0 0 1 0 13.5v-5A2.5 2.5 0 0 1 2.5 6H8V4a4 4 0 0 1 4-4"/>
</svg>
      )}
    />
  );

export default UnlockFill;
