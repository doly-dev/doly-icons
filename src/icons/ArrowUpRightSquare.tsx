import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-up-right-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAyYTEgMSAwIDAgMC0xLTFIMmExIDEgMCAwIDAtMSAxdjEyYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMXpNMCAyYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptNS44NTQgOC44MDNhLjUuNSAwIDEgMS0uNzA4LS43MDdMOS4yNDMgNkg2LjQ3NWEuNS41IDAgMSAxIDAtMWgzLjk3NWEuNS41IDAgMCAxIC41LjV2My45NzVhLjUuNSAwIDEgMS0xIDBWNi43MDd6Ii8+Cjwvc3ZnPg==)*/
const ArrowUpRightSquare: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-up-right-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
</svg>
      )}
    />
  );

export default ArrowUpRightSquare;
