import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![align-middle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAxM2ExIDEgMCAwIDAgMSAxaDJhMSAxIDAgMCAwIDEtMVYzYTEgMSAwIDAgMC0xLTFIN2ExIDEgMCAwIDAtMSAxek0xIDhhLjUuNSAwIDAgMCAuNS41SDZ2LTFIMS41QS41LjUgMCAwIDAgMSA4bTE0IDBhLjUuNSAwIDAgMS0uNS41SDEwdi0xaDQuNWEuNS41IDAgMCAxIC41LjUiLz4KPC9zdmc+)*/
const AlignMiddle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="align-middle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8m14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5"/>
</svg>
      )}
    />
  );

export default AlignMiddle;
