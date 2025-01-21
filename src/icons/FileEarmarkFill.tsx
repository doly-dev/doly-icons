import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const FileEarmarkFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z"/>
</svg>
      )}
    />
  );

export default FileEarmarkFill;
