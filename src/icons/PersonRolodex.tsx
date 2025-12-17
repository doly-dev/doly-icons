import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-rolodex](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA5LjA1YTIuNSAyLjUgMCAxIDAgMC01IDIuNSAyLjUgMCAwIDAgMCA1Ii8+CiAgPHBhdGggZD0iTTEgMWExIDEgMCAwIDAtMSAxdjExYTEgMSAwIDAgMCAxIDFoLjVhLjUuNSAwIDAgMCAuNS0uNS41LjUgMCAwIDEgMSAwIC41LjUgMCAwIDAgLjUuNWg5YS41LjUgMCAwIDAgLjUtLjUuNS41IDAgMCAxIDEgMCAuNS41IDAgMCAwIC41LjVoLjVhMSAxIDAgMCAwIDEtMVYzYTEgMSAwIDAgMC0xLTFINi43MDdMNiAxLjI5M0ExIDEgMCAwIDAgNS4yOTMgMXptMCAxaDQuMjkzTDYgMi43MDdBMSAxIDAgMCAwIDYuNzA3IDNIMTV2MTBoLS4wODVhMS41IDEuNSAwIDAgMC0yLjQtLjYzQzExLjg4NSAxMS4yMjMgMTAuNTU0IDEwIDggMTBjLTIuNTU1IDAtMy44ODYgMS4yMjQtNC41MTQgMi4zN2ExLjUgMS41IDAgMCAwLTIuNC42M0gxeiIvPgo8L3N2Zz4=)*/
const PersonRolodex: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-rolodex"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
  <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z"/>
</svg>
      )}
    />
  );

export default PersonRolodex;
