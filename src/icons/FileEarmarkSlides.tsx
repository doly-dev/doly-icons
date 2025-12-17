import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-slides](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSA2YS41LjUgMCAwIDAtLjQ5Ni40MzhsLS41IDRBLjUuNSAwIDAgMCA0LjUgMTFoM3YyLjAxNmMtLjg2My4wNTUtMS41LjI1MS0xLjUuNDg0IDAgLjI3Ni44OTUuNSAyIC41czItLjIyNCAyLS41YzAtLjIzMy0uNjM3LS40MjktMS41LS40ODRWMTFoM2EuNS41IDAgMCAwIC40OTYtLjU2MmwtLjUtNEEuNS41IDAgMCAwIDExIDZ6bTIgMy43OFY3LjIyYzAtLjA5Ni4xMDYtLjE1Ni4xOS0uMTA2bDIuMTMgMS4yNzlhLjEyNS4xMjUgMCAwIDEgMCAuMjE0bC0yLjEzIDEuMjhBLjEyNS4xMjUgMCAwIDEgNyA5Ljc3OHoiLz4KICA8cGF0aCBkPSJNMTQgMTRWNC41TDkuNSAwSDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMk05LjUgM0ExLjUgMS41IDAgMCAwIDExIDQuNWgyVjE0YTEgMSAwIDAgMS0xIDFINGExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMWg1LjV6Ii8+Cjwvc3ZnPg==)*/
const FileEarmarkSlides: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-slides"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 6a.5.5 0 0 0-.496.438l-.5 4A.5.5 0 0 0 4.5 11h3v2.016c-.863.055-1.5.251-1.5.484 0 .276.895.5 2 .5s2-.224 2-.5c0-.233-.637-.429-1.5-.484V11h3a.5.5 0 0 0 .496-.562l-.5-4A.5.5 0 0 0 11 6zm2 3.78V7.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 9.778z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkSlides;
