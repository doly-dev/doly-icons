import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDYuNUEuNS41IDAgMCAxIDQgN3YxYTQgNCAwIDAgMCA4IDBWN2EuNS41IDAgMCAxIDEgMHYxYTUgNSAwIDAgMS00LjUgNC45NzVWMTVoM2EuNS41IDAgMCAxIDAgMWgtN2EuNS41IDAgMCAxIDAtMWgzdi0yLjAyNUE1IDUgMCAwIDEgMyA4VjdhLjUuNSAwIDAgMSAuNS0uNSIvPgogIDxwYXRoIGQ9Ik0xMCA4YTIgMiAwIDEgMS00IDBWM2EyIDIgMCAxIDEgNCAwek04IDBhMyAzIDAgMCAwLTMgM3Y1YTMgMyAwIDAgMCA2IDBWM2EzIDMgMCAwIDAtMy0zIi8+Cjwvc3ZnPg==)*/
const Mic: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mic"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
</svg>
      )}
    />
  );

export default Mic;
