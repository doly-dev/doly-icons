import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![power](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy41IDF2N2gxVjF6Ii8+CiAgPHBhdGggZD0iTTMgOC44MTJhNSA1IDAgMCAxIDIuNTc4LTQuMzc1bC0uNDg1LS44NzRBNiA2IDAgMSAwIDExIDMuNjE2bC0uNTAxLjg2NUE1IDUgMCAxIDEgMyA4LjgxMiIvPgo8L3N2Zz4=)*/
const Power: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="power"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.5 1v7h1V1z"/>
  <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
</svg>
      )}
    />
  );

export default Power;
