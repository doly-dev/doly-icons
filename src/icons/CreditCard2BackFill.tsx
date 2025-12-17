import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![credit-card-2-back-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY1SDB6bTExLjUgMWEuNS41IDAgMCAwLS41LjV2MWEuNS41IDAgMCAwIC41LjVoMmEuNS41IDAgMCAwIC41LS41di0xYS41LjUgMCAwIDAtLjUtLjV6TTAgMTF2MWEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTF6Ii8+Cjwvc3ZnPg==)*/
const CreditCard2BackFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="credit-card-2-back-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1z"/>
</svg>
      )}
    />
  );

export default CreditCard2BackFill;
