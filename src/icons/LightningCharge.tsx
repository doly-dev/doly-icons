import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![lightning-charge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuMjUxLjA2OGEuNS41IDAgMCAxIC4yMjcuNThMOS42NzcgNi41SDEzYS41LjUgMCAwIDEgLjM2NC44NDNsLTggOC41YS41LjUgMCAwIDEtLjg0Mi0uNDlMNi4zMjMgOS41SDNhLjUuNSAwIDAgMS0uMzY0LS44NDNsOC04LjVhLjUuNSAwIDAgMSAuNjE1LS4wOXpNNC4xNTcgOC41SDdhLjUuNSAwIDAgMSAuNDc4LjY0N0w2LjExIDEzLjU5bDUuNzMyLTYuMDlIOWEuNS41IDAgMCAxLS40NzgtLjY0N0w5Ljg5IDIuNDF6Ii8+Cjwvc3ZnPg==)*/
const LightningCharge: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="lightning-charge"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"/>
</svg>
      )}
    />
  );

export default LightningCharge;
