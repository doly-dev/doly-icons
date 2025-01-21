import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const FilePerson: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-person"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
      )}
    />
  );

export default FilePerson;
