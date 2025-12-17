import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-angry](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTQuMjg1IDEyLjQzM2EuNS41IDAgMCAwIC42ODMtLjE4M0EzLjUgMy41IDAgMCAxIDggMTAuNWMxLjI5NSAwIDIuNDI2LjcwMyAzLjAzMiAxLjc1YS41LjUgMCAwIDAgLjg2Ni0uNUE0LjUgNC41IDAgMCAwIDggOS41YTQuNSA0LjUgMCAwIDAtMy44OTggMi4yNS41LjUgMCAwIDAgLjE4My42ODNtNi45OTEtOC4zOGEuNS41IDAgMSAxIC40NDguODk0bC0xLjAwOS41MDRjLjE3Ni4yNy4yODUuNjQuMjg1IDEuMDQ5IDAgLjgyOC0uNDQ4IDEuNS0xIDEuNXMtMS0uNjcyLTEtMS41YzAtLjI0Ny4wNC0uNDguMTEtLjY4NmEuNTAyLjUwMiAwIDAgMSAuMTY2LS43NjF6bS02LjU1MiAwYS41LjUgMCAwIDAtLjQ0OC44OTRsMS4wMDkuNTA0QTEuOTQgMS45NCAwIDAgMCA1IDYuNUM1IDcuMzI4IDUuNDQ4IDggNiA4czEtLjY3MiAxLTEuNWMwLS4yNDctLjA0LS40OC0uMTEtLjY4NmEuNTAyLjUwMiAwIDAgMC0uMTY2LS43NjF6Ii8+Cjwvc3ZnPg==)*/
const EmojiAngry: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-angry"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683m6.991-8.38a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5s-1-.672-1-1.5c0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761zm-6.552 0a.5.5 0 0 0-.448.894l1.009.504A1.94 1.94 0 0 0 5 6.5C5 7.328 5.448 8 6 8s1-.672 1-1.5c0-.247-.04-.48-.11-.686a.502.502 0 0 0-.166-.761z"/>
</svg>
      )}
    />
  );

export default EmojiAngry;
