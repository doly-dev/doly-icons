import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![prescription](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS41IDZhLjUuNSAwIDAgMC0uNS41djRhLjUuNSAwIDAgMCAxIDBWOWguMjkzbDIgMi0xLjE0NyAxLjE0NmEuNS41IDAgMCAwIC43MDguNzA4TDkgMTEuNzA3bDEuMTQ2IDEuMTQ3YS41LjUgMCAwIDAgLjcwOC0uNzA4TDkuNzA3IDExbDEuMTQ3LTEuMTQ2YS41LjUgMCAwIDAtLjcwOC0uNzA4TDkgMTAuMjkzIDcuNjk1IDguOTg3QTEuNSAxLjUgMCAwIDAgNy41IDZ6TTYgN2gxLjVhLjUuNSAwIDAgMSAwIDFINnoiLz4KICA8cGF0aCBkPSJNMiAxYTEgMSAwIDAgMSAxLTFoMTBhMSAxIDAgMCAxIDEgMXYyYTEgMSAwIDAgMS0xIDF2MTAuNWExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTdBMS41IDEuNSAwIDAgMSAzIDE0LjVWNGExIDEgMCAwIDEtMS0xem0yIDN2MTAuNWEuNS41IDAgMCAwIC41LjVoN2EuNS41IDAgMCAwIC41LS41VjR6TTMgM2gxMFYxSDN6Ii8+Cjwvc3ZnPg==)*/
const Prescription: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="prescription"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.5 6a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V9h.293l2 2-1.147 1.146a.5.5 0 0 0 .708.708L9 11.707l1.146 1.147a.5.5 0 0 0 .708-.708L9.707 11l1.147-1.146a.5.5 0 0 0-.708-.708L9 10.293 7.695 8.987A1.5 1.5 0 0 0 7.5 6zM6 7h1.5a.5.5 0 0 1 0 1H6z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM3 3h10V1H3z"/>
</svg>
      )}
    />
  );

export default Prescription;
