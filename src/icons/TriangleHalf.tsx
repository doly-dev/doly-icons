import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![triangle-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4wNjUgMi4wMTZBLjEzLjEzIDAgMCAwIDguMDAyIDJ2MTEuOTgzbDYuODU2LjAxN2EuMTIuMTIgMCAwIDAgLjA2Ni0uMDE3LjIuMiAwIDAgMCAuMDU0LS4wNi4xOC4xOCAwIDAgMC0uMDAyLS4xODNMOC4xMiAyLjA3M2EuMTUuMTUgMCAwIDAtLjA1NC0uMDU3em0tMS4wNDMtLjQ1YTEuMTMgMS4xMyAwIDAgMSAxLjk2IDBsNi44NTYgMTEuNjY3Yy40NTguNzc4LS4wOTEgMS43NjctLjk4IDEuNzY3SDEuMTQ2Yy0uODg5IDAtMS40MzctLjk5LS45OC0xLjc2N3oiLz4KPC9zdmc+)*/
const TriangleHalf: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="triangle-half"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017.2.2 0 0 0 .054-.06.18.18 0 0 0-.002-.183L8.12 2.073a.15.15 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767z"/>
</svg>
      )}
    />
  );

export default TriangleHalf;
