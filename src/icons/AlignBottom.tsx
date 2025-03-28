import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const AlignBottom: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="align-bottom"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <rect width="4" height="12" x="6" y="1" rx="1"/>
  <path d="M1.5 14a.5.5 0 0 0 0 1zm13 1a.5.5 0 0 0 0-1zm-13 0h13v-1h-13z"/>
</svg>
      )}
    />
  );

export default AlignBottom;
