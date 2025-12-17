import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![aspect-ratio-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxMi41di05QTEuNSAxLjUgMCAwIDEgMS41IDJoMTNBMS41IDEuNSAwIDAgMSAxNiAzLjV2OWExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTEzQTEuNSAxLjUgMCAwIDEgMCAxMi41TTIuNSA0YS41LjUgMCAwIDAtLjUuNXYzYS41LjUgMCAwIDAgMSAwVjVoMi41YS41LjUgMCAwIDAgMC0xem0xMSA4YS41LjUgMCAwIDAgLjUtLjV2LTNhLjUuNSAwIDAgMC0xIDBWMTFoLTIuNWEuNS41IDAgMCAwIDAgMXoiLz4KPC9zdmc+)*/
const AspectRatioFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="aspect-ratio-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 12.5v-9A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5M2.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V5h2.5a.5.5 0 0 0 0-1zm11 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0V11h-2.5a.5.5 0 0 0 0 1z"/>
</svg>
      )}
    />
  );

export default AspectRatioFill;
