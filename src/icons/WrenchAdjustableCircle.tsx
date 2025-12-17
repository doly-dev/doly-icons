import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![wrench-adjustable-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNDk2IDhhNC41IDQuNSAwIDAgMS0xLjcwMyAzLjUyNkw5LjQ5NyA4LjVsMi45NTktMS4xMXEuMDQuMy4wNC42MSIvPgogIDxwYXRoIGQ9Ik0xNiA4QTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDBtLTEgMGE3IDcgMCAxIDAtMTMuMjAyIDMuMjQ5bDEuOTg4LTEuNjU3YTQuNSA0LjUgMCAwIDEgNy41MzctNC42MjNMNy40OTcgNi41bDEgMi41IDEuMzMzIDMuMTFjLS41Ni4yNTEtMS4xOC4zOS0xLjgzMy4zOWE0LjUgNC41IDAgMCAxLTEuNTkyLS4yOUw0Ljc0NyAxNC4yQTcgNyAwIDAgMCAxNSA4bS04LjI5NS4xMzlhLjI1LjI1IDAgMCAwLS4yODgtLjM3NmwtMS41LjUuMTU5LjQ3NC44MDgtLjI3LS41OTUuODk0YS4yNS4yNSAwIDAgMCAuMjg3LjM3NmwuODA4LS4yNy0uNTk1Ljg5NGEuMjUuMjUgMCAwIDAgLjI4Ny4zNzZsMS41LS41LS4xNTktLjQ3NC0uODA4LjI3LjU5Ni0uODk0YS4yNS4yNSAwIDAgMC0uMjg4LS4zNzZsLS44MDguMjd6Ii8+Cjwvc3ZnPg==)*/
const WrenchAdjustableCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="wrench-adjustable-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8m-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27z"/>
</svg>
      )}
    />
  );

export default WrenchAdjustableCircle;
