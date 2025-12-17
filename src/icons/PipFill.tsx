import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pip-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS41IDJBMS41IDEuNSAwIDAgMCAwIDMuNXY5QTEuNSAxLjUgMCAwIDAgMS41IDE0aDEzYTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtOUExLjUgMS41IDAgMCAwIDE0LjUgMnptNyA2aDVhLjUuNSAwIDAgMSAuNS41djNhLjUuNSAwIDAgMS0uNS41aC01YS41LjUgMCAwIDEtLjUtLjV2LTNhLjUuNSAwIDAgMSAuNS0uNSIvPgo8L3N2Zz4=)*/
const PipFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pip-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm7 6h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default PipFill;
