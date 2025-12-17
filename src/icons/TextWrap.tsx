import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![text-wrap](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDMuNWEuNS41IDAgMCAxIC41LS41aDExYS41LjUgMCAwIDEgMCAxaC0xMWEuNS41IDAgMCAxLS41LS41bTAgNGEuNS41IDAgMCAxIC41LS41aDlhMi41IDIuNSAwIDAgMSAwIDVoLTEuMjkzbC42NDcuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhsLTEuNS0xLjVhLjUuNSAwIDAgMSAwLS43MDhsMS41LTEuNWEuNS41IDAgMCAxIC43MDguNzA4bC0uNjQ3LjY0NkgxMS41YTEuNSAxLjUgMCAwIDAgMC0zaC05YS41LjUgMCAwIDEtLjUtLjVtMCA0YS41LjUgMCAwIDEgLjUtLjVIN2EuNS41IDAgMCAxIDAgMUgyLjVhLjUuNSAwIDAgMS0uNS0uNSIvPgo8L3N2Zz4=)*/
const TextWrap: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="text-wrap"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h9a2.5 2.5 0 0 1 0 5h-1.293l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708l-.647.646H11.5a1.5 1.5 0 0 0 0-3h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default TextWrap;
