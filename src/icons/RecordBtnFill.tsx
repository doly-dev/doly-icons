import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const RecordBtnFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="record-btn-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
      )}
    />
  );

export default RecordBtnFill;
