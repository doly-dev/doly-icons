import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![fast-forward-btn-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA0djhhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjRhMiAyIDAgMCAwLTItMkgyYTIgMiAwIDAgMC0yIDJtNC4yNzEgMS4wNTVhLjUuNSAwIDAgMSAuNTIuMDM4TDggNy4zODZWNS41YS41LjUgMCAwIDEgLjc5LS40MDdsMy41IDIuNWEuNS41IDAgMCAxIDAgLjgxNGwtMy41IDIuNUEuNS41IDAgMCAxIDggMTAuNVY4LjYxNGwtMy4yMSAyLjI5M0EuNS41IDAgMCAxIDQgMTAuNXYtNWEuNS41IDAgMCAxIC4yNzEtLjQ0NSIvPgo8L3N2Zz4=)*/
const FastForwardBtnFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="fast-forward-btn-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2m4.271 1.055a.5.5 0 0 1 .52.038L8 7.386V5.5a.5.5 0 0 1 .79-.407l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 8 10.5V8.614l-3.21 2.293A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>
      )}
    />
  );

export default FastForwardBtnFill;
