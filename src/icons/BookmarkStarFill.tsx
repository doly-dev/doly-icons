import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bookmark-star-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDE1LjVWMmEyIDIgMCAwIDEgMi0yaDhhMiAyIDAgMCAxIDIgMnYxMy41YS41LjUgMCAwIDEtLjc0LjQzOUw4IDEzLjA2OWwtNS4yNiAyLjg3QS41LjUgMCAwIDEgMiAxNS41TTguMTYgNC4xYS4xNzguMTc4IDAgMCAwLS4zMiAwbC0uNjM0IDEuMjg1YS4xOC4xOCAwIDAgMS0uMTM0LjA5OGwtMS40Mi4yMDZhLjE3OC4xNzggMCAwIDAtLjA5OC4zMDNMNi41OCA2Ljk5M2MuMDQyLjA0MS4wNjEuMS4wNTEuMTU4TDYuMzkgOC41NjVhLjE3OC4xNzggMCAwIDAgLjI1OC4xODdsMS4yNy0uNjY4YS4xOC4xOCAwIDAgMSAuMTY1IDBsMS4yNy42NjhhLjE3OC4xNzggMCAwIDAgLjI1Ny0uMTg3TDkuMzY4IDcuMTVhLjE4LjE4IDAgMCAxIC4wNS0uMTU4bDEuMDI4LTEuMDAxYS4xNzguMTc4IDAgMCAwLS4wOTgtLjMwM2wtMS40Mi0uMjA2YS4xOC4xOCAwIDAgMS0uMTM0LS4wOTh6Ii8+Cjwvc3ZnPg==)*/
const BookmarkStarFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bookmark-star-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"/>
</svg>
      )}
    />
  );

export default BookmarkStarFill;
