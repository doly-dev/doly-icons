import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![crop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41LjVBLjUuNSAwIDAgMSA0IDF2MTNoMTNhLjUuNSAwIDAgMSAwIDFoLTJ2MmEuNS41IDAgMCAxLTEgMHYtMkgzLjVhLjUuNSAwIDAgMS0uNS0uNVY0SDFhLjUuNSAwIDAgMSAwLTFoMlYxYS41LjUgMCAwIDEgLjUtLjVtMi41IDNhLjUuNSAwIDAgMSAuNS0uNWg4YS41LjUgMCAwIDEgLjUuNXY4YS41LjUgMCAwIDEtMSAwVjRINi41YS41LjUgMCAwIDEtLjUtLjUiLz4KPC9zdmc+)*/
const Crop: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="crop"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5.5A.5.5 0 0 1 4 1v13h13a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2H3.5a.5.5 0 0 1-.5-.5V4H1a.5.5 0 0 1 0-1h2V1a.5.5 0 0 1 .5-.5m2.5 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4H6.5a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default Crop;
