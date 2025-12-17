import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![credit-card-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxSDB6bTAgM3Y1YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY3em0zIDJoMWExIDEgMCAwIDEgMSAxdjFhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTF2LTFhMSAxIDAgMCAxIDEtMSIvPgo8L3N2Zz4=)*/
const CreditCardFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="credit-card-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default CreditCardFill;
