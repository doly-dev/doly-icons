import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![memory](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSAzYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDQuNTg2YTEgMSAwIDAgMCAuNzA3LS4yOTNsLjM1My0uMzUzYS41LjUgMCAwIDEgLjcwOCAwbC4zNTMuMzUzYTEgMSAwIDAgMCAuNzA3LjI5M0gxNWExIDEgMCAwIDAgMS0xVjRhMSAxIDAgMCAwLTEtMXptLjUgMWgzYS41LjUgMCAwIDEgLjUuNXY0YS41LjUgMCAwIDEtLjUuNWgtM2EuNS41IDAgMCAxLS41LS41di00YS41LjUgMCAwIDEgLjUtLjVtNSAwaDNhLjUuNSAwIDAgMSAuNS41djRhLjUuNSAwIDAgMS0uNS41aC0zYS41LjUgMCAwIDEtLjUtLjV2LTRhLjUuNSAwIDAgMSAuNS0uNW00LjUuNWEuNS41IDAgMCAxIC41LS41aDNhLjUuNSAwIDAgMSAuNS41djRhLjUuNSAwIDAgMS0uNS41aC0zYS41LjUgMCAwIDEtLjUtLjV6TTIgMTB2Mkgxdi0yem0yIDB2Mkgzdi0yem0yIDB2Mkg1di0yem0zIDB2Mkg4di0yem0yIDB2MmgtMXYtMnptMiAwdjJoLTF2LTJ6bTIgMHYyaC0xdi0yeiIvPgo8L3N2Zz4=)*/
const Memory: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="memory"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM2 10v2H1v-2zm2 0v2H3v-2zm2 0v2H5v-2zm3 0v2H8v-2zm2 0v2h-1v-2zm2 0v2h-1v-2zm2 0v2h-1v-2z"/>
</svg>
      )}
    />
  );

export default Memory;
