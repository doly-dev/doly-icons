import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![volume-up-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuNTM2IDE0LjAxQTguNDcgOC40NyAwIDAgMCAxNC4wMjYgOGE4LjQ3IDguNDcgMCAwIDAtMi40OS02LjAxbC0uNzA4LjcwN0E3LjQ4IDcuNDggMCAwIDEgMTMuMDI1IDhjMCAyLjA3MS0uODQgMy45NDYtMi4xOTcgNS4zMDN6Ii8+CiAgPHBhdGggZD0iTTEwLjEyMSAxMi41OTZBNi40OCA2LjQ4IDAgMCAwIDEyLjAyNSA4YTYuNDggNi40OCAwIDAgMC0xLjkwNC00LjU5NmwtLjcwNy43MDdBNS40OCA1LjQ4IDAgMCAxIDExLjAyNSA4YTUuNDggNS40OCAwIDAgMS0xLjYxIDMuODl6Ii8+CiAgPHBhdGggZD0iTTguNzA3IDExLjE4MkE0LjUgNC41IDAgMCAwIDEwLjAyNSA4YTQuNSA0LjUgMCAwIDAtMS4zMTgtMy4xODJMOCA1LjUyNUEzLjUgMy41IDAgMCAxIDkuMDI1IDggMy41IDMuNSAwIDAgMSA4IDEwLjQ3NXpNNi43MTcgMy41NUEuNS41IDAgMCAxIDcgNHY4YS41LjUgMCAwIDEtLjgxMi4zOUwzLjgyNSAxMC41SDEuNUEuNS41IDAgMCAxIDEgMTBWNmEuNS41IDAgMCAxIC41LS41aDIuMzI1bDIuMzYzLTEuODlhLjUuNSAwIDAgMSAuNTI5LS4wNiIvPgo8L3N2Zz4=)*/
const VolumeUpFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="volume-up-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
  <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
</svg>
      )}
    />
  );

export default VolumeUpFill;
