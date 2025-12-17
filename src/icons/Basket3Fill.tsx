import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![basket3-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS43NTcgMS4wNzFhLjUuNSAwIDAgMSAuMTcyLjY4NkwzLjM4MyA2aDkuMjM0TDEwLjA3IDEuNzU3YS41LjUgMCAxIDEgLjg1OC0uNTE0TDEzLjc4MyA2SDE1LjVhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41SC41YS41LjUgMCAwIDEtLjUtLjV2LTFBLjUuNSAwIDAgMSAuNSA2aDEuNzE3TDUuMDcgMS4yNDNhLjUuNSAwIDAgMSAuNjg2LS4xNzJ6TTIuNDY4IDE1LjQyNi45NDMgOWgxNC4xMTRsLTEuNTI1IDYuNDI2YS43NS43NSAwIDAgMS0uNzI5LjU3NEgzLjE5N2EuNzUuNzUgMCAwIDEtLjczLS41NzR6Ii8+Cjwvc3ZnPg==)*/
const Basket3Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="basket3-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
</svg>
      )}
    />
  );

export default Basket3Fill;
