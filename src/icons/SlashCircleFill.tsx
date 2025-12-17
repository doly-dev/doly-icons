import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![slash-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwbS00LjY0Ni0yLjY0NmEuNS41IDAgMCAwLS43MDgtLjcwOGwtNiA2YS41LjUgMCAwIDAgLjcwOC43MDh6Ii8+Cjwvc3ZnPg==)*/
const SlashCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="slash-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708z"/>
</svg>
      )}
    />
  );

export default SlashCircleFill;
