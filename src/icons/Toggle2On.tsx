import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![toggle2-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyA1SDNhMyAzIDAgMCAwIDAgNmg0YTUgNSAwIDAgMS0uNTg0LTFIM2EyIDIgMCAxIDEgMC00aDMuNDE2cS4yMzUtLjUzNy41ODQtMSIvPgogIDxwYXRoIGQ9Ik0xNiA4QTUgNSAwIDEgMSA2IDhhNSA1IDAgMCAxIDEwIDAiLz4KPC9zdmc+)*/
const Toggle2On: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="toggle2-on"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 5H3a3 3 0 0 0 0 6h4a5 5 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416q.235-.537.584-1"/>
  <path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0"/>
</svg>
      )}
    />
  );

export default Toggle2On;
