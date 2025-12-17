import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stop-btn-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxMlY0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0ybTYuNS03QTEuNSAxLjUgMCAwIDAgNSA2LjV2M0ExLjUgMS41IDAgMCAwIDYuNSAxMWgzQTEuNSAxLjUgMCAwIDAgMTEgOS41di0zQTEuNSAxLjUgMCAwIDAgOS41IDV6Ii8+Cjwvc3ZnPg==)*/
const StopBtnFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stop-btn-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.5-7A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5z"/>
</svg>
      )}
    />
  );

export default StopBtnFill;
