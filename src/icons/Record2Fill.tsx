import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Record2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="record2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
  <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
      )}
    />
  );

export default Record2Fill;
