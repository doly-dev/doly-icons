import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![unindent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyA4YS41LjUgMCAwIDAtLjUtLjVINS43MDdsMi4xNDctMi4xNDZhLjUuNSAwIDEgMC0uNzA4LS43MDhsLTMgM2EuNS41IDAgMCAwIDAgLjcwOGwzIDNhLjUuNSAwIDAgMCAuNzA4LS43MDhMNS43MDcgOC41SDEyLjVBLjUuNSAwIDAgMCAxMyA4Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41IDRhLjUuNSAwIDAgMC0uNS41djdhLjUuNSAwIDAgMCAxIDB2LTdhLjUuNSAwIDAgMC0uNS0uNSIvPgo8L3N2Zz4=)*/
const Unindent: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="unindent"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M13 8a.5.5 0 0 0-.5-.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H12.5A.5.5 0 0 0 13 8"/>
  <path fillRule="evenodd" d="M3.5 4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5"/>
</svg>
      )}
    />
  );

export default Unindent;
