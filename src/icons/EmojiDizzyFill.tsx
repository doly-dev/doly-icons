import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const EmojiDizzyFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-dizzy-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708m5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708M8 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>
</svg>
      )}
    />
  );

export default EmojiDizzyFill;
