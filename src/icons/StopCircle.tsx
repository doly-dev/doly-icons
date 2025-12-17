import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stop-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTUgNi41QTEuNSAxLjUgMCAwIDEgNi41IDVoM0ExLjUgMS41IDAgMCAxIDExIDYuNXYzQTEuNSAxLjUgMCAwIDEgOS41IDExaC0zQTEuNSAxLjUgMCAwIDEgNSA5LjV6Ii8+Cjwvc3ZnPg==)*/
const StopCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stop-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5z"/>
</svg>
      )}
    />
  );

export default StopCircle;
