import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const SignNoLeftTurnFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sign-no-left-turn-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 13.292A8 8 0 0 1 13.293 2L9.195 6.099A2.5 2.5 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966.026.02zm.708.708A8 8 0 0 0 14 2.707l-3.885 3.884C10.656 7.05 11 7.735 11 8.5V11h-1V8.5c0-.489-.234-.923-.596-1.197l-6.696 6.696Z"/>
  <path d="M8.293 7 7 8.293V7z"/>
</svg>
      )}
    />
  );

export default SignNoLeftTurnFill;
