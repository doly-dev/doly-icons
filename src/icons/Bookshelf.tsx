import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Bookshelf: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bookshelf"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5M3 14h10v-3H3zm0-4h10V7H3zm0-4h10V3H3z"/>
</svg>
      )}
    />
  );

export default Bookshelf;
