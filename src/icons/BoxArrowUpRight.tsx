import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjYzNiAzLjVhLjUuNSAwIDAgMC0uNS0uNUgxLjVBMS41IDEuNSAwIDAgMCAwIDQuNXYxMEExLjUgMS41IDAgMCAwIDEuNSAxNmgxMGExLjUgMS41IDAgMCAwIDEuNS0xLjVWNy44NjRhLjUuNSAwIDAgMC0xIDBWMTQuNWEuNS41IDAgMCAxLS41LjVoLTEwYS41LjUgMCAwIDEtLjUtLjV2LTEwYS41LjUgMCAwIDEgLjUtLjVoNi42MzZhLjUuNSAwIDAgMCAuNS0uNSIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IC41YS41LjUgMCAwIDAtLjUtLjVoLTVhLjUuNSAwIDAgMCAwIDFoMy43OTNMNi4xNDYgOS4xNDZhLjUuNSAwIDEgMCAuNzA4LjcwOEwxNSAxLjcwN1Y1LjVhLjUuNSAwIDAgMCAxIDB6Ii8+Cjwvc3ZnPg==)*/
const BoxArrowUpRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-arrow-up-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>
      )}
    />
  );

export default BoxArrowUpRight;
