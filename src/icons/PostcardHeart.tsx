import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![postcard-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA0LjVhLjUuNSAwIDAgMC0xIDB2N2EuNS41IDAgMCAwIDEgMHptMy41Ljg3OGMxLjQ4Mi0xLjQyIDQuNzk1IDEuMzkyIDAgNC42MjItNC43OTUtMy4yMy0xLjQ4Mi02LjA0MyAwLTQuNjIyTTIuNSA1YS41LjUgMCAwIDAgMCAxaDNhLjUuNSAwIDAgMCAwLTF6bTAgMmEuNS41IDAgMCAwIDAgMWgzYS41LjUgMCAwIDAgMC0xem0wIDJhLjUuNSAwIDAgMCAwIDFoM2EuNS41IDAgMCAwIDAtMXoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDRhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ6bTItMWExIDEgMCAwIDAtMSAxdjhhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xVjRhMSAxIDAgMCAwLTEtMXoiLz4KPC9zdmc+)*/
const PostcardHeart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="postcard-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 4.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622M2.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
  <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default PostcardHeart;
