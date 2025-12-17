import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pentagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy42ODUgMS41NDVhLjUuNSAwIDAgMSAuNjMgMGw2LjI2MyA1LjA4OGEuNS41IDAgMCAxIC4xNjEuNTM5bC0yLjM2MiA3LjQ3OWEuNS41IDAgMCAxLS40NzYuMzQ5SDQuMDk5YS41LjUgMCAwIDEtLjQ3Ni0uMzVMMS4yNiA3LjE3M2EuNS41IDAgMCAxIC4xNjEtLjU0bDYuMjYzLTUuMDg3Wm04LjIxMyA1LjI4YS41LjUgMCAwIDAtLjE2Mi0uNTRMOC4zMTYuMjU3YS41LjUgMCAwIDAtLjYzMSAwTC4yNjQgNi4yODZhLjUuNSAwIDAgMC0uMTYyLjUzOGwyLjc4OCA4LjgyN2EuNS41IDAgMCAwIC40NzYuMzQ5aDkuMjY4YS41LjUgMCAwIDAgLjQ3Ni0uMzVsMi43ODgtOC44MjZaIi8+Cjwvc3ZnPg==)*/
const Pentagon: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pentagon"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.685 1.545a.5.5 0 0 1 .63 0l6.263 5.088a.5.5 0 0 1 .161.539l-2.362 7.479a.5.5 0 0 1-.476.349H4.099a.5.5 0 0 1-.476-.35L1.26 7.173a.5.5 0 0 1 .161-.54l6.263-5.087Zm8.213 5.28a.5.5 0 0 0-.162-.54L8.316.257a.5.5 0 0 0-.631 0L.264 6.286a.5.5 0 0 0-.162.538l2.788 8.827a.5.5 0 0 0 .476.349h9.268a.5.5 0 0 0 .476-.35l2.788-8.826Z"/>
</svg>
      )}
    />
  );

export default Pentagon;
