import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![newspaper](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAyLjVBMS41IDEuNSAwIDAgMSAxLjUgMWgxMUExLjUgMS41IDAgMCAxIDE0IDIuNXYxMC41MjhjMCAuMy0uMDUuNjU0LS4yMzguOTcyaC43MzhhLjUuNSAwIDAgMCAuNS0uNXYtOWEuNS41IDAgMCAxIDEgMHY5YTEuNSAxLjUgMCAwIDEtMS41IDEuNUgxLjQ5N0ExLjQ5NyAxLjQ5NyAwIDAgMSAwIDEzLjV6TTEyIDE0Yy4zNyAwIC42NTQtLjIxMS44NTMtLjQ0MS4wOTItLjEwNi4xNDctLjI3OS4xNDctLjUzMVYyLjVhLjUuNSAwIDAgMC0uNS0uNWgtMTFhLjUuNSAwIDAgMC0uNS41djExYzAgLjI3OC4yMjMuNS40OTcuNXoiLz4KICA8cGF0aCBkPSJNMiAzaDEwdjJIMnptMCAzaDR2M0gyem0wIDRoNHYxSDJ6bTAgMmg0djFIMnptNS02aDJ2MUg3em0zIDBoMnYxaC0yek03IDhoMnYxSDd6bTMgMGgydjFoLTJ6bS0zIDJoMnYxSDd6bTMgMGgydjFoLTJ6bS0zIDJoMnYxSDd6bTMgMGgydjFoLTJ6Ii8+Cjwvc3ZnPg==)*/
const Newspaper: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="newspaper"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/>
  <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/>
</svg>
      )}
    />
  );

export default Newspaper;
