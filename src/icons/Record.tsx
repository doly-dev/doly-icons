import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Record: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="record"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10"/>
</svg>
      )}
    />
  );

export default Record;
