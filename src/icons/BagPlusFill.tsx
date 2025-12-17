import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bag-plus-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC41IDMuNWEyLjUgMi41IDAgMCAwLTUgMFY0aDV6bTEgMFY0SDE1djEwYTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0yVjRoMy41di0uNWEzLjUgMy41IDAgMSAxIDcgME04LjUgOGEuNS41IDAgMCAwLTEgMHYxLjVINmEuNS41IDAgMCAwIDAgMWgxLjVWMTJhLjUuNSAwIDAgMCAxIDB2LTEuNUgxMGEuNS41IDAgMCAwIDAtMUg4LjV6Ii8+Cjwvc3ZnPg==)*/
const BagPlusFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bag-plus-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"/>
</svg>
      )}
    />
  );

export default BagPlusFill;
