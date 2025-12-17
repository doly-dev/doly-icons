import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![fork-knife](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMgLjVjMC0uMjc2LS4yMjYtLjUwNi0uNDk4LS40NjUtMS43MDMuMjU3LTIuOTQgMi4wMTItMyA4LjQ2MmEuNS41IDAgMCAwIC40OTguNWMuNTYuMDEgMSAuMTMgMSAxLjAwM3Y1LjVhLjUuNSAwIDAgMCAuNS41aDFhLjUuNSAwIDAgMCAuNS0uNXpNNC4yNSAwYS4yNS4yNSAwIDAgMSAuMjUuMjV2NS4xMjJhLjEyOC4xMjggMCAwIDAgLjI1Ni4wMDZsLjIzMy01LjE0QS4yNS4yNSAwIDAgMSA1LjI0IDBoLjUyMmEuMjUuMjUgMCAwIDEgLjI1LjIzOGwuMjMzIDUuMTRhLjEyOC4xMjggMCAwIDAgLjI1Ni0uMDA2Vi4yNUEuMjUuMjUgMCAwIDEgNi43NSAwaC4yOWEuNS41IDAgMCAxIC40OTguNDU4bC40MjMgNS4wN2ExLjY5IDEuNjkgMCAwIDEtMS4wNTkgMS43MTFsLS4wNTMuMDIyYS45Mi45MiAwIDAgMC0uNTguODg0TDYuNDcgMTVhLjk3MS45NzEgMCAxIDEtMS45NDIgMGwuMjAyLTYuODU1YS45Mi45MiAwIDAgMC0uNTgtLjg4NGwtLjA1My0uMDIyYTEuNjkgMS42OSAwIDAgMS0xLjA1OS0xLjcxMkwzLjQ2Mi40NThBLjUuNSAwIDAgMSAzLjk2IDB6Ii8+Cjwvc3ZnPg==)*/
const ForkKnife: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="fork-knife"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z"/>
</svg>
      )}
    />
  );

export default ForkKnife;
