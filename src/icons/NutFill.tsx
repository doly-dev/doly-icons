import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const NutFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="nut-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1zm5.018 9.696a3 3 0 1 1-3-5.196 3 3 0 0 1 3 5.196"/>
</svg>
      )}
    />
  );

export default NutFill;
