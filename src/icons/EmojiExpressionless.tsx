import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-expressionless](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTQgMTAuNWEuNS41IDAgMCAxIC41LS41aDdhLjUuNSAwIDAgMSAwIDFoLTdhLjUuNSAwIDAgMS0uNS0uNW0wLTRhLjUuNSAwIDAgMSAuNS0uNWgyYS41LjUgMCAwIDEgMCAxaC0yYS41LjUgMCAwIDEtLjUtLjVtNSAwYS41LjUgMCAwIDEgLjUtLjVoMmEuNS41IDAgMCAxIDAgMWgtMmEuNS41IDAgMCAxLS41LS41Ii8+Cjwvc3ZnPg==)*/
const EmojiExpressionless: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-expressionless"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default EmojiExpressionless;
