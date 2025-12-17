import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCAyLjVhLjUuNSAwIDAgMC0uNS0uNWgtNmEuNS41IDAgMCAwIDAgMWg0Ljc5M0wyLjE0NiAxMy4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEwxMyAzLjcwN1Y4LjVhLjUuNSAwIDAgMCAxIDB6Ii8+Cjwvc3ZnPg==)*/
const ArrowUpRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-up-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg>
      )}
    />
  );

export default ArrowUpRight;
