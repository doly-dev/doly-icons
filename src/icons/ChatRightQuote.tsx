import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-right-quote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDkuNTg2YTIgMiAwIDAgMSAxLjQxNC41ODZsMiAyVjJhMSAxIDAgMCAwLTEtMXptMTItMWEyIDIgMCAwIDEgMiAydjEyLjc5M2EuNS41IDAgMCAxLS44NTQuMzUzbC0yLjg1My0yLjg1M2ExIDEgMCAwIDAtLjcwNy0uMjkzSDJhMiAyIDAgMCAxLTItMlYyYTIgMiAwIDAgMSAyLTJ6Ii8+CiAgPHBhdGggZD0iTTcuMDY2IDQuNzZBMS42NjUgMS42NjUgMCAwIDAgNCA1LjY2OGExLjY2NyAxLjY2NyAwIDAgMCAyLjU2MSAxLjQwNmMtLjEzMS4zODktLjM3NS44MDQtLjc3NyAxLjIyYS40MTcuNDE3IDAgMSAwIC42LjU4YzEuNDg2LTEuNTQgMS4yOTMtMy4yMTQuNjgyLTQuMTEyem00IDBBMS42NjUgMS42NjUgMCAwIDAgOCA1LjY2OGExLjY2NyAxLjY2NyAwIDAgMCAyLjU2MSAxLjQwNmMtLjEzMS4zODktLjM3NS44MDQtLjc3NyAxLjIyYS40MTcuNDE3IDAgMSAwIC42LjU4YzEuNDg2LTEuNTQgMS4yOTMtMy4yMTQuNjgyLTQuMTEyeiIvPgo8L3N2Zz4=)*/
const ChatRightQuote: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-right-quote"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
  <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
</svg>
      )}
    />
  );

export default ChatRightQuote;
