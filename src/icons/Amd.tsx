import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Amd: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="amd"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0zM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2z"/>
</svg>
      )}
    />
  );

export default Amd;
