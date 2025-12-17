import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![alarm-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAuNWEuNS41IDAgMCAxIC41LS41aDNhLjUuNSAwIDAgMSAwIDFIOXYxLjA3YTcuMDAxIDcuMDAxIDAgMCAxIDMuMjc0IDEyLjQ3NGwuNjAxLjYwMmEuNS41IDAgMCAxLS43MDcuNzA4bC0uNzQ2LS43NDZBNi45NyA2Ljk3IDAgMCAxIDggMTZhNi45NyA2Ljk3IDAgMCAxLTMuNDIyLS44OTJsLS43NDYuNzQ2YS41LjUgMCAwIDEtLjcwNy0uNzA4bC42MDItLjYwMkE3LjAwMSA3LjAwMSAwIDAgMSA3IDIuMDdWMWgtLjVBLjUuNSAwIDAgMSA2IC41bTIuNSA1YS41LjUgMCAwIDAtMSAwdjMuMzYybC0xLjQyOSAyLjM4YS41LjUgMCAxIDAgLjg1OC41MTVsMS41LTIuNUEuNS41IDAgMCAwIDguNSA5ek0uODYgNS4zODdBMi41IDIuNSAwIDEgMSA0LjM4NyAxLjg2IDguMDQgOC4wNCAwIDAgMCAuODYgNS4zODdNMTEuNjEzIDEuODZhMi41IDIuNSAwIDEgMSAzLjUyNyAzLjUyNyA4LjA0IDguMDQgMCAwIDAtMy41MjctMy41MjciLz4KPC9zdmc+)*/
const AlarmFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="alarm-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.04 8.04 0 0 0-3.527-3.527"/>
</svg>
      )}
    />
  );

export default AlarmFill;
