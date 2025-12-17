import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![command](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDJBMS41IDEuNSAwIDAgMSA1IDMuNVY1SDMuNWExLjUgMS41IDAgMSAxIDAtM002IDVWMy41QTIuNSAyLjUgMCAxIDAgMy41IDZINXY0SDMuNUEyLjUgMi41IDAgMSAwIDYgMTIuNVYxMWg0djEuNWEyLjUgMi41IDAgMSAwIDIuNS0yLjVIMTFWNmgxLjVBMi41IDIuNSAwIDEgMCAxMCAzLjVWNXptNCAxdjRINlY2em0xLTFWMy41QTEuNSAxLjUgMCAxIDEgMTIuNSA1em0wIDZoMS41YTEuNSAxLjUgMCAxIDEtMS41IDEuNXptLTYgMHYxLjVBMS41IDEuNSAwIDEgMSAzLjUgMTF6Ii8+Cjwvc3ZnPg==)*/
const Command: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="command"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3M6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5zm4 1v4H6V6zm1-1V3.5A1.5 1.5 0 1 1 12.5 5zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11z"/>
</svg>
      )}
    />
  );

export default Command;
