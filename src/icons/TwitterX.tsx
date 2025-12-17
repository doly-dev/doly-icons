import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![twitter-x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNi43NWgyLjQ1NGwtNS4zNiA2LjE0MkwxNiAxNS4yNWgtNC45MzdsLTMuODY3LTUuMDctNC40MjUgNS4wN0guMzE2bDUuNzMzLTYuNTdMMCAuNzVoNS4wNjNsMy40OTUgNC42MzNMMTIuNjAxLjc1Wm0tLjg2IDEzLjAyOGgxLjM2TDQuMzIzIDIuMTQ1SDIuODY1eiIvPgo8L3N2Zz4=)*/
const TwitterX: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="twitter-x"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
      )}
    />
  );

export default TwitterX;
