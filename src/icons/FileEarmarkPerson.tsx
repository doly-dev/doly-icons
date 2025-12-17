import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-person](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgOGEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDAiLz4KICA8cGF0aCBkPSJNMTQgMTRWNC41TDkuNSAwSDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMk05LjUgM0ExLjUgMS41IDAgMCAwIDExIDQuNWgydjkuMjU1UzEyIDEyIDggMTJzLTUgMS43NTUtNSAxLjc1NVYyYTEgMSAwIDAgMSAxLTFoNS41eiIvPgo8L3N2Zz4=)*/
const FileEarmarkPerson: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-person"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkPerson;
