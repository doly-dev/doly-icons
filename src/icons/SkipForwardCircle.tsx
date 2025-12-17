import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-forward-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTQuMjcxIDUuMDU1YS41LjUgMCAwIDEgLjUyLjAzOEw3LjUgNy4wMjhWNS41YS41LjUgMCAwIDEgLjc5LS40MDdMMTEgNy4wMjhWNS41YS41LjUgMCAwIDEgMSAwdjVhLjUuNSAwIDAgMS0xIDBWOC45NzJsLTIuNzEgMS45MzVhLjUuNSAwIDAgMS0uNzktLjQwN1Y4Ljk3MmwtMi43MSAxLjkzNUEuNS41IDAgMCAxIDQgMTAuNXYtNWEuNS41IDAgMCAxIC4yNzEtLjQ0NSIvPgo8L3N2Zz4=)*/
const SkipForwardCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-forward-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.271 5.055a.5.5 0 0 1 .52.038L7.5 7.028V5.5a.5.5 0 0 1 .79-.407L11 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935a.5.5 0 0 1-.79-.407V8.972l-2.71 1.935A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>
      )}
    />
  );

export default SkipForwardCircle;
