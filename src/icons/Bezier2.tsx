import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bezier2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDIuNUExLjUgMS41IDAgMCAxIDIuNSAxaDFBMS41IDEuNSAwIDAgMSA1IDIuNWg0LjEzNGExIDEgMCAxIDEgMCAxaC0yLjAxcS4yNjkuMjcuNDg0LjYwNUM4LjI0NiA1LjA5NyA4LjUgNi40NTkgOC41IDhjMCAxLjk5My4yNTcgMy4wOTIuNzEzIDMuNy4zNTYuNDc2Ljg5NS43MjEgMS43ODcuNzg0QTEuNSAxLjUgMCAwIDEgMTIuNSAxMWgxYTEuNSAxLjUgMCAwIDEgMS41IDEuNXYxYTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMWExLjUgMS41IDAgMCAxLTEuNS0xLjVINi44NjZhMSAxIDAgMSAxIDAtMWgxLjcxMWEzIDMgMCAwIDEtLjE2NS0uMkM3Ljc0MyAxMS40MDcgNy41IDEwLjAwNyA3LjUgOGMwLTEuNDYtLjI0Ni0yLjU5Ny0uNzMzLTMuMzU1LS4zOS0uNjA1LS45NTItMS0xLjc2Ny0xLjExMkExLjUgMS41IDAgMCAxIDMuNSA1aC0xQTEuNSAxLjUgMCAwIDEgMSAzLjV6TTIuNSAyYS41LjUgMCAwIDAtLjUuNXYxYS41LjUgMCAwIDAgLjUuNWgxYS41LjUgMCAwIDAgLjUtLjV2LTFhLjUuNSAwIDAgMC0uNS0uNXptMTAgMTBhLjUuNSAwIDAgMC0uNS41djFhLjUuNSAwIDAgMCAuNS41aDFhLjUuNSAwIDAgMCAuNS0uNXYtMWEuNS41IDAgMCAwLS41LS41eiIvPgo8L3N2Zz4=)*/
const Bezier2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bezier2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01q.269.27.484.605C8.246 5.097 8.5 6.459 8.5 8c0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a3 3 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
</svg>
      )}
    />
  );

export default Bezier2;
