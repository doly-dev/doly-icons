import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![terminal-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAzYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDUuNWEuNS41IDAgMCAxIDAgMUgyYTIgMiAwIDAgMS0yLTJWNGEyIDIgMCAwIDEgMi0yaDExYTIgMiAwIDAgMSAyIDJ2NGEuNS41IDAgMCAxLTEgMFY0YTEgMSAwIDAgMC0xLTF6Ii8+CiAgPHBhdGggZD0iTTMuMTQ2IDUuMTQ2YS41LjUgMCAwIDEgLjcwOCAwTDUuMTc3IDYuNDdhLjc1Ljc1IDAgMCAxIDAgMS4wNkwzLjg1NCA4Ljg1NGEuNS41IDAgMSAxLS43MDgtLjcwOEw0LjI5MyA3IDMuMTQ2IDUuODU0YS41LjUgMCAwIDEgMC0uNzA4TTUuNSA5YS41LjUgMCAwIDEgLjUtLjVoMmEuNS41IDAgMCAxIDAgMUg2YS41LjUgMCAwIDEtLjUtLjVNMTYgMTIuNWEzLjUgMy41IDAgMSAxLTcgMCAzLjUgMy41IDAgMCAxIDcgMG0tMy41LTJhLjUuNSAwIDAgMC0uNS41djFoLTFhLjUuNSAwIDAgMCAwIDFoMXYxYS41LjUgMCAwIDAgMSAwdi0xaDFhLjUuNSAwIDAgMCAwLTFoLTF2LTFhLjUuNSAwIDAgMC0uNS0uNSIvPgo8L3N2Zz4=)*/
const TerminalPlus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="terminal-plus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1z"/>
  <path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708M5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"/>
</svg>
      )}
    />
  );

export default TerminalPlus;
