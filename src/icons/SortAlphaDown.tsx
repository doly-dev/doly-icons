import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sort-alpha-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC4wODIgNS42MjkgOS42NjQgN0g4LjU5OGwxLjc4OS01LjMzMmgxLjIzNEwxMy40MDIgN2gtMS4xMmwtLjQxOS0xLjM3MXptMS41Ny0uNzg1TDExIDIuNjg3aC0uMDQ3bC0uNjUyIDIuMTU3eiIvPgogIDxwYXRoIGQ9Ik0xMi45NiAxNEg5LjAyOHYtLjY5MWwyLjU3OS0zLjcydi0uMDU0SDkuMDk4di0uODY3aDMuNzg1di42OTFsLTIuNTY3IDMuNzJ2LjA1NGgyLjY0NXpNNC41IDIuNWEuNS41IDAgMCAwLTEgMHY5Ljc5M2wtMS4xNDYtMS4xNDdhLjUuNSAwIDAgMC0uNzA4LjcwOGwyIDEuOTk5LjAwNy4wMDdhLjQ5Ny40OTcgMCAwIDAgLjctLjAwNmwyLTJhLjUuNSAwIDAgMC0uNzA3LS43MDhMNC41IDEyLjI5M3oiLz4KPC9zdmc+)*/
const SortAlphaDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sort-alpha-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371zm1.57-.785L11 2.687h-.047l-.652 2.157z"/>
  <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293z"/>
</svg>
      )}
    />
  );

export default SortAlphaDown;
