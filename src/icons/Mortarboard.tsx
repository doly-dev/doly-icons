import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mortarboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4yMTEgMi4wNDdhLjUuNSAwIDAgMC0uNDIyIDBsLTcuNSAzLjVhLjUuNSAwIDAgMCAuMDI1LjkxN2w3LjUgM2EuNS41IDAgMCAwIC4zNzIgMEwxNCA3LjE0VjEzYTEgMSAwIDAgMC0xIDF2Mmgzdi0yYTEgMSAwIDAgMC0xLTFWNi43MzlsLjY4Ni0uMjc1YS41LjUgMCAwIDAgLjAyNS0uOTE3ek04IDguNDYgMS43NTggNS45NjUgOCAzLjA1Mmw2LjI0MiAyLjkxM3oiLz4KICA8cGF0aCBkPSJNNC4xNzYgOS4wMzJhLjUuNSAwIDAgMC0uNjU2LjMyN2wtLjUgMS43YS41LjUgMCAwIDAgLjI5NC42MDVsNC41IDEuOGEuNS41IDAgMCAwIC4zNzIgMGw0LjUtMS44YS41LjUgMCAwIDAgLjI5NC0uNjA1bC0uNS0xLjdhLjUuNSAwIDAgMC0uNjU2LS4zMjdMOCAxMC40NjZ6bS0uMDY4IDEuODczLjIyLS43NDggMy40OTYgMS4zMTFhLjUuNSAwIDAgMCAuMzUyIDBsMy40OTYtMS4zMTEuMjIuNzQ4TDggMTIuNDZ6Ii8+Cjwvc3ZnPg==)*/
const Mortarboard: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mortarboard"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
</svg>
      )}
    />
  );

export default Mortarboard;
