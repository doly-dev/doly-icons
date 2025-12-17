import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![view-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyA0LjVoMTBhMiAyIDAgMCAxIDIgMnYzYTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0ydi0zYTIgMiAwIDAgMSAyLTJtMCAxYTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAwIDAgMSAxaDEwYTEgMSAwIDAgMCAxLTF2LTNhMSAxIDAgMCAwLTEtMXpNMSAyYS41LjUgMCAwIDEgLjUtLjVoMTNhLjUuNSAwIDAgMSAwIDFoLTEzQS41LjUgMCAwIDEgMSAybTAgMTJhLjUuNSAwIDAgMSAuNS0uNWgxM2EuNS41IDAgMCAxIDAgMWgtMTNBLjUuNSAwIDAgMSAxIDE0Ii8+Cjwvc3ZnPg==)*/
const ViewList: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="view-list"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14"/>
</svg>
      )}
    />
  );

export default ViewList;
