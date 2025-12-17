import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![luggage-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxLjVhLjUuNSAwIDAgMSAuNS0uNWgzYS41LjUgMCAwIDEgLjUuNVY1aC41QTEuNSAxLjUgMCAwIDEgOCA2LjVWN0g3di0uNWEuNS41IDAgMCAwLS41LS41aC01YS41LjUgMCAwIDAtLjUuNXY3YS41LjUgMCAwIDAgLjUuNUg0djFIMi41di4yNWEuNzUuNzUgMCAwIDEtMS41IDB2LS4zMzVBMS41IDEuNSAwIDAgMSAwIDEzLjV2LTdBMS41IDEuNSAwIDAgMSAxLjUgNUgyek0zIDVoMlYySDN6Ii8+CiAgPHBhdGggZD0iTTIuNSA3YS41LjUgMCAwIDEgLjUuNXY1YS41LjUgMCAwIDEtMSAwdi01YS41LjUgMCAwIDEgLjUtLjVtMTAgMXYtLjVBMS41IDEuNSAwIDAgMCAxMSA2aC0xYTEuNSAxLjUgMCAwIDAtMS41IDEuNVY4SDh2OGg1Vjh6TTEwIDdoMWEuNS41IDAgMCAxIC41LjVWOGgtMnYtLjVBLjUuNSAwIDAgMSAxMCA3TTUgOS41QTEuNSAxLjUgMCAwIDEgNi41IDhIN3Y4aC0uNUExLjUgMS41IDAgMCAxIDUgMTQuNXptOSA2LjVWOGguNUExLjUgMS41IDAgMCAxIDE2IDkuNXY1YTEuNSAxLjUgMCAwIDEtMS41IDEuNXoiLz4KPC9zdmc+)*/
const LuggageFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="luggage-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5h.5A1.5 1.5 0 0 1 8 6.5V7H7v-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H4v1H2.5v.25a.75.75 0 0 1-1.5 0v-.335A1.5 1.5 0 0 1 0 13.5v-7A1.5 1.5 0 0 1 1.5 5H2zM3 5h2V2H3z"/>
  <path d="M2.5 7a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5m10 1v-.5A1.5 1.5 0 0 0 11 6h-1a1.5 1.5 0 0 0-1.5 1.5V8H8v8h5V8zM10 7h1a.5.5 0 0 1 .5.5V8h-2v-.5A.5.5 0 0 1 10 7M5 9.5A1.5 1.5 0 0 1 6.5 8H7v8h-.5A1.5 1.5 0 0 1 5 14.5zm9 6.5V8h.5A1.5 1.5 0 0 1 16 9.5v5a1.5 1.5 0 0 1-1.5 1.5z"/>
</svg>
      )}
    />
  );

export default LuggageFill;
