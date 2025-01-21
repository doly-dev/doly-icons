import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const PhoneLandscape: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="phone-landscape"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 4.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm-1 6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2z"/>
  <path d="M14 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
</svg>
      )}
    />
  );

export default PhoneLandscape;
