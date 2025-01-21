import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ChatLeftFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-left-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
</svg>
      )}
    />
  );

export default ChatLeftFill;
