import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hdmi](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDdhLjUuNSAwIDAgMCAwIDFoMTFhLjUuNSAwIDAgMCAwLTF6Ii8+CiAgPHBhdGggZD0iTTEgNWExIDEgMCAwIDAtMSAxdjNhMSAxIDAgMCAwIDEgMWguMjkzbC43MDcuNzA3YTEgMSAwIDAgMCAuNzA3LjI5M2gxMC41ODZhMSAxIDAgMCAwIC43MDctLjI5M2wuNzA3LS43MDdIMTVhMSAxIDAgMCAwIDEtMVY2YTEgMSAwIDAgMC0xLTF6bTAgMWgxNHYzaC0uMjkzYTEgMSAwIDAgMC0uNzA3LjI5M2wtLjcwNy43MDdIMi43MDdMMiA5LjI5M0ExIDEgMCAwIDAgMS4yOTMgOUgxeiIvPgo8L3N2Zz4=)*/
const Hdmi: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hdmi"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 7a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"/>
  <path d="M1 5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h.293l.707.707a1 1 0 0 0 .707.293h10.586a1 1 0 0 0 .707-.293l.707-.707H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm0 1h14v3h-.293a1 1 0 0 0-.707.293l-.707.707H2.707L2 9.293A1 1 0 0 0 1.293 9H1z"/>
</svg>
      )}
    />
  );

export default Hdmi;
