import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cup](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0uMTEgMy4xODdBLjUuNSAwIDAgMSAuNSAzaDEzYS41LjUgMCAwIDEgLjQ4OC42MDhsLS4yMi45OTFhMy4wMDEgMy4wMDEgMCAwIDEtMS4zIDUuODU0bC0uMTMyLjU5QTIuNSAyLjUgMCAwIDEgOS44OTYgMTNINC4xMDRhMi41IDIuNSAwIDAgMS0yLjQ0LTEuOTU4TC4wMTIgMy42MDhhLjUuNSAwIDAgMSAuMDk4LS40MlptMTIuNTc0IDYuMjg4YTIgMiAwIDAgMCAuODY2LTMuODk5ek0xLjEyNCA0bDEuNTE2IDYuODI1QTEuNSAxLjUgMCAwIDAgNC4xMDQgMTJoNS43OTJhMS41IDEuNSAwIDAgMCAxLjQ2NC0xLjE3NUwxMi44NzcgNEgxLjEyM1oiLz4KPC9zdmc+)*/
const Cup: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cup"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899zM1.124 4l1.516 6.825A1.5 1.5 0 0 0 4.104 12h5.792a1.5 1.5 0 0 0 1.464-1.175L12.877 4H1.123Z"/>
</svg>
      )}
    />
  );

export default Cup;
