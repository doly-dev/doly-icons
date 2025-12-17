import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-ppt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yem0xMC0xSDRhMSAxIDAgMCAwLTEgMXYxMmExIDEgMCAwIDAgMSAxaDhhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTEiLz4KICA8cGF0aCBkPSJNNiA1YTEgMSAwIDAgMSAxLTFoMS4xODhhMi43NSAyLjc1IDAgMCAxIDAgNS41SDd2MmEuNS41IDAgMCAxLTEgMHptMSAzLjVoMS4xODhhMS43NSAxLjc1IDAgMSAwIDAtMy41SDd6Ii8+Cjwvc3ZnPg==)*/
const FilePpt: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-ppt"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
  <path d="M6 5a1 1 0 0 1 1-1h1.188a2.75 2.75 0 0 1 0 5.5H7v2a.5.5 0 0 1-1 0zm1 3.5h1.188a1.75 1.75 0 1 0 0-3.5H7z"/>
</svg>
      )}
    />
  );

export default FilePpt;
