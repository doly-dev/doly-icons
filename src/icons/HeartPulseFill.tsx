import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![heart-pulse-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS40NzUgOUMyLjcwMiAxMC44NCA0Ljc3OSAxMi44NzEgOCAxNWMzLjIyMS0yLjEyOSA1LjI5OC00LjE2IDYuNTI1LTZIMTJhLjUuNSAwIDAgMS0uNDY0LS4zMTRsLTEuNDU3LTMuNjQyLTEuNTk4IDUuNTkzYS41LjUgMCAwIDEtLjk0NS4wNDlMNS44ODkgNi41NjhsLTEuNDczIDIuMjFBLjUuNSAwIDAgMSA0IDl6Ii8+CiAgPHBhdGggZD0iTS44OCA4Qy0yLjQyNyAxLjY4IDQuNDEtMiA3LjgyMyAxLjE0M3EuMDkuMDgzLjE3Ni4xNzFhMyAzIDAgMCAxIC4xNzYtLjE3QzExLjU5LTIgMTguNDI2IDEuNjggMTUuMTIgOGgtMi43ODNsLTEuODc0LTQuNjg2YS41LjUgMCAwIDAtLjk0NS4wNDlMNy45MjEgOC45NTYgNi40NjQgNS4zMTRhLjUuNSAwIDAgMC0uODgtLjA5MUwzLjczMiA4eiIvPgo8L3N2Zz4=)*/
const HeartPulseFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="heart-pulse-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z"/>
  <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z"/>
</svg>
      )}
    />
  );

export default HeartPulseFill;
