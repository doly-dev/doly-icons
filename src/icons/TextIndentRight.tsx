import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![text-indent-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAzLjVhLjUuNSAwIDAgMSAuNS0uNWgxMWEuNS41IDAgMCAxIDAgMWgtMTFhLjUuNSAwIDAgMS0uNS0uNW0xMC42NDYgMi4xNDZhLjUuNSAwIDAgMSAuNzA4LjcwOEwxMS43MDcgOGwxLjY0NyAxLjY0NmEuNS41IDAgMCAxLS43MDguNzA4bC0yLTJhLjUuNSAwIDAgMSAwLS43MDh6TTIgNi41YS41LjUgMCAwIDEgLjUtLjVoNmEuNS41IDAgMCAxIDAgMWgtNmEuNS41IDAgMCAxLS41LS41bTAgM2EuNS41IDAgMCAxIC41LS41aDZhLjUuNSAwIDAgMSAwIDFoLTZhLjUuNSAwIDAgMS0uNS0uNW0wIDNhLjUuNSAwIDAgMSAuNS0uNWgxMWEuNS41IDAgMCAxIDAgMWgtMTFhLjUuNSAwIDAgMS0uNS0uNSIvPgo8L3N2Zz4=)*/
const TextIndentRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="text-indent-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default TextIndentRight;
