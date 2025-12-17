import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![gender-male](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjUgMmEuNS41IDAgMCAxIDAtMWg1YS41LjUgMCAwIDEgLjUuNXY1YS41LjUgMCAwIDEtMSAwVjIuNzA3TDkuODcxIDYuODM2YTUgNSAwIDEgMS0uNzA3LS43MDdMMTMuMjkzIDJ6TTYgNmE0IDQgMCAxIDAgMCA4IDQgNCAwIDAgMCAwLTgiLz4KPC9zdmc+)*/
const GenderMale: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="gender-male"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/>
</svg>
      )}
    />
  );

export default GenderMale;
