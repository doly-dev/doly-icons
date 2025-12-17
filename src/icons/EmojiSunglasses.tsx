import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-sunglasses](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC45NjggOS43NWEuNS41IDAgMSAwLS44NjYuNUE0LjUgNC41IDAgMCAwIDggMTIuNWE0LjUgNC41IDAgMCAwIDMuODk4LTIuMjUuNS41IDAgMSAwLS44NjYtLjVBMy41IDMuNSAwIDAgMSA4IDExLjVhMy41IDMuNSAwIDAgMS0zLjAzMi0xLjc1TTcgNS4xMTZWNWExIDEgMCAwIDAtMS0xSDMuMjhhMSAxIDAgMCAwLS45NyAxLjI0M2wuMzExIDEuMjQyQTIgMiAwIDAgMCA0LjU2MSA4SDVhMiAyIDAgMCAwIDEuOTk0LTEuODM5QTMgMyAwIDAgMSA4IDZjLjM5MyAwIC43NC4wNjQgMS4wMDYuMTYxQTIgMiAwIDAgMCAxMSA4aC40MzhhMiAyIDAgMCAwIDEuOTQtMS41MTVsLjMxMS0xLjI0MkExIDEgMCAwIDAgMTIuNzIgNEgxMGExIDEgMCAwIDAtMSAxdi4xMTZBNC4yIDQuMiAwIDAgMCA4IDVjLS4zNSAwLS42OS4wNC0xIC4xMTYiLz4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwbS0xIDBBNyA3IDAgMSAwIDEgOGE3IDcgMCAwIDAgMTQgMCIvPgo8L3N2Zz4=)*/
const EmojiSunglasses: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-sunglasses"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.5 4.5 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.5 3.5 0 0 1 8 11.5a3.5 3.5 0 0 1-3.032-1.75M7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A3 3 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.2 4.2 0 0 0 8 5c-.35 0-.69.04-1 .116"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0"/>
</svg>
      )}
    />
  );

export default EmojiSunglasses;
