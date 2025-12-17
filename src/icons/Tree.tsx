import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC40MTYuMjIzYS41LjUgMCAwIDAtLjgzMiAwbC0zIDQuNUEuNS41IDAgMCAwIDUgNS41aC4wOThMMy4wNzYgOC43MzVBLjUuNSAwIDAgMCAzLjUgOS41aC4xOTFsLTEuNjM4IDMuMjc2YS41LjUgMCAwIDAgLjQ0Ny43MjRIN1YxNmgydi0yLjVoNC41YS41LjUgMCAwIDAgLjQ0Ny0uNzI0TDEyLjMxIDkuNWguMTkxYS41LjUgMCAwIDAgLjQyNC0uNzY1TDEwLjkwMiA1LjVIMTFhLjUuNSAwIDAgMCAuNDE2LS43Nzd6TTYuNDM3IDQuNzU4QS41LjUgMCAwIDAgNiA0LjVoLS4wNjZMOCAxLjQwMSAxMC4wNjYgNC41SDEwYS41LjUgMCAwIDAtLjQyNC43NjVMMTEuNTk4IDguNUgxMS41YS41LjUgMCAwIDAtLjQ0Ny43MjRMMTIuNjkgMTIuNUgzLjMwOWwxLjYzOC0zLjI3NkEuNS41IDAgMCAwIDQuNSA4LjVoLS4wOThsMi4wMjItMy4yMzVhLjUuNSAwIDAgMCAuMDEzLS41MDciLz4KPC9zdmc+)*/
const Tree: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="tree"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507"/>
</svg>
      )}
    />
  );

export default Tree;
