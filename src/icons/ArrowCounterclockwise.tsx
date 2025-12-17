import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-counterclockwise](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDNhNSA1IDAgMSAxLTQuNTQ2IDIuOTE0LjUuNSAwIDAgMC0uOTA4LS40MTdBNiA2IDAgMSAwIDggMnoiLz4KICA8cGF0aCBkPSJNOCA0LjQ2NlYuNTM0YS4yNS4yNSAwIDAgMC0uNDEtLjE5Mkw1LjIzIDIuMzA4YS4yNS4yNSAwIDAgMCAwIC4zODRsMi4zNiAxLjk2NkEuMjUuMjUgMCAwIDAgOCA0LjQ2NiIvPgo8L3N2Zz4=)*/
const ArrowCounterclockwise: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-counterclockwise"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg>
      )}
    />
  );

export default ArrowCounterclockwise;
