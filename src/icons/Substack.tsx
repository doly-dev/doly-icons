import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Substack: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="substack"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z"/>
</svg>
      )}
    />
  );

export default Substack;
