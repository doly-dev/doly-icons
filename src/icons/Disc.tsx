import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![disc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTEwIDhhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAwTTggNGE0IDQgMCAwIDAtNCA0IC41LjUgMCAwIDEtMSAwIDUgNSAwIDAgMSA1LTUgLjUuNSAwIDAgMSAwIDFtNC41IDMuNWEuNS41IDAgMCAxIC41LjUgNSA1IDAgMCAxLTUgNSAuNS41IDAgMCAxIDAtMSA0IDQgMCAwIDAgNC00IC41LjUgMCAwIDEgLjUtLjUiLz4KPC9zdmc+)*/
const Disc: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="disc"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1m4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default Disc;
