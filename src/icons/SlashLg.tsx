import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const SlashLg: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="slash-lg"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0"/>
</svg>
      )}
    />
  );

export default SlashLg;
