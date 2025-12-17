import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-end-btn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi43OSA1LjA5MyA5LjUgNy4wMjhWNS41YS41LjUgMCAwIDEgMSAwdjVhLjUuNSAwIDAgMS0xIDBWOC45NzJsLTIuNzEgMS45MzVBLjUuNSAwIDAgMSA2IDEwLjV2LTVhLjUuNSAwIDAgMSAuNzktLjQwNyIvPgogIDxwYXRoIGQ9Ik0wIDRhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ6bTE1IDBhMSAxIDAgMCAwLTEtMUgyYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF6Ii8+Cjwvc3ZnPg==)*/
const SkipEndBtn: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-end-btn"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.79 5.093 9.5 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .79-.407"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default SkipEndBtn;
