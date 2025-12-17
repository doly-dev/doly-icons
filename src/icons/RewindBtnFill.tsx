import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![rewind-btn-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA0djhhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjRhMiAyIDAgMCAwLTItMkgyYTIgMiAwIDAgMC0yIDJtNy43MjkgMS4wNTVBLjUuNSAwIDAgMSA4IDUuNXYxLjg4NmwzLjIxLTIuMjkzQS41LjUgMCAwIDEgMTIgNS41djVhLjUuNSAwIDAgMS0uNzkuNDA3TDggOC42MTRWMTAuNWEuNS41IDAgMCAxLS43OS40MDdsLTMuNS0yLjVhLjUuNSAwIDAgMSAwLS44MTRsMy41LTIuNWEuNS41IDAgMCAxIC41MTktLjAzOCIvPgo8L3N2Zz4=)*/
const RewindBtnFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="rewind-btn-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2m7.729 1.055A.5.5 0 0 1 8 5.5v1.886l3.21-2.293A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8 8.614V10.5a.5.5 0 0 1-.79.407l-3.5-2.5a.5.5 0 0 1 0-.814l3.5-2.5a.5.5 0 0 1 .519-.038"/>
</svg>
      )}
    />
  );

export default RewindBtnFill;
