import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![fonts](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuMjU4IDNoLTguNTFsLS4wODMgMi40NmguNDc5Yy4yNi0xLjU0NC43NTgtMS43ODMgMi42OTMtMS44NDVsLjQyNC0uMDEzdjcuODI3YzAgLjY2My0uMTQ0LjgyLTEuMy45MjN2LjUyaDQuMDgydi0uNTJjLTEuMTYyLS4xMDMtMS4zMDYtLjI2LTEuMzA2LS45MjNWMy42MDJsLjQzMS4wMTNjMS45MzQuMDYyIDIuNDM0LjMwMSAyLjY5MyAxLjg0NmguNDc5eiIvPgo8L3N2Zz4=)*/
const Fonts: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="fonts"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479z"/>
</svg>
      )}
    />
  );

export default Fonts;
