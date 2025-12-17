import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![h-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptOSA0LjAwMlYxMkg5LjY3VjguNDU1SDYuMzNWMTJINVY0LjAwMmgxLjMzdjMuMzIyaDMuMzRWNC4wMDJ6Ii8+Cjwvc3ZnPg==)*/
const HSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="h-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm9 4.002V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002z"/>
</svg>
      )}
    />
  );

export default HSquareFill;
