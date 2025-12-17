import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![indent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zIDhhLjUuNSAwIDAgMSAuNS0uNWg2Ljc5M0w4LjE0NiA1LjM1NGEuNS41IDAgMSAxIC43MDgtLjcwOGwzIDNhLjUuNSAwIDAgMSAwIC43MDhsLTMgM2EuNS41IDAgMCAxLS43MDgtLjcwOEwxMC4yOTMgOC41SDMuNUEuNS41IDAgMCAxIDMgOCIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjUgNGEuNS41IDAgMCAxIC41LjV2N2EuNS41IDAgMCAxLTEgMHYtN2EuNS41IDAgMCAxIC41LS41Ii8+Cjwvc3ZnPg==)*/
const Indent: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="indent"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M3 8a.5.5 0 0 1 .5-.5h6.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H3.5A.5.5 0 0 1 3 8"/>
  <path fillRule="evenodd" d="M12.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default Indent;
