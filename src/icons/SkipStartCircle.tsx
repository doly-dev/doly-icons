import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-start-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTEwLjIyOSA1LjA1NWEuNS41IDAgMCAwLS41Mi4wMzhMNyA3LjAyOFY1LjVhLjUuNSAwIDAgMC0xIDB2NWEuNS41IDAgMCAwIDEgMFY4Ljk3MmwyLjcxIDEuOTM1YS41LjUgMCAwIDAgLjc5LS40MDd2LTVhLjUuNSAwIDAgMC0uMjcxLS40NDUiLz4KPC9zdmc+)*/
const SkipStartCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-start-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M10.229 5.055a.5.5 0 0 0-.52.038L7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.271-.445"/>
</svg>
      )}
    />
  );

export default SkipStartCircle;
