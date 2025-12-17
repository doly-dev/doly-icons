import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mortarboard-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4yMTEgMi4wNDdhLjUuNSAwIDAgMC0uNDIyIDBsLTcuNSAzLjVhLjUuNSAwIDAgMCAuMDI1LjkxN2w3LjUgM2EuNS41IDAgMCAwIC4zNzIgMEwxNCA3LjE0VjEzYTEgMSAwIDAgMC0xIDF2Mmgzdi0yYTEgMSAwIDAgMC0xLTFWNi43MzlsLjY4Ni0uMjc1YS41LjUgMCAwIDAgLjAyNS0uOTE3eiIvPgogIDxwYXRoIGQ9Ik00LjE3NiA5LjAzMmEuNS41IDAgMCAwLS42NTYuMzI3bC0uNSAxLjdhLjUuNSAwIDAgMCAuMjk0LjYwNWw0LjUgMS44YS41LjUgMCAwIDAgLjM3MiAwbDQuNS0xLjhhLjUuNSAwIDAgMCAuMjk0LS42MDVsLS41LTEuN2EuNS41IDAgMCAwLS42NTYtLjMyN0w4IDEwLjQ2NnoiLz4KPC9zdmc+)*/
const MortarboardFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mortarboard-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
</svg>
      )}
    />
  );

export default MortarboardFill;
