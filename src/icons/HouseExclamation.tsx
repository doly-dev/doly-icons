import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4yOTMgMS41YTEgMSAwIDAgMSAxLjQxNCAwTDExIDMuNzkzVjIuNWEuNS41IDAgMCAxIC41LS41aDFhLjUuNSAwIDAgMSAuNS41djMuMjkzbDIuMzU0IDIuMzUzYS41LjUgMCAwIDEtLjcwOC43MDhMOCAyLjIwN2wtNSA1VjEzLjVhLjUuNSAwIDAgMCAuNS41aDRhLjUuNSAwIDAgMSAwIDFoLTRBMS41IDEuNSAwIDAgMSAyIDEzLjVWOC4yMDdsLS42NDYuNjQ3YS41LjUgMCAxIDEtLjcwOC0uNzA4eiIvPgogIDxwYXRoIGQ9Ik0xNiAxMi41YTMuNSAzLjUgMCAxIDEtNyAwIDMuNSAzLjUgMCAwIDEgNyAwbS0zLjUtMmEuNS41IDAgMCAwLS41LjV2MS41YS41LjUgMCAxIDAgMSAwVjExYS41LjUgMCAwIDAtLjUtLjVtMCA0YS41LjUgMCAxIDAgMC0xIC41LjUgMCAwIDAgMCAxIi8+Cjwvc3ZnPg==)*/
const HouseExclamation: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-exclamation"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 1 0 1 0V11a.5.5 0 0 0-.5-.5m0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
</svg>
      )}
    />
  );

export default HouseExclamation;
