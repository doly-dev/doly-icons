import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cash-stack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSAzYTEgMSAwIDAgMSAxLTFoMTJhMSAxIDAgMCAxIDEgMXptNyA4YTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNCIvPgogIDxwYXRoIGQ9Ik0wIDVhMSAxIDAgMCAxIDEtMWgxNGExIDEgMCAwIDEgMSAxdjhhMSAxIDAgMCAxLTEgMUgxYTEgMSAwIDAgMS0xLTF6bTMgMGEyIDIgMCAwIDEtMiAydjRhMiAyIDAgMCAxIDIgMmgxMGEyIDIgMCAwIDEgMi0yVjdhMiAyIDAgMCAxLTItMnoiLz4KPC9zdmc+)*/
const CashStack: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cash-stack"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"/>
</svg>
      )}
    />
  );

export default CashStack;
