import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![credit-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yem0yLTFhMSAxIDAgMCAwLTEgMXYxaDE0VjRhMSAxIDAgMCAwLTEtMXptMTMgNEgxdjVhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xeiIvPgogIDxwYXRoIGQ9Ik0yIDEwYTEgMSAwIDAgMSAxLTFoMWExIDEgMCAwIDEgMSAxdjFhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTF6Ii8+Cjwvc3ZnPg==)*/
const CreditCard: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="credit-card"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default CreditCard;
