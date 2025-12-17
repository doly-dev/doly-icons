import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![save2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDEuNUExLjUgMS41IDAgMCAxIDEwIDBoNGEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjJhMiAyIDAgMCAxIDItMmg2Yy0uMzE0LjQxOC0uNS45MzctLjUgMS41djZoLTJhLjUuNSAwIDAgMC0uMzU0Ljg1NGwyLjUgMi41YS41LjUgMCAwIDAgLjcwOCAwbDIuNS0yLjVBLjUuNSAwIDAgMCAxMC41IDcuNWgtMnoiLz4KPC9zdmc+)*/
const Save2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="save2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v6h-2a.5.5 0 0 0-.354.854l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5A.5.5 0 0 0 10.5 7.5h-2z"/>
</svg>
      )}
    />
  );

export default Save2Fill;
