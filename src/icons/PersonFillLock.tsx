import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-fill-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDBtLTkgOGMwIDEgMSAxIDEgMWg1di0xYTIgMiAwIDAgMSAuMDEtLjIgNC40OSA0LjQ5IDAgMCAxIDEuNTM0LTMuNjkzUTguODQ0IDkuMDAyIDggOWMtNSAwLTYgMy02IDRtNyAwYTEgMSAwIDAgMSAxLTF2LTFhMiAyIDAgMSAxIDQgMHYxYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxaC00YTEgMSAwIDAgMS0xLTF6bTMtM2ExIDEgMCAwIDAtMSAxdjFoMnYtMWExIDEgMCAwIDAtMS0xIi8+Cjwvc3ZnPg==)*/
const PersonFillLock: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-fill-lock"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5v-1a2 2 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693Q8.844 9.002 8 9c-5 0-6 3-6 4m7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
</svg>
      )}
    />
  );

export default PersonFillLock;
