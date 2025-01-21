import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const FileFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"/>
</svg>
      )}
    />
  );

export default FileFill;
