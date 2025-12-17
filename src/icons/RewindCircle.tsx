import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![rewind-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy43MjkgNS4wNTVhLjUuNSAwIDAgMC0uNTIuMDM4bC0zLjUgMi41YS41LjUgMCAwIDAgMCAuODE0bDMuNSAyLjVBLjUuNSAwIDAgMCA4IDEwLjVWOC42MTRsMy4yMSAyLjI5M0EuNS41IDAgMCAwIDEyIDEwLjV2LTVhLjUuNSAwIDAgMC0uNzktLjQwN0w4IDcuMzg2VjUuNWEuNS41IDAgMCAwLS4yNzEtLjQ0NSIvPgogIDxwYXRoIGQ9Ik0xNiA4QTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDBNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDgiLz4KPC9zdmc+)*/
const RewindCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="rewind-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.729 5.055a.5.5 0 0 0-.52.038l-3.5 2.5a.5.5 0 0 0 0 .814l3.5 2.5A.5.5 0 0 0 8 10.5V8.614l3.21 2.293A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.79-.407L8 7.386V5.5a.5.5 0 0 0-.271-.445"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
</svg>
      )}
    />
  );

export default RewindCircle;
