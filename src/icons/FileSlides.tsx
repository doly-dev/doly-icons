import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-slides](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSA0YS41LjUgMCAwIDAtLjQ5Ni40MzhsLS41IDRBLjUuNSAwIDAgMCA0LjUgOWgzdjIuMDE2Yy0uODYzLjA1NS0xLjUuMjUxLTEuNS40ODQgMCAuMjc2Ljg5NS41IDIgLjVzMi0uMjI0IDItLjVjMC0uMjMzLS42MzctLjQyOS0xLjUtLjQ4NFY5aDNhLjUuNSAwIDAgMCAuNDk2LS41NjJsLS41LTRBLjUuNSAwIDAgMCAxMSA0em0yIDMuNzhWNS4yMmMwLS4wOTYuMTA2LS4xNTYuMTktLjEwNmwyLjEzIDEuMjc5YS4xMjUuMTI1IDAgMCAxIDAgLjIxNGwtMi4xMyAxLjI4QS4xMjUuMTI1IDAgMCAxIDcgNy43Nzh6Ii8+CiAgPHBhdGggZD0iTTIgMmEyIDIgMCAwIDEgMi0yaDhhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMnptMTAtMUg0YTEgMSAwIDAgMC0xIDF2MTJhMSAxIDAgMCAwIDEgMWg4YTEgMSAwIDAgMCAxLTFWMmExIDEgMCAwIDAtMS0xIi8+Cjwvc3ZnPg==)*/
const FileSlides: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-slides"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 4a.5.5 0 0 0-.496.438l-.5 4A.5.5 0 0 0 4.5 9h3v2.016c-.863.055-1.5.251-1.5.484 0 .276.895.5 2 .5s2-.224 2-.5c0-.233-.637-.429-1.5-.484V9h3a.5.5 0 0 0 .496-.562l-.5-4A.5.5 0 0 0 11 4zm2 3.78V5.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 7.778z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
</svg>
      )}
    />
  );

export default FileSlides;
