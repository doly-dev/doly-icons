import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-start-btn-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxMlY0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0ybTkuNzEtNi45MDdMNyA3LjAyOFY1LjVhLjUuNSAwIDAgMC0xIDB2NWEuNS41IDAgMCAwIDEgMFY4Ljk3MmwyLjcxIDEuOTM1YS41LjUgMCAwIDAgLjc5LS40MDd2LTVhLjUuNSAwIDAgMC0uNzktLjQwNyIvPgo8L3N2Zz4=)*/
const SkipStartBtnFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-start-btn-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m9.71-6.907L7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.79-.407"/>
</svg>
      )}
    />
  );

export default SkipStartBtnFill;
