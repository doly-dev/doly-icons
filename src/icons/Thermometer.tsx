import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![thermometer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNGExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgMyIvPgogIDxwYXRoIGQ9Ik04IDBhMi41IDIuNSAwIDAgMC0yLjUgMi41djcuNTVhMy41IDMuNSAwIDEgMCA1IDBWMi41QTIuNSAyLjUgMCAwIDAgOCAwTTYuNSAyLjVhMS41IDEuNSAwIDEgMSAzIDB2Ny45ODdsLjE2Ny4xNWEyLjUgMi41IDAgMSAxLTMuMzMzIDBsLjE2Ni0uMTV6Ii8+Cjwvc3ZnPg==)*/
const Thermometer: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="thermometer"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
  <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z"/>
</svg>
      )}
    />
  );

export default Thermometer;
