import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrows-collapse-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNWEuNS41IDAgMCAxLS41LS41di0xM2EuNS41IDAgMCAxIDEgMHYxM2EuNS41IDAgMCAxLS41LjVNMCA4YS41LjUgMCAwIDEgLjUtLjVoMy43OTNMMy4xNDYgNi4zNTRhLjUuNSAwIDEgMSAuNzA4LS43MDhsMiAyYS41LjUgMCAwIDEgMCAuNzA4bC0yIDJhLjUuNSAwIDAgMS0uNzA4LS43MDhMNC4yOTMgOC41SC41QS41LjUgMCAwIDEgMCA4bTExLjcwNy41IDEuMTQ3IDEuMTQ2YS41LjUgMCAwIDEtLjcwOC43MDhsLTItMmEuNS41IDAgMCAxIDAtLjcwOGwyLTJhLjUuNSAwIDAgMSAuNzA4LjcwOEwxMS43MDcgNy41SDE1LjVhLjUuNSAwIDAgMSAwIDF6Ii8+Cjwvc3ZnPg==)*/
const ArrowsCollapseVertical: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrows-collapse-vertical"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M0 8a.5.5 0 0 1 .5-.5h3.793L3.146 6.354a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8.5H.5A.5.5 0 0 1 0 8m11.707.5 1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L11.707 7.5H15.5a.5.5 0 0 1 0 1z"/>
</svg>
      )}
    />
  );

export default ArrowsCollapseVertical;
