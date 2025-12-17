import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-wc-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yem0xMS42NjYgMS44OWMuNjgyIDAgMS4xMzkuNDcgMS4xODcgMS4xMDdIMTR2LS4xMWMtLjA1My0xLjE4Ny0xLjAyNC0yLTIuMzQyLTItMS42MDQgMC0yLjUxOCAxLjA1LTIuNTE4IDIuNzUxdi43NDdjMCAxLjcuOTA1IDIuNzMgMi41MTggMi43MyAxLjMxNCAwIDIuMjg1LS43OTIgMi4zNDItMS45Mzl2LS4xMTRoLTEuMTQ3Yy0uMDQ4LjYxNS0uNDk3IDEuMDUtMS4xODcgMS4wNS0uODM5IDAtMS4zMTgtLjYyLTEuMzE4LTEuNzI3di0uNzQyYzAtMS4xMTIuNDg4LTEuNzU0IDEuMzE4LTEuNzU0em0tNi4xODguOTI2aC4wNDRMNi41NDIgMTFoMS4wMDZMOSA1LjAwMUg3LjgxOGwtLjgyIDQuMzU1aC0uMDU2TDUuOTcgNS4wMDFoLS45NGwtLjk3MiA0LjM1NWgtLjA1M2wtLjgyNy00LjM1NUgyTDMuNDUyIDExaDEuMDA1eiIvPgo8L3N2Zz4=)*/
const BadgeWcFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-wc-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005z"/>
</svg>
      )}
    />
  );

export default BadgeWcFill;
