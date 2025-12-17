import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![postage-heart-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC41IDNhLjUuNSAwIDAgMC0uNS41djlhLjUuNSAwIDAgMCAuNS41aDdhLjUuNSAwIDAgMCAuNS0uNXYtOWEuNS41IDAgMCAwLS41LS41ek04IDExQzIuMTc1IDcuMjM2IDYuMzM2IDQuMzEgOCA1Ljk4MiA5LjY2NCA0LjMwOSAxMy44MjUgNy4yMzYgOCAxMSIvPgogIDxwYXRoIGQ9Ik00LjUgMGExIDEgMCAwIDEtMiAwSDF2MWExIDEgMCAwIDEgMCAydjFhMSAxIDAgMCAxIDAgMnYxYTEgMSAwIDAgMSAwIDJ2MWExIDEgMCAxIDEgMCAydjFhMSAxIDAgMSAxIDAgMnYxaDEuNWExIDEgMCAxIDEgMiAwaDFhMSAxIDAgMSAxIDIgMGgxYTEgMSAwIDEgMSAyIDBoMWExIDEgMCAxIDEgMiAwSDE1di0xYTEgMSAwIDEgMSAwLTJ2LTFhMSAxIDAgMSAxIDAtMlY5YTEgMSAwIDEgMSAwLTJWNmExIDEgMCAxIDEgMC0yVjNhMSAxIDAgMSAxIDAtMlYwaC0xLjVhMSAxIDAgMSAxLTIgMGgtMWExIDEgMCAxIDEtMiAwaC0xYTEgMSAwIDAgMS0yIDB6TTQgMTRhMSAxIDAgMCAxLTEtMVYzYTEgMSAwIDAgMSAxLTFoOGExIDEgMCAwIDEgMSAxdjEwYTEgMSAwIDAgMS0xIDF6Ii8+Cjwvc3ZnPg==)*/
const PostageHeartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="postage-heart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM8 11C2.175 7.236 6.336 4.31 8 5.982 9.664 4.309 13.825 7.236 8 11"/>
  <path d="M4.5 0a1 1 0 0 1-2 0H1v1a1 1 0 0 1 0 2v1a1 1 0 0 1 0 2v1a1 1 0 0 1 0 2v1a1 1 0 1 1 0 2v1a1 1 0 1 1 0 2v1h1.5a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0H15v-1a1 1 0 1 1 0-2v-1a1 1 0 1 1 0-2V9a1 1 0 1 1 0-2V6a1 1 0 1 1 0-2V3a1 1 0 1 1 0-2V0h-1.5a1 1 0 1 1-2 0h-1a1 1 0 1 1-2 0h-1a1 1 0 0 1-2 0zM4 14a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z"/>
</svg>
      )}
    />
  );

export default PostageHeartFill;
