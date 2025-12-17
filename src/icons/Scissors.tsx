import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![scissors](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDMuNWMtLjYxNC0uODg0LS4wNzQtMS45NjIuODU4LTIuNUw4IDcuMjI2IDExLjY0MiAxYy45MzIuNTM4IDEuNDcyIDEuNjE2Ljg1OCAyLjVMOC44MSA4LjYxbDEuNTU2IDIuNjYxYTIuNSAyLjUgMCAxIDEtLjc5NC42MzdMOCA5LjczbC0xLjU3MiAyLjE3N2EyLjUgMi41IDAgMSAxLS43OTQtLjYzN0w3LjE5IDguNjF6bTIuNSAxMGExLjUgMS41IDAgMSAwLTMgMCAxLjUgMS41IDAgMCAwIDMgMG03IDBhMS41IDEuNSAwIDEgMC0zIDAgMS41IDEuNSAwIDAgMCAzIDAiLz4KPC9zdmc+)*/
const Scissors: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="scissors"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
</svg>
      )}
    />
  );

export default Scissors;
