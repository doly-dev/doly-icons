import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sort-numeric-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNDM4IDEuNjY4VjdIMTEuMzlWMi42ODRoLS4wNTFsLTEuMjExLjg1OXYtLjk2OWwxLjI2Mi0uOTA2aDEuMDQ2eiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjM2IDE0LjA5OGMtMS4xMzcgMC0xLjcwOC0uNjU3LTEuNzYyLTEuMjc4aDEuMDA0Yy4wNTguMjIzLjM0My40NS43NzMuNDUuODI0IDAgMS4xNjQtLjgyOSAxLjEzMy0xLjg1NmgtLjA1OWMtLjE0OC4zOS0uNTcuNzQyLTEuMjYxLjc0Mi0uOTEgMC0xLjcyLS42MTMtMS43Mi0xLjc1OCAwLTEuMTQ4Ljg0OC0xLjgzNSAxLjk3My0xLjgzNSAxLjA5IDAgMi4wNjMuNjM2IDIuMDYzIDIuNjg3IDAgMS44NjctLjcyMyAyLjg0OC0yLjE0NSAyLjg0OHptLjA2Mi0yLjczNWMuNTA0IDAgLjkzMy0uMzM2LjkzMy0uOTcyIDAtLjYzMy0uMzk4LTEuMDA4LS45NC0xLjAwOC0uNTIgMC0uOTI3LjM3NS0uOTI3IDEgMCAuNjQuNDE4Ljk4LjkzNC45OCIvPgogIDxwYXRoIGQ9Ik00LjUgMTMuNWEuNS41IDAgMCAxLTEgMFYzLjcwN0wyLjM1NCA0Ljg1NGEuNS41IDAgMSAxLS43MDgtLjcwOGwyLTEuOTk5LjAwNy0uMDA3YS41LjUgMCAwIDEgLjcuMDA2bDIgMmEuNS41IDAgMSAxLS43MDcuNzA4TDQuNSAzLjcwN3oiLz4KPC9zdmc+)*/
const SortNumericUp: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sort-numeric-up"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
  <path fillRule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98"/>
  <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707z"/>
</svg>
      )}
    />
  );

export default SortNumericUp;
