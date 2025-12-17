import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![fuel-pump](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyAyLjVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXY1YS41LjUgMCAwIDEtLjUuNWgtNWEuNS41IDAgMCAxLS41LS41eiIvPgogIDxwYXRoIGQ9Ik0xIDJhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEgMiAydi41YS41LjUgMCAwIDAgMSAwVjhoLS41YS41LjUgMCAwIDEtLjUtLjVWNC4zNzVhLjUuNSAwIDAgMSAuNS0uNWgxLjQ5NWMtLjAxMS0uNDc2LS4wNTMtLjg5NC0uMjAxLTEuMjIyYS45Ny45NyAwIDAgMC0uMzk0LS40NThjLS4xODQtLjExLS40NjQtLjE5NS0uOS0uMTk1YS41LjUgMCAwIDEgMC0xcS44NDYtLjAwMiAxLjQxMi4zMzZjLjM4My4yMjguNjM0LjU1MS43OTQuOTA3LjI5NS42NTUuMjk0IDEuNDY1LjI5NCAyLjA4MXYzLjE3NWEuNS41IDAgMCAxLS41LjUwMUgxNXY0LjVhMS41IDEuNSAwIDAgMS0zIDBWMTJhMSAxIDAgMCAwLTEtMXY0aC41YS41LjUgMCAwIDEgMCAxSC41YS41LjUgMCAwIDEgMC0xSDF6bTkgMGExIDEgMCAwIDAtMS0xSDNhMSAxIDAgMCAwLTEgMXYxM2g4eiIvPgo8L3N2Zz4=)*/
const FuelPump: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="fuel-pump"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"/>
  <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8z"/>
</svg>
      )}
    />
  );

export default FuelPump;
