import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bookmark-check-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDE1LjVWMmEyIDIgMCAwIDEgMi0yaDhhMiAyIDAgMCAxIDIgMnYxMy41YS41LjUgMCAwIDEtLjc0LjQzOUw4IDEzLjA2OWwtNS4yNiAyLjg3QS41LjUgMCAwIDEgMiAxNS41bTguODU0LTkuNjQ2YS41LjUgMCAwIDAtLjcwOC0uNzA4TDcuNSA3Ljc5MyA2LjM1NCA2LjY0NmEuNS41IDAgMSAwLS43MDguNzA4bDEuNSAxLjVhLjUuNSAwIDAgMCAuNzA4IDB6Ii8+Cjwvc3ZnPg==)*/
const BookmarkCheckFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bookmark-check-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
</svg>
      )}
    />
  );

export default BookmarkCheckFill;
