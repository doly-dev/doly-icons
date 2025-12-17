import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![save2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxYTEgMSAwIDAgMC0xIDF2MTJhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMUg5LjVhMSAxIDAgMCAwLTEgMXY0LjVoMmEuNS41IDAgMCAxIC4zNTQuODU0bC0yLjUgMi41YS41LjUgMCAwIDEtLjcwOCAwbC0yLjUtMi41QS41LjUgMCAwIDEgNS41IDYuNWgyVjJhMiAyIDAgMCAxIDItMkgxNGEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjJhMiAyIDAgMCAxIDItMmgyLjVhLjUuNSAwIDAgMSAwIDF6Ii8+Cjwvc3ZnPg==)*/
const Save2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="save2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"/>
</svg>
      )}
    />
  );

export default Save2;
