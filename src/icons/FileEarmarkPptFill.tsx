import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-ppt-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4xODggMTBIN1Y2LjVoMS4xODhhMS43NSAxLjc1IDAgMSAxIDAgMy41Ii8+CiAgPHBhdGggZD0iTTQgMGg1LjI5M0ExIDEgMCAwIDEgMTAgLjI5M0wxMy43MDcgNGExIDEgMCAwIDEgLjI5My43MDdWMTRhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWMmEyIDIgMCAwIDEgMi0ybTUuNSAxLjV2MmExIDEgMCAwIDAgMSAxaDJ6TTcgNS41YTEgMSAwIDAgMC0xIDFWMTNhLjUuNSAwIDAgMCAxIDB2LTJoMS4xODhhMi43NSAyLjc1IDAgMCAwIDAtNS41eiIvPgo8L3N2Zz4=)*/
const FileEarmarkPptFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-ppt-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5"/>
  <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkPptFill;
