import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![fast-forward-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTQuMjcxIDUuMDU1YS41LjUgMCAwIDEgLjUyLjAzOEw4IDcuMzg2VjUuNWEuNS41IDAgMCAxIC43OS0uNDA3bDMuNSAyLjVhLjUuNSAwIDAgMSAwIC44MTRsLTMuNSAyLjVBLjUuNSAwIDAgMSA4IDEwLjVWOC42MTRsLTMuMjEgMi4yOTNBLjUuNSAwIDAgMSA0IDEwLjV2LTVhLjUuNSAwIDAgMSAuMjcxLS40NDUiLz4KPC9zdmc+)*/
const FastForwardCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="fast-forward-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.271 5.055a.5.5 0 0 1 .52.038L8 7.386V5.5a.5.5 0 0 1 .79-.407l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 8 10.5V8.614l-3.21 2.293A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>
      )}
    />
  );

export default FastForwardCircle;
