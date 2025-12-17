import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNLjA1IDMuNTU1QTIgMiAwIDAgMSAyIDJoMTJhMiAyIDAgMCAxIDEuOTUgMS41NTVMOCA4LjQxNHpNMCA0LjY5N3Y3LjEwNGw1LjgwMy0zLjU1OHpNNi43NjEgOC44M2wtNi41NyA0LjAyN0EyIDIgMCAwIDAgMiAxNGgxMmEyIDIgMCAwIDAgMS44MDgtMS4xNDRsLTYuNTctNC4wMjdMOCA5LjU4NnptMy40MzYtLjU4NkwxNiAxMS44MDFWNC42OTd6Ii8+Cjwvc3ZnPg==)*/
const EnvelopeFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>
      )}
    />
  );

export default EnvelopeFill;
