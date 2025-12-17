import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![printer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDhhLjUuNSAwIDEgMCAwLTEgLjUuNSAwIDAgMCAwIDEiLz4KICA8cGF0aCBkPSJNNSAxYTIgMiAwIDAgMC0yIDJ2MkgyYTIgMiAwIDAgMC0yIDJ2M2EyIDIgMCAwIDAgMiAyaDF2MWEyIDIgMCAwIDAgMiAyaDZhMiAyIDAgMCAwIDItMnYtMWgxYTIgMiAwIDAgMCAyLTJWN2EyIDIgMCAwIDAtMi0yaC0xVjNhMiAyIDAgMCAwLTItMnpNNCAzYTEgMSAwIDAgMSAxLTFoNmExIDEgMCAwIDEgMSAxdjJINHptMSA1YTIgMiAwIDAgMC0yIDJ2MUgyYTEgMSAwIDAgMS0xLTFWN2ExIDEgMCAwIDEgMS0xaDEyYTEgMSAwIDAgMSAxIDF2M2ExIDEgMCAwIDEtMSAxaC0xdi0xYTIgMiAwIDAgMC0yLTJ6bTcgMnYzYTEgMSAwIDAgMS0xIDFINWExIDEgMCAwIDEtMS0xdi0zYTEgMSAwIDAgMSAxLTFoNmExIDEgMCAwIDEgMSAxIi8+Cjwvc3ZnPg==)*/
const Printer: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="printer"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
</svg>
      )}
    />
  );

export default Printer;
