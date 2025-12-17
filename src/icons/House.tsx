import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC43MDcgMS41YTEgMSAwIDAgMC0xLjQxNCAwTC42NDYgOC4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEwyIDguMjA3VjEzLjVBMS41IDEuNSAwIDAgMCAzLjUgMTVoOWExLjUgMS41IDAgMCAwIDEuNS0xLjVWOC4yMDdsLjY0Ni42NDdhLjUuNSAwIDAgMCAuNzA4LS43MDhMMTMgNS43OTNWMi41YS41LjUgMCAwIDAtLjUtLjVoLTFhLjUuNSAwIDAgMC0uNS41djEuMjkzek0xMyA3LjIwN1YxMy41YS41LjUgMCAwIDEtLjUuNWgtOWEuNS41IDAgMCAxLS41LS41VjcuMjA3bDUtNXoiLz4KPC9zdmc+)*/
const House: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg>
      )}
    />
  );

export default House;
