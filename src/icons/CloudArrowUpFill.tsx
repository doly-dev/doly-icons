import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-arrow-up-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAyYTUuNTMgNS41MyAwIDAgMC0zLjU5NCAxLjM0MmMtLjc2Ni42Ni0xLjMyMSAxLjUyLTEuNDY0IDIuMzgzQzEuMjY2IDYuMDk1IDAgNy41NTUgMCA5LjMxOCAwIDExLjM2NiAxLjcwOCAxMyAzLjc4MSAxM2g4LjkwNkMxNC41MDIgMTMgMTYgMTEuNTcgMTYgOS43NzNjMC0xLjYzNi0xLjI0Mi0yLjk2OS0yLjgzNC0zLjE5NEMxMi45MjMgMy45OTkgMTAuNjkgMiA4IDJtMi4zNTQgNS4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOEw4LjUgNi43MDdWMTAuNWEuNS41IDAgMCAxLTEgMFY2LjcwN0w2LjM1NCA3Ljg1NGEuNS41IDAgMSAxLS43MDgtLjcwOGwyLTJhLjUuNSAwIDAgMSAuNzA4IDB6Ii8+Cjwvc3ZnPg==)*/
const CloudArrowUpFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-arrow-up-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z"/>
</svg>
      )}
    />
  );

export default CloudArrowUpFill;
