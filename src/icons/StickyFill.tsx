import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sticky-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDFBMS41IDEuNSAwIDAgMCAxIDIuNXYxMUExLjUgMS41IDAgMCAwIDIuNSAxNWg2LjA4NmExLjUgMS41IDAgMCAwIDEuMDYtLjQ0bDQuOTE1LTQuOTE0QTEuNSAxLjUgMCAwIDAgMTUgOC41ODZWMi41QTEuNSAxLjUgMCAwIDAgMTMuNSAxem02IDguNWExIDEgMCAwIDEgMS0xaDQuMzk2YS4yNS4yNSAwIDAgMSAuMTc3LjQyN2wtNS4xNDYgNS4xNDZhLjI1LjI1IDAgMCAxLS40MjctLjE3N3oiLz4KPC9zdmc+)*/
const StickyFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sticky-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z"/>
</svg>
      )}
    />
  );

export default StickyFill;
