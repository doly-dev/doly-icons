import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Usb: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.25 7a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25z"/>
  <path d="M0 5.5A.5.5 0 0 1 .5 5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zM1 10h14V6H1z"/>
</svg>
      )}
    />
  );

export default Usb;
