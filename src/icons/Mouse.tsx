import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mouse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAzYS41LjUgMCAwIDEgLjUuNXYyYS41LjUgMCAwIDEtMSAwdi0yQS41LjUgMCAwIDEgOCAzbTQgOGE0IDQgMCAwIDEtOCAwVjVhNCA0IDAgMSAxIDggMHpNOCAwYTUgNSAwIDAgMC01IDV2NmE1IDUgMCAwIDAgMTAgMFY1YTUgNSAwIDAgMC01LTUiLz4KPC9zdmc+)*/
const Mouse: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mouse"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5"/>
</svg>
      )}
    />
  );

export default Mouse;
