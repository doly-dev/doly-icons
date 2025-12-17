import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![lightbulb-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjIzIDQuMzVBNiA2IDAgMCAwIDIgNmMwIDEuNjkxLjcgMy4yMiAxLjgyNiA0LjMxLjIwMy4xOTYuMzU5LjQuNDUzLjYxOWwuNzYyIDEuNzY5QS41LjUgMCAwIDAgNS41IDEzYS41LjUgMCAwIDAgMCAxIC41LjUgMCAwIDAgMCAxbC4yMjQuNDQ3YTEgMSAwIDAgMCAuODk0LjU1M2gyLjc2NGExIDEgMCAwIDAgLjg5NC0uNTUzTDEwLjUgMTVhLjUuNSAwIDAgMCAwLTEgLjUuNSAwIDAgMCAwLTEgLjUuNSAwIDAgMCAuMjg4LS4wOTFMOS44NzggMTJINS44M2wtLjYzMi0xLjQ2N2EzIDMgMCAwIDAtLjY3Ni0uOTQxIDQuOTggNC45OCAwIDAgMS0xLjQ1NS00LjQwNXptMS41ODgtMi42NTMuNzA4LjcwN2E1IDUgMCAwIDEgNy4wNyA3LjA3bC43MDcuNzA3YTYgNiAwIDAgMC04LjQ4NC04LjQ4NHptLTIuMTcyLS4wNTFhLjUuNSAwIDAgMSAuNzA4IDBsMTIgMTJhLjUuNSAwIDAgMS0uNzA4LjcwOGwtMTItMTJhLjUuNSAwIDAgMSAwLS43MDgiLz4KPC9zdmc+)*/
const LightbulbOff: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="lightbulb-off"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2.23 4.35A6 6 0 0 0 2 6c0 1.691.7 3.22 1.826 4.31.203.196.359.4.453.619l.762 1.769A.5.5 0 0 0 5.5 13a.5.5 0 0 0 0 1 .5.5 0 0 0 0 1l.224.447a1 1 0 0 0 .894.553h2.764a1 1 0 0 0 .894-.553L10.5 15a.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .288-.091L9.878 12H5.83l-.632-1.467a3 3 0 0 0-.676-.941 4.98 4.98 0 0 1-1.455-4.405zm1.588-2.653.708.707a5 5 0 0 1 7.07 7.07l.707.707a6 6 0 0 0-8.484-8.484zm-2.172-.051a.5.5 0 0 1 .708 0l12 12a.5.5 0 0 1-.708.708l-12-12a.5.5 0 0 1 0-.708"/>
</svg>
      )}
    />
  );

export default LightbulbOff;
