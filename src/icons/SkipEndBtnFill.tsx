import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-end-btn-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxMlY0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0ybTYuNzktNi45MDdBLjUuNSAwIDAgMCA2IDUuNXY1YS41LjUgMCAwIDAgLjc5LjQwN0w5LjUgOC45NzJWMTAuNWEuNS41IDAgMCAwIDEgMHYtNWEuNS41IDAgMCAwLTEgMHYxLjUyOHoiLz4KPC9zdmc+)*/
const SkipEndBtnFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-end-btn-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407L9.5 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528z"/>
</svg>
      )}
    />
  );

export default SkipEndBtnFill;
