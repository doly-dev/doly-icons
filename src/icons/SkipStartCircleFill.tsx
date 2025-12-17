import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-start-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTkuNzEgNS4wOTMgNyA3LjAyOFY1LjVhLjUuNSAwIDAgMC0xIDB2NWEuNS41IDAgMCAwIDEgMFY4Ljk3MmwyLjcxIDEuOTM1YS41LjUgMCAwIDAgLjc5LS40MDd2LTVhLjUuNSAwIDAgMC0uNzktLjQwNyIvPgo8L3N2Zz4=)*/
const SkipStartCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-start-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.71 5.093 7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.79-.407"/>
</svg>
      )}
    />
  );

export default SkipStartCircleFill;
