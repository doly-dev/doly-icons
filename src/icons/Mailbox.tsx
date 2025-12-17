import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mailbox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCA0YTMgMyAwIDAgMC0zIDN2Nmg2VjdhMyAzIDAgMCAwLTMtM20wLTFoOGE0IDQgMCAwIDEgNCA0djZhMSAxIDAgMCAxLTEgMUgxYTEgMSAwIDAgMS0xLTFWN2E0IDQgMCAwIDEgNC00bTIuNjQ2IDFBNCA0IDAgMCAxIDggN3Y2aDdWN2EzIDMgMCAwIDAtMy0zeiIvPgogIDxwYXRoIGQ9Ik0xMS43OTMgOC41SDl2LTFoNWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTFhLjUuNSAwIDAgMS0uMzU0LS4xNDZ6TTUgN2MwIC41NTItLjQ0OCAwLTEgMHMtMSAuNTUyLTEgMGExIDEgMCAwIDEgMiAwIi8+Cjwvc3ZnPg==)*/
const Mailbox: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mailbox"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3m0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m2.646 1A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3z"/>
  <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0"/>
</svg>
      )}
    />
  );

export default Mailbox;
