import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtOCAwIDYuNjEgM2guODlhLjUuNSAwIDAgMSAuNS41djJhLjUuNSAwIDAgMS0uNS41SDE1djdhLjUuNSAwIDAgMSAuNDg1LjM4bC41IDJhLjQ5OC40OTggMCAwIDEtLjQ4NS42MkguNWEuNDk4LjQ5OCAwIDAgMS0uNDg1LS42MmwuNS0yQS41LjUgMCAwIDEgMSAxM1Y2SC41YS41LjUgMCAwIDEtLjUtLjV2LTJBLjUuNSAwIDAgMSAuNSAzaC44OXpNMy43NzcgM2g4LjQ0N0w4IDF6TTIgNnY3aDFWNnptMiAwdjdoMi41VjZ6bTMuNSAwdjdoMVY2em0yIDB2N0gxMlY2ek0xMyA2djdoMVY2em0yLTFWNEgxdjF6bS0uMzkgOUgxLjM5bC0uMjUgMWgxMy43MnoiLz4KPC9zdmc+)*/
const Bank: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bank"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
</svg>
      )}
    />
  );

export default Bank;
