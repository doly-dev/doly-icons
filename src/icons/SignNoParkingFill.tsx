import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sign-no-parking-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMuMjkyIDE0QTggOCAwIDAgMSAyIDIuNzA3bDMuNSAzLjVWMTJoMS4yODNWOS4xNjRoMS42NzR6bS43MDgtLjcwOC00LjM3LTQuMzdDMTAuNSA4LjUyNCAxMSA3LjY2MiAxMSA2LjU4N2MwLTEuNDgyLS45NTUtMi41ODQtMi41MzgtMi41ODRINS41di43OUwyLjcwOCAyLjAwMkE4IDggMCAwIDEgMTQgMTMuMjkzWiIvPgogIDxwYXRoIGQ9Ik02Ljc3NyA3LjQ4NXYuNTloLjU5em0xLjk0OS41MzVMNi43NzcgNi4wN3YtLjk2Nkg4LjI3Yy44OTMgMCAxLjQxOS41MzkgMS40MTkgMS40ODIgMCAuNzY5LS4zNSAxLjI3My0uOTYzIDEuNDMzWiIvPgo8L3N2Zz4=)*/
const SignNoParkingFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sign-no-parking-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13.292 14A8 8 0 0 1 2 2.707l3.5 3.5V12h1.283V9.164h1.674zm.708-.708-4.37-4.37C10.5 8.524 11 7.662 11 6.587c0-1.482-.955-2.584-2.538-2.584H5.5v.79L2.708 2.002A8 8 0 0 1 14 13.293Z"/>
  <path d="M6.777 7.485v.59h.59zm1.949.535L6.777 6.07v-.966H8.27c.893 0 1.419.539 1.419 1.482 0 .769-.35 1.273-.963 1.433Z"/>
</svg>
      )}
    />
  );

export default SignNoParkingFill;
