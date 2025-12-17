import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sunrise](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy42NDYgMS4xNDZhLjUuNSAwIDAgMSAuNzA4IDBsMS41IDEuNWEuNS41IDAgMCAxLS43MDguNzA4TDguNSAyLjcwN1Y0LjVhLjUuNSAwIDAgMS0xIDBWMi43MDdsLS42NDYuNjQ3YS41LjUgMCAxIDEtLjcwOC0uNzA4ek0yLjM0MyA0LjM0M2EuNS41IDAgMCAxIC43MDcgMGwxLjQxNCAxLjQxNGEuNS41IDAgMCAxLS43MDcuNzA3TDIuMzQzIDUuMDVhLjUuNSAwIDAgMSAwLS43MDdtMTEuMzE0IDBhLjUuNSAwIDAgMSAwIC43MDdsLTEuNDE0IDEuNDE0YS41LjUgMCAxIDEtLjcwNy0uNzA3bDEuNDE0LTEuNDE0YS41LjUgMCAwIDEgLjcwNyAwTTggN2EzIDMgMCAwIDEgMi41OTkgNC41SDUuNEEzIDMgMCAwIDEgOCA3bTMuNzEgNC41YTQgNCAwIDEgMC03LjQxOCAwSC40OTlhLjUuNSAwIDAgMCAwIDFoMTVhLjUuNSAwIDAgMCAwLTFoLTMuNzl6TTAgMTBhLjUuNSAwIDAgMSAuNS0uNWgyYS41LjUgMCAwIDEgMCAxaC0yQS41LjUgMCAwIDEgMCAxMG0xMyAwYS41LjUgMCAwIDEgLjUtLjVoMmEuNS41IDAgMCAxIDAgMWgtMmEuNS41IDAgMCAxLS41LS41Ii8+Cjwvc3ZnPg==)*/
const Sunrise: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sunrise"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default Sunrise;
