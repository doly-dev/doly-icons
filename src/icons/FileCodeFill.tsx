import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-code-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yTTYuNjQ2IDUuNjQ2YS41LjUgMCAxIDEgLjcwOC43MDhMNS43MDcgOGwxLjY0NyAxLjY0NmEuNS41IDAgMCAxLS43MDguNzA4bC0yLTJhLjUuNSAwIDAgMSAwLS43MDh6bTIuNzA4IDAgMiAyYS41LjUgMCAwIDEgMCAuNzA4bC0yIDJhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTAuMjkzIDggOC42NDYgNi4zNTRhLjUuNSAwIDEgMSAuNzA4LS43MDgiLz4KPC9zdmc+)*/
const FileCodeFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-code-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 1 1 .708-.708"/>
</svg>
      )}
    />
  );

export default FileCodeFill;
