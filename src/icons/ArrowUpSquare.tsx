import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-up-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAyYTEgMSAwIDAgMC0xLTFIMmExIDEgMCAwIDAtMSAxdjEyYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMXpNMCAyYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptOC41IDkuNWEuNS41IDAgMCAxLTEgMFY1LjcwN0w1LjM1NCA3Ljg1NGEuNS41IDAgMSAxLS43MDgtLjcwOGwzLTNhLjUuNSAwIDAgMSAuNzA4IDBsMyAzYS41LjUgMCAwIDEtLjcwOC43MDhMOC41IDUuNzA3eiIvPgo8L3N2Zz4=)*/
const ArrowUpSquare: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-up-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
</svg>
      )}
    />
  );

export default ArrowUpSquare;
