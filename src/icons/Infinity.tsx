import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![infinity](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS42OCA1Ljc5MiA3LjM0NSA3Ljc1IDUuNjgxIDkuNzA4YTIuNzUgMi43NSAwIDEgMSAwLTMuOTE2Wk04IDYuOTc4IDYuNDE2IDUuMTEzbC0uMDE0LS4wMTVhMy43NSAzLjc1IDAgMSAwIDAgNS4zMDRsLjAxNC0uMDE1TDggOC41MjJsMS41ODQgMS44NjUuMDE0LjAxNWEzLjc1IDMuNzUgMCAxIDAgMC01LjMwNGwtLjAxNC4wMTV6bS42NTYuNzcyIDEuNjYzLTEuOTU4YTIuNzUgMi43NSAwIDEgMSAwIDMuOTE2eiIvPgo8L3N2Zz4=)*/
const Infinity: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="infinity"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z"/>
</svg>
      )}
    />
  );

export default Infinity;
