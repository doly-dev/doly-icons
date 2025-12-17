import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![compass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNi4wMTZhNy41IDcuNSAwIDAgMCAxLjk2Mi0xNC43NEExIDEgMCAwIDAgOSAwSDdhMSAxIDAgMCAwLS45NjIgMS4yNzZBNy41IDcuNSAwIDAgMCA4IDE2LjAxNm02LjUtNy41YTYuNSA2LjUgMCAxIDEtMTMgMCA2LjUgNi41IDAgMCAxIDEzIDAiLz4KICA8cGF0aCBkPSJtNi45NCA3LjQ0IDQuOTUtMi44My0yLjgzIDQuOTUtNC45NDkgMi44MyAyLjgyOC00Ljk1eiIvPgo8L3N2Zz4=)*/
const Compass: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="compass"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
</svg>
      )}
    />
  );

export default Compass;
