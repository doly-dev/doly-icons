import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![volume-mute-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi43MTcgMy41NUEuNS41IDAgMCAxIDcgNHY4YS41LjUgMCAwIDEtLjgxMi4zOUwzLjgyNSAxMC41SDEuNUEuNS41IDAgMCAxIDEgMTBWNmEuNS41IDAgMCAxIC41LS41aDIuMzI1bDIuMzYzLTEuODlhLjUuNSAwIDAgMSAuNTI5LS4wNm03LjEzNyAyLjA5NmEuNS41IDAgMCAxIDAgLjcwOEwxMi4yMDcgOGwxLjY0NyAxLjY0NmEuNS41IDAgMCAxLS43MDguNzA4TDExLjUgOC43MDdsLTEuNjQ2IDEuNjQ3YS41LjUgMCAwIDEtLjcwOC0uNzA4TDEwLjc5MyA4IDkuMTQ2IDYuMzU0YS41LjUgMCAxIDEgLjcwOC0uNzA4TDExLjUgNy4yOTNsMS42NDYtMS42NDdhLjUuNSAwIDAgMSAuNzA4IDAiLz4KPC9zdmc+)*/
const VolumeMuteFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="volume-mute-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
</svg>
      )}
    />
  );

export default VolumeMuteFill;
