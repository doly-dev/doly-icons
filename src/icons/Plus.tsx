import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA0YS41LjUgMCAwIDEgLjUuNXYzaDNhLjUuNSAwIDAgMSAwIDFoLTN2M2EuNS41IDAgMCAxLTEgMHYtM2gtM2EuNS41IDAgMCAxIDAtMWgzdi0zQS41LjUgMCAwIDEgOCA0Ii8+Cjwvc3ZnPg==)*/
const Plus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="plus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
      )}
    />
  );

export default Plus;
