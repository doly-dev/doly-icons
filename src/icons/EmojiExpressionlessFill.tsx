import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-expressionless-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNkE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2TTQuNSA2aDJhLjUuNSAwIDAgMSAwIDFoLTJhLjUuNSAwIDAgMSAwLTFtNSAwaDJhLjUuNSAwIDAgMSAwIDFoLTJhLjUuNSAwIDAgMSAwLTFtLTUgNGg3YS41LjUgMCAwIDEgMCAxaC03YS41LjUgMCAwIDEgMC0xIi8+Cjwvc3ZnPg==)*/
const EmojiExpressionlessFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-expressionless-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1m5 0h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1m-5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default EmojiExpressionlessFill;
