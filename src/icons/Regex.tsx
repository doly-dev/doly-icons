import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![regex](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjA1IDMuMDVhNyA3IDAgMCAwIDAgOS45LjUuNSAwIDAgMS0uNzA3LjcwNyA4IDggMCAwIDEgMC0xMS4zMTQuNS41IDAgMSAxIC43MDcuNzA3bTkuOS0uNzA3YS41LjUgMCAwIDEgLjcwNyAwIDggOCAwIDAgMSAwIDExLjMxNC41LjUgMCAwIDEtLjcwNy0uNzA3IDcgNyAwIDAgMCAwLTkuOS41LjUgMCAwIDEgMC0uNzA3TTYgMTFhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTUtNi41YS41LjUgMCAwIDAtMSAwdjIuMTE3TDguMjU3IDUuNTdhLjUuNSAwIDAgMC0uNTE0Ljg1OEw5LjUyOCA3LjUgNy43NDMgOC41NzFhLjUuNSAwIDEgMCAuNTE0Ljg1OEwxMCA4LjM4M1YxMC41YS41LjUgMCAxIDAgMSAwVjguMzgzbDEuNzQzIDEuMDQ2YS41LjUgMCAwIDAgLjUxNC0uODU4TDExLjQ3MiA3LjVsMS43ODUtMS4wNzFhLjUuNSAwIDEgMC0uNTE0LS44NThMMTEgNi42MTd6Ii8+Cjwvc3ZnPg==)*/
const Regex: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="regex"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 1 1 .707.707m9.9-.707a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.314.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707M6 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5-6.5a.5.5 0 0 0-1 0v2.117L8.257 5.57a.5.5 0 0 0-.514.858L9.528 7.5 7.743 8.571a.5.5 0 1 0 .514.858L10 8.383V10.5a.5.5 0 1 0 1 0V8.383l1.743 1.046a.5.5 0 0 0 .514-.858L11.472 7.5l1.785-1.071a.5.5 0 1 0-.514-.858L11 6.617z"/>
</svg>
      )}
    />
  );

export default Regex;
