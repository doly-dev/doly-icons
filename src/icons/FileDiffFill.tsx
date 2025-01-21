import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const FileDiffFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-diff-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M8.5 4.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5a.5.5 0 0 1 1 0M6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default FileDiffFill;
