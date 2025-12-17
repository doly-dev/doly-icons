import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sunrise-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy42NDYgMS4xNDZhLjUuNSAwIDAgMSAuNzA4IDBsMS41IDEuNWEuNS41IDAgMCAxLS43MDguNzA4TDguNSAyLjcwN1Y0LjVhLjUuNSAwIDAgMS0xIDBWMi43MDdsLS42NDYuNjQ3YS41LjUgMCAxIDEtLjcwOC0uNzA4ek0yLjM0MyA0LjM0M2EuNS41IDAgMCAxIC43MDcgMGwxLjQxNCAxLjQxNGEuNS41IDAgMCAxLS43MDcuNzA3TDIuMzQzIDUuMDVhLjUuNSAwIDAgMSAwLS43MDdtMTEuMzE0IDBhLjUuNSAwIDAgMSAwIC43MDdsLTEuNDE0IDEuNDE0YS41LjUgMCAxIDEtLjcwNy0uNzA3bDEuNDE0LTEuNDE0YS41LjUgMCAwIDEgLjcwNyAwTTExLjcwOSAxMS41YTQgNCAwIDEgMC03LjQxOCAwSC41YS41LjUgMCAwIDAgMCAxaDE1YS41LjUgMCAwIDAgMC0xaC0zLjc5ek0wIDEwYS41LjUgMCAwIDEgLjUtLjVoMmEuNS41IDAgMCAxIDAgMWgtMkEuNS41IDAgMCAxIDAgMTBtMTMgMGEuNS41IDAgMCAxIC41LS41aDJhLjUuNSAwIDAgMSAwIDFoLTJhLjUuNSAwIDAgMS0uNS0uNSIvPgo8L3N2Zz4=)*/
const SunriseFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sunrise-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default SunriseFill;
