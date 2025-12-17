import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sort-numeric-down-alt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4zNiA3LjA5OGMtMS4xMzcgMC0xLjcwOC0uNjU3LTEuNzYyLTEuMjc4aDEuMDA0Yy4wNTguMjIzLjM0My40NS43NzMuNDUuODI0IDAgMS4xNjQtLjgyOSAxLjEzMy0xLjg1NmgtLjA1OWMtLjE0OC4zOS0uNTcuNzQyLTEuMjYxLjc0Mi0uOTEgMC0xLjcyLS42MTMtMS43Mi0xLjc1OCAwLTEuMTQ4Ljg0OC0xLjgzNiAxLjk3My0xLjgzNiAxLjA5IDAgMi4wNjMuNjM3IDIuMDYzIDIuNjg4IDAgMS44NjctLjcyMyAyLjg0OC0yLjE0NSAyLjg0OHptLjA2Mi0yLjczNWMuNTA0IDAgLjkzMy0uMzM2LjkzMy0uOTcyIDAtLjYzMy0uMzk4LTEuMDA4LS45NC0xLjAwOC0uNTIgMC0uOTI3LjM3NS0uOTI3IDEgMCAuNjQuNDE4Ljk4LjkzNC45OCIvPgogIDxwYXRoIGQ9Ik0xMi40MzggOC42NjhWMTRIMTEuMzlWOS42ODRoLS4wNTFsLTEuMjExLjg1OXYtLjk2OWwxLjI2Mi0uOTA2aDEuMDQ2ek00LjUgMi41YS41LjUgMCAwIDAtMSAwdjkuNzkzbC0xLjE0Ni0xLjE0N2EuNS41IDAgMCAwLS43MDguNzA4bDIgMS45OTkuMDA3LjAwN2EuNDk3LjQ5NyAwIDAgMCAuNy0uMDA2bDItMmEuNS41IDAgMCAwLS43MDctLjcwOEw0LjUgMTIuMjkzeiIvPgo8L3N2Zz4=)*/
const SortNumericDownAlt: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sort-numeric-down-alt"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98"/>
  <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293z"/>
</svg>
      )}
    />
  );

export default SortNumericDownAlt;
