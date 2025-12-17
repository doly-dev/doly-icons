import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![basket3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS43NTcgMS4wNzFhLjUuNSAwIDAgMSAuMTcyLjY4NkwzLjM4MyA2aDkuMjM0TDEwLjA3IDEuNzU3YS41LjUgMCAxIDEgLjg1OC0uNTE0TDEzLjc4MyA2SDE1LjVhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41SC41YS41LjUgMCAwIDEtLjUtLjV2LTFBLjUuNSAwIDAgMSAuNSA2aDEuNzE3TDUuMDcgMS4yNDNhLjUuNSAwIDAgMSAuNjg2LS4xNzJ6TTMuMzk0IDE1bC0xLjQ4LTZoLS45N2wxLjUyNSA2LjQyNmEuNzUuNzUgMCAwIDAgLjcyOS41NzRoOS42MDZhLjc1Ljc1IDAgMCAwIC43My0uNTc0TDE1LjA1NiA5aC0uOTcybC0xLjQ3OSA2eiIvPgo8L3N2Zz4=)*/
const Basket3: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="basket3"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z"/>
</svg>
      )}
    />
  );

export default Basket3;
