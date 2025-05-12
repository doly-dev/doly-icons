import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const MeasuringCupFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="measuring-cup-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 0a2 2 0 0 1 2 2v5.959a1.041 1.041 0 0 1-2.049.264l-.02-.093-.849-5.096a.041.041 0 0 0-.082.007V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3.742a2.5 2.5 0 0 0-.732-1.767L.146.854A.5.5 0 0 1 .5 0zM4 13v1h1.5a.5.5 0 0 0 0-1zm0-2v1h3.5a.5.5 0 0 0 0-1zm0-2v1h1.5a.5.5 0 0 0 0-1zm0-2v1h3.5a.5.5 0 0 0 0-1zm0-2v1h1.5a.5.5 0 0 0 0-1zm0-2v1h3.5a.5.5 0 0 0 0-1z"/>
</svg>
      )}
    />
  );

export default MeasuringCupFill;
