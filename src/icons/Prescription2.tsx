import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Prescription2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="prescription2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 6h2v2h2v2H9v2H7v-2H5V8h2z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM3 3h10V1H3z"/>
</svg>
      )}
    />
  );

export default Prescription2;
