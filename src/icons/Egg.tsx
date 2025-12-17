import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![egg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNWE1IDUgMCAwIDEtNS01YzAtMS45NTYuNjktNC4yODYgMS43NDItNi4xMi41MjQtLjkxMyAxLjExMi0xLjY1OCAxLjcwNC0yLjE2NEM3LjA0NCAxLjIwNiA3LjU3MiAxIDggMXMuOTU2LjIwNiAxLjU1NC43MTZjLjU5Mi41MDYgMS4xOCAxLjI1MSAxLjcwNCAyLjE2NEMxMi4zMSA1LjcxNCAxMyA4LjA0NCAxMyAxMGE1IDUgMCAwIDEtNSA1bTAgMWE2IDYgMCAwIDAgNi02YzAtNC4zMTQtMy0xMC02LTEwUzIgNS42ODYgMiAxMGE2IDYgMCAwIDAgNiA2Ii8+Cjwvc3ZnPg==)*/
const Egg: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="egg"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1s.956.206 1.554.716c.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5m0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6"/>
</svg>
      )}
    />
  );

export default Egg;
