import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-end-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTYuMjcxIDUuMDU1YS41LjUgMCAwIDEgLjUyLjAzOEw5LjUgNy4wMjhWNS41YS41LjUgMCAwIDEgMSAwdjVhLjUuNSAwIDAgMS0xIDBWOC45NzJsLTIuNzEgMS45MzVBLjUuNSAwIDAgMSA2IDEwLjV2LTVhLjUuNSAwIDAgMSAuMjcxLS40NDUiLz4KPC9zdmc+)*/
const SkipEndCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-end-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038L9.5 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>
      )}
    />
  );

export default SkipEndCircle;
