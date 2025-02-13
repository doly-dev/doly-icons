import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Paragraph: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="paragraph"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5"/>
</svg>
      )}
    />
  );

export default Paragraph;
