import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Strava: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="strava"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.731 0 2 9.125h2.788L6.73 5.497l1.93 3.628h2.766zm4.694 9.125-1.372 2.756L8.66 9.125H6.547L10.053 16l3.484-6.875z"/>
</svg>
      )}
    />
  );

export default Strava;
