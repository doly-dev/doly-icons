import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![terminal-split](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi4xNDYgMy4xNDZhLjUuNSAwIDAgMSAuNzA4IDBsLjgyMy44MjRhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtLjgyMy44MjRhLjUuNSAwIDEgMS0uNzA4LS43MDhsLjY0Ny0uNjQ2LS42NDctLjY0NmEuNS41IDAgMCAxIDAtLjcwOE00IDZhLjUuNSAwIDAgMSAuNS0uNWgxYS41LjUgMCAwIDEgMCAxaC0xQS41LjUgMCAwIDEgNCA2bTYuMzU0LTIuODU0YS41LjUgMCAwIDAtLjcwOC43MDhsLjY0Ny42NDYtLjY0Ny42NDZhLjUuNSAwIDEgMCAuNzA4LjcwOGwuODIzLS44MjRhLjc1Ljc1IDAgMCAwIDAtMS4wNnpNMTIgNS41YS41LjUgMCAwIDAgMCAxaDFhLjUuNSAwIDAgMCAwLTF6Ii8+CiAgPHBhdGggZD0iTTAgM2EyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ6bTItMWExIDEgMCAwIDAtMSAxdjEwYTEgMSAwIDAgMCAxIDFoNS41VjJ6bTYuNSAwdjEySDE0YTEgMSAwIDAgMCAxLTFWM2ExIDEgMCAwIDAtMS0xeiIvPgo8L3N2Zz4=)*/
const TerminalSplit: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="terminal-split"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.146 3.146a.5.5 0 0 1 .708 0l.823.824a.75.75 0 0 1 0 1.06l-.823.824a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708M4 6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 4 6m6.354-2.854a.5.5 0 0 0-.708.708l.647.646-.647.646a.5.5 0 1 0 .708.708l.823-.824a.75.75 0 0 0 0-1.06zM12 5.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
  <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5V2zm6.5 0v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default TerminalSplit;
