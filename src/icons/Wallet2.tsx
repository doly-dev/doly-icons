import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![wallet2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuMTM2LjMyNkExLjUgMS41IDAgMCAxIDE0IDEuNzhWM2guNUExLjUgMS41IDAgMCAxIDE2IDQuNXY5YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMTNBMS41IDEuNSAwIDAgMSAwIDEzLjV2LTlhMS41IDEuNSAwIDAgMSAxLjQzMi0xLjQ5OXpNNS41NjIgM0gxM1YxLjc4YS41LjUgMCAwIDAtLjYyMS0uNDg0ek0xLjUgNGEuNS41IDAgMCAwLS41LjV2OWEuNS41IDAgMCAwIC41LjVoMTNhLjUuNSAwIDAgMCAuNS0uNXYtOWEuNS41IDAgMCAwLS41LS41eiIvPgo8L3N2Zz4=)*/
const Wallet2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="wallet2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
</svg>
      )}
    />
  );

export default Wallet2;
