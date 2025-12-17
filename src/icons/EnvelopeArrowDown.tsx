import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY0LjVhLjUuNSAwIDAgMS0xIDBWNS4zODNsLTcgNC4yLTEuMzI2LS43OTUtNS42NCAzLjQ3QTEgMSAwIDAgMCAyIDEzaDUuNWEuNS41IDAgMCAxIDAgMUgyYTIgMiAwIDAgMS0yLTEuOTl6bTEgNy4xMDUgNC43MDgtMi44OTdMMSA1LjM4M3pNMSA0di4yMTdsNyA0LjIgNy00LjJWNGExIDEgMCAwIDAtMS0xSDJhMSAxIDAgMCAwLTEgMSIvPgogIDxwYXRoIGQ9Ik0xMi41IDE2YTMuNSAzLjUgMCAxIDAgMC03IDMuNSAzLjUgMCAwIDAgMCA3bS4zNTQtMS42NDZhLjUuNSAwIDAgMS0uNzIyLS4wMTZsLTEuMTQ5LTEuMjVhLjUuNSAwIDEgMSAuNzM3LS42NzZsLjI4LjMwNVYxMWEuNS41IDAgMCAxIDEgMHYxLjc5M2wuMzk2LS4zOTdhLjUuNSAwIDAgMSAuNzA4LjcwOHoiLz4KPC9zdmc+)*/
const EnvelopeArrowDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-arrow-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"/>
</svg>
      )}
    />
  );

export default EnvelopeArrowDown;
