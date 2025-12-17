import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-frown](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTQuMjg1IDEyLjQzM2EuNS41IDAgMCAwIC42ODMtLjE4M0EzLjUgMy41IDAgMCAxIDggMTAuNWMxLjI5NSAwIDIuNDI2LjcwMyAzLjAzMiAxLjc1YS41LjUgMCAwIDAgLjg2Ni0uNUE0LjUgNC41IDAgMCAwIDggOS41YTQuNSA0LjUgMCAwIDAtMy44OTggMi4yNS41LjUgMCAwIDAgLjE4My42ODNNNyA2LjVDNyA3LjMyOCA2LjU1MiA4IDYgOHMtMS0uNjcyLTEtMS41UzUuNDQ4IDUgNiA1czEgLjY3MiAxIDEuNW00IDBjMCAuODI4LS40NDggMS41LTEgMS41cy0xLS42NzItMS0xLjVTOS40NDggNSAxMCA1czEgLjY3MiAxIDEuNSIvPgo8L3N2Zz4=)*/
const EmojiFrown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-frown"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
      )}
    />
  );

export default EmojiFrown;
